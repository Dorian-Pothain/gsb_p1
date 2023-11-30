import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from '../views/LoginView.vue'
import AccueilView from '../views/AccueilView.vue'
import MedecinView from '../views/MedecinView.vue'
import RapportsView from '../views/RapportsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'login',
    component: loginView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/Accueil',
    name:'Accueil',
    component: AccueilView
  },
  {
    path: '/Medecin',
    name:'Medecin',
    component: MedecinView
  },
  {
    path: '/Rapports',
    name:'Rapports',
    component: RapportsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router