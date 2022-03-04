import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Index from '../views/Index.vue'
import Register from '../views/Register.vue'
import Test from '../views/test.vue'

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
		path:'/test',
		component: Test
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