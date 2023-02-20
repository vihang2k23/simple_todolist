import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Routes from "./routes/routes.js";
// import "bootstrap/dist/css/bootstrap.min.css"
import swal from "vue-swal"
import { BootstrapVue, JumbotronPlugin} from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin


Vue.use(JumbotronPlugin)

Vue.use(VueRouter);
Vue.use(swal)

Vue.filter("uppercase",(value)=>{
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
Vue.filter("snippet",(value)=>{
return value.slice(0,100) + "...."
})

const router = new VueRouter({
  routes: Routes,
  mode: "history",
});
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router: router,
}).$mount("#app");
