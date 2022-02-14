import { user } from '@/store/auth'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
import Dashboard from '../views/Dashboard.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/notes',
		name: 'Notes',
		component: Notes
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

// For each route
router.beforeEach((to, from, next) => {
	// Authenticated ? If not goes to main page
	if (to.name === 'Notes' || to.name === 'Dashboard') {
		if (user.value) next()
		else next('/')
	} else {
		next()
	}
})
export default router
