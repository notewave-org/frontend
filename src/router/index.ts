import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { Pages } from './pages'
import HomeView from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
    {
        name: Pages.Home,
        path: '/',
        component: HomeView
    },
    {
        name: Pages.Note,
        path: '/notes/:noteId',
        component: () => import('../views/Note.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
