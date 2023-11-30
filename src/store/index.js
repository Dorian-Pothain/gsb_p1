import DataService from '@/services/DataService'
import { createStore } from 'vuex'

export default createStore({
  state: {
    dataService: new DataService(),
    utilisateur: {},
    Medecin: {}
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
