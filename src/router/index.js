import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from '../components/signup.vue'
import Navbar from '../components/navbar.vue'
import CreateTask from '../components/createTask.vue'
import DeleteTask from '../components/deleteTask.vue'
import ListTask from '../components/listTask.vue'
import Tasks from '../components/tasks.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/navbar',
    name: 'navbar',
    component: Navbar
  },
  {
    path: '/createTask',
    name: 'createTask',
    component: CreateTask
  },
  {
    path: '/deleteTask',
    name: 'deleteTask',
    component: DeleteTask
  },
  {
    path: '/listTask',
    name: 'listTask',
    component: ListTask
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
