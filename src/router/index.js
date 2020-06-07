import Vue from "vue";
import VueRouter from "vue-router";
import Subjects from "../views/Subjects.vue";
import Login from "../views/Login.vue";
import Stories from "../views/Stories.vue";
import Videos from "../views/Videos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Subjects",
    component: Subjects,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/stories",
    name: "Stories",
    component: Stories,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/videos",
    name: "Videos",
    component: Videos,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
