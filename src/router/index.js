import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Signup from '../components/signup.vue'
import MainNavbar from '../components/mainNavbar.vue'
import HeroComponent from '../components/heroComponent.vue'
import CreateTask from '../components/createTask.vue'
import DisplayTasks from '../components/displayTasks.vue'
import UpdateTask from '../components/updateTask.vue'

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
    path: '/mainNavbar',
    name: 'mainNavbar',
    component: MainNavbar
  },
  {
    path: '/heroComponent',
    name: 'heroComponent',
    component: HeroComponent
  },
  {
    path: '/createTask',
    name: 'createTask',
    component: CreateTask
  },
  {
    path: '/displayTasks',
    name: 'displayTasks',
    component: DisplayTasks
  },
  {
    path: '/updateTask',
    name: 'updateTask',
    component: UpdateTask
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
