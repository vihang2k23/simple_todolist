<template>
  <div id="add-blog">
    <h2>Edit Your Task</h2>

    <!-- // Form for Add task -->
    <form v-if="!submitted">
      <!-- // Task title -->
      <label>Task Title:</label>
      <input type="text" required v-model.lazy="todata.taskname" />
      <!-- // Task Description -->
      <label>Task Description:</label>
      <textarea cols="5" v-model.lazy="todata.taskcontent"></textarea>

      <!-- // Select Task Priority  -->
      <div id="selectbar">
        <label for="exampleFormControlTextarea1">Select Priority</label>
        <select
          v-model.lazy="todata.addpriority"
          aria-label="Default select example"
        >
          <option selected>Select Priority</option>
          <option v-for="prodata in select_priority" v-bind:key="prodata">
            {{ prodata }}
          </option>
        </select>
      </div>
      <div class="task-status">
        <span class="gender-title">Task Status</span><br />

        <input
          name="status"
          id="dot-1"
          value="true"
          type="radio"
          v-model.lazy="todata.status"
        />
        <label class=".label" for="dot-1">
          <span class="mx-2">Done</span>
        </label>
        <input
          name="gender"
          id="dot-2"
          value="false"
          type="radio"
          v-model.lazy="todata.status"
        />
        <label for="dot-2" class="label">
          <span class="mx-2"> Not Done</span>
        </label>
      </div>
      <hr />
      <button v-on:click.prevent="updatedata(todata.id)">Update Task</button>
    </form>
    <div>
      <button>
        <router-link style="text-decoration: none; color: white" to="/"
          >Back To Home</router-link
        >
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      todata: [],
      select_priority: ["high", "medium", "low"],
      submitted: false,
    };
  },
  // Get data based on id
  async mounted() {
    axios
      .get("http://localhost:3000/tasks/" + this.$route.params.id)
      .then((res) => {
        this.todata = res.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
    console.log(this.todata);
  },

  // Update Method
  methods: {
    async updatedata(id) {
      try {
        console.log(this.todata, id);
        const user = await axios.put("http://localhost:3000/tasks/" + id, {
          taskname: this.todata.taskname,
          taskcontent: this.todata.taskcontent,
          addpriority: this.todata.addpriority,
          status: this.todata.status,
        });
        console.log(user, "sucessss");
        this.$router.push("/");
        this.alert("Data Update Successfully");
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
