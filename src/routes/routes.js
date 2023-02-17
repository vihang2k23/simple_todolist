import ToDoHome from "../components/ToDoHome.vue";
import AddToList from "../components/AddToList.vue";
import EditToList from "../components/EditToList.vue";
import NotFoundComponent from "../components/NotFoundComponent.vue";
export default [
  { path: "/", component: ToDoHome },
  { path: "/Addtask", component: AddToList },
  { path: "/editask/:id", component: EditToList },
  { name: "SigUpPage", path: "/signup", component: SigUpPageVue },
  { path: "*", component: NotFoundComponent },
];
