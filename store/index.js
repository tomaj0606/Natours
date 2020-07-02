import Vuex from 'vuex';
import Vue from 'vue';
import tours from './modules/tours'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      count: 1
    },
    modules: {
      tours
    }
  });

  export default store;