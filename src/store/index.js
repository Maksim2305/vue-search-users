import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: [],
    isLoading: false,
    currentUser: {
      id: null,
    },
  },
  getters: {
    usersList(state) {
      return state.users;
    },
    isLoading(state) {
      return state.isLoading;
    },
    currentUser(state) {
      return state.currentUser;
    },
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    async fetchUsers({ commit }, params) {
      const baseURL = " https://jsonplaceholder.typicode.com/users?_limit=100";
      const ids = params.split(",");
      const query = ids
        .map((it) => {
          if (!isNaN(it)) {
            return `id=${it.trim()}`;
          } else {
            return `name=${it.trim()}`;
          }
        })
        .join("&");
      const url = `${baseURL}&${query}`;
      const { data } = await axios.get(url);
      commit("setUsers", data);
    },
  },
});
export default store;
