import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import Projects from '../views/Projects.vue';

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
