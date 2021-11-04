import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import Register from '@/views/Register.vue'
import ProjectDisplay from '@/views/ProjectDisplay.vue'
import Home from '@/views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/project',
        name: 'ProjectDisplay',
        component: ProjectDisplay
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router