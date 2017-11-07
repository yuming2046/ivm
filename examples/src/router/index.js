import Vue from 'vue'
import Router from 'vue-router'

import {NotFound, Index} from '../pages'

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: '首页',
			component: Index
		},
		{
			path: '*',
			name: '404',
			component: NotFound
		}
	]
})
