<template>
  <div b-container>

    <div v-for="data in todos" :key="data.id">
      <b-row>
        <b-col cols="3"></b-col>
        <b-col cols="6" class="mt-4">
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
                
    >
     {{ data.status }}
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
</template>
<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      upstatus: "",
    };
  },
  methods:{
    removeItem(id) {
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
