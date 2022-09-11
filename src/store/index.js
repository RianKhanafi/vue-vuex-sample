import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  // access directly state in a component use $store.state.stateName
  state: {
    counter: 0,
    colorCode: "blue",
  },
  getters: {
    counterSquare(state) {
      return state.counter * state.counter;
    },
  },
  // access directly mutation in a component use $store.commit('mutationName')
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber;
    },
    decreaseCounter(state) {
      state.counter -= randomNumber;
    },
    setColorCode(state, setColorCode) {
      state.colorCode = setColorCode;
    },
  },
  // access directly actions in a component use $store.dispatch('actionsName')
  // commit pase the data to mutator
  actions: {
    increaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("increaseCounter", response.data);
      });
    },
    decreaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then((response) => {
        commit("increaseCounter", response.data);
      });
    },
    setColorCode({ commit }, newValue) {
      commit("setColorCode", newValue);
    },
  },
  modules: {},
});
