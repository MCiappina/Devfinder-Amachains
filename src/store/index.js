import Vuex from "vuex";
import Vue from "vue";

import cards from "./modules/cards";

// Load Vuex

Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    cards,
  },
});
