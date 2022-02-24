import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import SignUp from '@/views/SignUp.vue'
import CreateNotes from '@/views/CreateNotes.vue'
import DisplayNotes from '@/views/DisplayNotes.vue'
import Dashboard from '@/views/Dashboard.vue'
import { clearFields, showMenu } from '@/store/notes'
import { user } from '@/utils/firebase-authentication'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: SignUp,
		meta: {
			requireAuth: false
		},
		// User logged In?
		beforeEnter: (to, from, next) => {
			if (!user.value) next()
			else next('/dashboard')
		}
	},
	{
		path: '/manage/:id?',
		name: 'Notes',
		component: CreateNotes,
		meta: {
			requireAuth: true
		}
	},
	{
		path: '/notes',
		name: 'List',
		component: DisplayNotes,
		meta: {
			requireAuth: true
		}
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: Dashboard,
		meta: {
			requireAuth: true
		}
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

// For each route
router.beforeEach((to, from, next) => {
	document.title = `${process.env.VUE_APP_TITLE} - ${String(to.name)}`

	// Stop showing menu
	showMenu.value = false
	clearFields()

	// Authenticated ? If not goes to main page
	if (to.matched.some((record) => record.meta.requireAuth)) {
		if (user.value) next()
		else next('/')
	} else {
		next()
	}
})

export default router
