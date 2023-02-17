<template>
  <div id="add-blog">
    <h2>Add a New Blog Task</h2>

    <!-- // Form for Add task -->
    <form v-if="!submitted">
      <!-- // Task title -->
      <label>Task Title:</label>
      <input type="text" v-model.lazy="todotask.taskname" required />
      <!-- // Task Description -->
      <label>Task Description:</label>
      <textarea v-model.lazy.trim="todotask.taskcontent" cols="5"></textarea>

      <!-- // Select Task Priority  -->
      <div id="selectbar">
        <label for="exampleFormControlTextarea1">Select Priority</label>
        <select v-model.lazy="todotask.addpriority" aria-label="Default select example">
          <option selected>Select Priority</option>
          <option v-for="prodata in select_priority" v-bind:key="prodata">
            {{ prodata }}
          </option>
        </select>
      </div>
      <div class="task-status">
        <span class="gender-title">Task Status</span><br />

        <input name="status" id="dot-1" value="1" type="radio" v-model.lazy="todotask.status" />
        <label class=".label" for="dot-1">
          <span>Done</span>
        </label>
        <input name="gender" id="dot-2" value="2" type="radio" v-model.lazy="todotask.status" />
        <label for="dot-2" class=".label">
          <span>Not Done</span>
        </label>
      </div>
      <hr />
      <button v-on:click.prevent="postdata">Add Task</button>
    </form>
    <div>
      <button>
        <router-link style="text-decoration: none; color: white" to="/">Back To Home</router-link>
      </button>
    </div>
    <!-- <div v-if="submitted">
        <h3>Thanks for adding your post</h3>
      </div> -->
  </div>
</template>

<script>
// import api from "../mixins/axios"
import axios from "axios";
export default {
  // mixins:[api],
  data() {
    return {
      todotask: {
        taskname: "",
        taskcontent: "",
        addpriority: null,
        status: "",
      },
      todata: [],
      select_priority: ["high", "medium", "low"],
      submitted: false,
    };
  },
  methods: {
    async postdata() {
      console.log("data", this.todotask);
      try {
        const response = await axios.post(`http://localhost:3000/tasks`, {
          taskName: this.todotask.taskname,
          taskcontent: this.todotask.taskcontent,
          addpriority: this.todotask.addpriority,
          status: this.todotask.status,
        });
        console.log(response.data);
        this.$router.push("/");
        this.alert("User Added!");
      } catch (e) {
        console.log(e);
      }
    },
    alert(data) {
      this.$swal(data);
    },
  },
};
</script>
<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}

label {
  /* display: block; */
  margin-top: 20px;
}

input[type="text"],
textarea,
select {
  display: block;
  width: 100%;
  padding: 8px;
}

textarea {
  height: 200px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

/* #selectbar input {
  display: inline-block;
  margin-right: 10px;
}
#selectbar label {
  display: inline-block;
  margin-top: 0;
} */
hr {
  display: none;
}

button {
  /* display: block; */
  margin: 10px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
  align-items: center;
}

.task-status {
  margin-top: 20px;
}
</style>
