import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import SobreMim from './views/AboutMe.vue'
import Repositorios from './views/MyProjects.vue'
import Contato from './views/ContatoPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/sobre', component: SobreMim },
    { path: '/repos', component: Repositorios },
    { path: '/contato', component: Contato }
  ]
})

export default router
