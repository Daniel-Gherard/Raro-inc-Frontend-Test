import {
  newsActions
} from './actions'

import {
  newsGetters
} from './getters'

import {
  newsMutations
} from './mutations'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const newsModule = {
  state: {
    news: []
  },
  actions: newsActions,
  mutations: newsMutations,
  getters: newsGetters,
  namespaced: true
}

export default new Vuex.Store({
  modules: {
    news: newsModule
  }
})