<template class="conatiner m-0 p-0">
  <div class="conatiner m-0 p-0">
    <div b-container>
      <b-navbar type="light" variant="dark">
        <!-- // Navigation button to Add task -->
        <b-button pill variant="light" class="mx-5" type="submit"
          ><router-link to="/Addtask" class="text-dark"
            >Addtask</router-link
          ></b-button
        >

        <!-- Filter Your task -->
        <b-form-input
          placeholder="Search"
          class="w-25"
          size="sm"
          v-model="search"
        ></b-form-input>
      </b-navbar>
      <b-row class="mt-5"
        ><b-col
          ><span class="bg-danger w-100 p-2"> &#128515; </span>
          <span> &nbsp;- High Priority </span
          ><span class="bg-warning w-100 p-2"> &#128515; </span>
          <span> &nbsp;- Medium Priority </span>
          <span class="bg-success w-100 p-2"> &#128515; </span>
          <span> &nbsp;- Low Priority </span></b-col
        >
      </b-row>
      <!-- Display your task -->
      <div v-for="data in filtertask" :key="data.id">
        <b-row>
          <b-col cols="3"></b-col>
          <b-col v-show="data" cols="6" class="mt-4">
            <!-- High Priority task code -->
            <span v-if="data.addpriority == 'high'"
              ><b-card
                border-variant="danger"
                :header="data.taskname | uppercase"
                header-bg-variant="danger"
                header-text-variant="white"
                align="center"
              >
                <!-- display task content -->
                <b-card-text>{{ data.taskcontent | snippet}}</b-card-text>
                <template #footer>
                  <!-- //display status of task  -->
                  <div>
                    <input
                      @click="boughtItem(data)"
                      class="form-check-input my-3 p-2"
                      type="checkbox"
                      v-model="data.status"
                    />
                    <span class="mx-2">{{
                      data.status ? "Done" : "Not Done"
                    }}</span>
                    <!-- //navigate to edit task -->
                    <b-button class="p-2 m-2"
                      ><router-link
                        v-bind:to="'/editask/' + data.id"
                        class="text-white"
                        >Edit</router-link
                      ></b-button
                    >
                    <!-- //navigate to delete button -->
                    <b-button v-on:click="removetask(data.id)">Delete</b-button>
                  </div>
                </template>
              </b-card></span
            >
            <!-- Medium Priority task code -->
            <span v-if="data.addpriority == 'medium'"
              ><b-card
                v-if="data.addpriority == 'medium'"
                border-variant="warning"
                :header="data.taskname"
                header-bg-variant="warning"
                header-text-variant="white"
                align="center"
                ><!-- display task content -->
                <b-card-text>{{ data.taskcontent }}</b-card-text>
                <template #footer>
                  <!-- //display status of task  -->
                  <div>
                    <input
                      @click="boughtItem(data)"
                      class="form-check-input my-3 p-2"
                      type="checkbox"
                      v-model="data.status"
                    />
                    <span class="mx-2">{{
                      data.status ? "Done" : "Not Done"
                    }}</span>
                    <!-- //navigate to edit task -->
                    <b-button class="p-2 m-2"
                      ><router-link
                        v-bind:to="'/editask/' + data.id"
                        class="text-white"
                        >Edit</router-link
                      ></b-button
                    >
                    <!-- //navigate to delete button -->
                    <b-button v-on:click="removetask(data.id)">Delete</b-button>
                  </div>
                </template>
              </b-card></span
            >

            <!-- Low Priority task code -->
            <span v-if="data.addpriority == 'low'">
              <b-card
                v-if="data.addpriority == 'low'"
                border-variant="success"
                :header="data.taskname"
                header-bg-variant="success"
                header-text-variant="white"
                align="center"
              >
                <!-- display task content -->
                <b-card-text>{{ data.taskcontent }}</b-card-text>
                <template #footer>
                  <!-- //display status of task  -->
                  <div>
                    <input
                      @click="boughtItem(data)"
                      class="form-check-input my-3 p-2"
                      type="checkbox"
                      v-model="data.status"
                    />
                    <span class="mx-2">{{
                      data.status ? "Done" : "Not Done"
                    }}</span>
                    <!-- //navigate to edit task -->
                    <b-button class="p-2 m-2"
                      ><router-link
                        v-bind:to="'/editask/' + data.id"
                        class="text-white"
                        >Edit</router-link
                      ></b-button
                    >
                    <!-- //navigate to delete button -->
                    <b-button v-on:click="removetask(data.id)">Delete</b-button>
                  </div>
                </template>
              </b-card></span
            >
            <!-- display task name -->
          </b-col>

          <b-col cols="3"></b-col>
        </b-row>
      </div>
      <div v-show="!todos.length" class="mt-5 mx-5">
        <b-card
          bg-variant="secondary"
          text-variant="white"
          class="text-center"
          title="Sorry...!!"
        >
          <b-card-text text-variant="white">
            Task is not Available
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from 'sweetalert';


export default {
  name: "App",
  data() {
    return {
      todos: [],
      status: "",
      search: "",
    };
  },
  //Get data Function
  async created() {
    try {
      const response = await axios.get("http://localhost:3000/tasks");
      console.log(response);
      this.todos = response.data;
      this.todos.reverse()
      // console.log(this.todos.filter((data)=>{console.log(data.taskname.match(this.search))}));
    } catch (e) {
      console.log(e);
    }
  },
  //Filter Data
  computed: {
    filtertask() {
      return this.todos.filter((data) => {
        console.log(data);
        return data.taskname.match(this.search);
      });
    },
  },
  methods: {
    //Delete Task
    removetask(id) {


      swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this task details!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    console.log(id, "id--->");
      axios.delete(`http://localhost:3000/tasks/${id}`);
      this.todos = this.todos.filter((tododata) => tododata.id !== id);
      console.log(this.todos);
    swal("Poof! Your task details has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your task details  is safe!");
  }
});

      
    },

    // To Update Status
    async boughtItem(t_status) {
      console.log(t_status.status == false);
      if (t_status.status == false) {
        try {
          const user = await axios.put(
            "http://localhost:3000/tasks/" + t_status.id,
            {
              taskname: t_status.taskname,
              taskcontent: t_status.taskcontent,
              addpriority: t_status.addpriority,

              status: true,
            }
          );

          console.log(user.data);
          this.alert("User updated!");
          // location.reload();
          
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const response = await axios.put(
            "http://localhost:3000/tasks/" + t_status.id,
            {
              taskname: t_status.taskname,
              taskcontent: t_status.taskcontent,
              addpriority: t_status.addpriority,

              status: false,
            }
          );
          this.status = response.data.status;
          console.log("response", response.data);
          this.alert("Status Updated");
        } catch (e) {
          console.log(e);
        }
      }
    },
    alert(data) {
      this.$swal(data);
    },
  },
};
</script>
<style scoped>
.gradient-custom-2 {
  background: linear-gradient(
    to right,
    rgba(126, 64, 246, 1),
    rgba(80, 139, 252, 1)
  );
  background-image: linear-gradient(
    to right,
    rgb(126, 64, 246),
    rgb(80, 139, 252)
  );
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
  border-radius: 0.5rem 0.5rem rem 0 0;
  margin: auto;
}

a {
  text-decoration: none;
}

.isclicked {
  text-decoration: line-through;
}
</style>
