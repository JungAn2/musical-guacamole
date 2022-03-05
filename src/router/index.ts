import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Index from '../views/Index.vue'
import Register from '../views/Register.vue'
import Test from '../views/test.vue'
import Login from '../views/login.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: Index,
	},
	{
		path: '/register',
		component: Register
	},
	{
		path:'/login',
		component: Login
	},
]

const router = createRouter({
	scrollBehavior(to, from, savedPosition){
		return{top:0}
	},
	history: createWebHistory(),
	routes
})

export default router