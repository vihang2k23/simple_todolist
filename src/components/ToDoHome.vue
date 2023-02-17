<template>
  <div class="col-xl-12">
    <div class="row">
      <div class="container">
        <section class="vh-100 gradient-custom-2">
          <div class="container py-5 h-100">
            <div
              class="row d-flex justify-content-center align-items-center h-100"
            >
              <div class="col-md-12 col-xl-12">
                <div class="card mask-custom">
                  <div
                    class="card-body p-4 text-white"
                    style="background-color: rgb(126 64 246)"
                  >
                    <div class="text-center pt-3 pb-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                        alt="Check"
                        width="60"
                      />
                      <h2 class="my-4">Task List</h2>
                      <button class="btn btn-dark" style="float: right">
                        <router-link to="/Addtask">Add To List</router-link>
                      </button>
                    </div>

                    <table class="table text-white mb-0">
                      <thead>
                        <tr>
                          <th scope="col">Status</th>
                          <th scope="col">Task</th>
                          <th scope="col">Priority</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          class="fw-normal"
                          v-for="tododata in todos"
                          :key="tododata.id"
                        >
                          <div class="form-check">
                            <input
                              @click="boughtItem(tododata)"
                              class="form-check-input"
                              type="checkbox"
                              v-model="tododata.status"
                            />

                            <label
                              class="form-check-label"
                              for="flexCheckCheckedDisabled"
                            >
                              {{ tododata.status ? "Done" : "Undone" }}
                            </label>
                          </div>
                          <td class="align-middle">
                            <span
                              v-bind:class="tododata.status ? 'isclicked' : ''"
                              >{{ tododata.taskName }}</span
                            >
                          </td>
                          <td class="align-middle">
                            <h6 class="mb-0">
                              <span
                                v-if="tododata.addpriority == 'high'"
                                class="badge bg-danger"
                                >{{ tododata.addpriority }}</span
                              >
                              <span
                                v-if="tododata.addpriority == 'medium'"
                                class="badge bg-warning"
                                >{{ tododata.addpriority }}</span
                              >
                              <span
                                v-if="tododata.addpriority == 'low'"
                                class="badge bg-success"
                                >{{ tododata.addpriority }}</span
                              >
                            </h6>
                          </td>
                          <td class="align-middle">
                            <!-- <a href="#!" data-mdb-toggle="tooltip" title="Done"
                          ><i class="fas fa-check fa-lg text-success me-3"></i
                        ></a>
                        <a
                          href="#!"
                          data-mdb-toggle="tooltip"
                          title="Remove"
                          style="color: red"
                          ><i
                            class="fas fa-trash-alt fa-lg text-warning"
                            style="color: red"
                          ></i
                        ></a> -->
                            <button class="btn btn-warning">
                              <router-link v-bind:to="'/editask/' + tododata.id"
                                >Edit</router-link
                              >
                              <!-- to="{ name: '/editask/', params: { Id: tododata.id }" -->
                              <!-- to="{ path: '/editask/', params: { id: {{ tododata.id }} }" --></button
                            >&nbsp;
                            <button
                              class="btn btn-danger"
                              v-on:click="removeItem(tododata.id)"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      todos: [],
      upstatus: "",
    };
  },
  methods: {
    mounted() {},
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
