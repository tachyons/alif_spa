import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import GAuth from "vue-google-oauth2";

import "./assets/styles/index.css";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

const gauthOption = {
  clientId: "584885505714-8lioclscfr25psi3ql7l0uaq8pciq9h3.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account"
};
Vue.use(GAuth, gauthOption);

const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
  Vue.prototype.$http.defaults.headers.post["Content-Type"] =
    "application/json";
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
