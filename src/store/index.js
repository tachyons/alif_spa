import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {}
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://dev.aliflearning.co/auth/login",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.auth_token;
            const user = resp.data;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    async loginGoogle({ commit }) {
      const googleUser = await this._vm.$gAuth.signIn();
      const idToken = googleUser.getAuthResponse().id_token;
      const response = await this._vm.$http.post(
        "https://dev.aliflearning.co/auth/login_google",
        { token: idToken, redirect_uri: "postmessage" }
      );
      if (response.status == 200) {
        const token = response.data.auth_token;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        const userResponse = axios({
          url: "https://dev.aliflearning.co/api/v1/me",
          method: "GET"
        });
        const user = userResponse.data;
        console.log(user);
        commit("auth_success", token, user);
      } else {
        commit("auth_error");
      }
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  }
});
