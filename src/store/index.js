import DataService from '@/services/DataService'
import { createStore } from 'vuex'

export default createStore({
  state: {
    dataService: new DataService(),
    utilisateur: {},
    medecin:{},
    rapport:{}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
