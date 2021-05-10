import Vue from 'vue'
import Vuex from 'vuex'
import postModule from "./post"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post: postModule
  },
  state: {
    count: 0
  },
  mutations: {
    increment(state){
      state.count++
    }
  },
  actions: {
  },

})
