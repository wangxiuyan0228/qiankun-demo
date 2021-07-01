import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalStataus: null
  },
  mutations: {
    SET_STATUS: (state, data) => {
      state.globalStataus = data;
    }
  },
  actions: {},
  modules: {},
  getters: {
    globalStataus: state => state.globalStataus
  }
});
