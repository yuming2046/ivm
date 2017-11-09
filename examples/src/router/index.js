import Vue from 'vue'
import Router from 'vue-router'

import {NotFound, Index} from '../pages'

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Index',
			meta:{
				auth:false
			},
			component: Index
		},
		{
			path: 'login',
			name: 'Login',
			component: Index
		},
		{
			path: '*',
			name: '404',
			component: NotFound
		}
	]
})
