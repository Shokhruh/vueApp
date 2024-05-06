import auth from '@/modules/auth'
import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {auth},
})

export default store