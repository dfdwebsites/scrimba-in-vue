import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CssScreen from '../views/CssScreen.vue'
import JsScreen from '../views/JsScreen.vue'
import GamesScreen from '../views/GamesScreen.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/css',
    name: 'css',
    component: CssScreen
  },
  {
    path: '/js',
    name: 'js',
    component: JsScreen
  },
  {
    path: '/games',
    name: 'games',
    component: GamesScreen
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
