import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import LoginComponent from "./views/Login.vue";
import SecureComponent from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/home",
      name: "home",
      component: SecureComponent
    },

    {
      path: "/upload",
      name: "upload",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Upload.vue")
    }
  ]
});
