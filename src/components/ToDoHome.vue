<template class="conatiner m-0 p-0">
<div class="conatiner m-0 p-0">
  
  <div>
<b-navbar></b-navbar>
    <b-navbar-brand ><router-link to="/addtask"></router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
  </div>

  
  <div b-container>
    <div v-for="data in todos" :key="data.id">
      <b-row v-if="data">
        <b-col cols="3"></b-col>
        <b-col  cols="6" class="mt-4">
          <b-card
            border-variant="primary"
            :header="data.taskName"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center"
          >
            <b-card-text>{{ data.taskcontent }}</b-card-text>
            <template #footer>
              <div>
                <b-form-checkbox
                  id="checkbox-1"
                  name="checkbox-1"
                  value="accepted"
                  v-model="data.taskstatus"
                  
                >
               <span class="p-2">   {{ data.status == "true" ? "Done" :"Not Done" }}</span>
                 
                </b-form-checkbox>
                <b-button class="p-2 m-2">Edit</b-button>
                <b-button v-on:click="removeItem(data.id)">Delete</b-button>
              </div>
            </template>
          </b-card>
        </b-col>
        
        <b-col cols="3"></b-col>
      </b-row>
    </div>
   
  </div>
</div>
</template>
<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      status: "",
    };
  },
  methods: {
    removetask(id) {
      axios.delete(`http://localhost:3000/tasks/${id}`);
      this.todos = this.todos.filter((tododata) => tododata.id !== id);
    },
  },

  async created() {
    try {
      const response = await axios.get("http://localhost:3000/tasks");
      console.log(response);
      this.todos = response.data;
      console.log(this.todos);
    } catch (e) {
      console.log(e);
    }
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
