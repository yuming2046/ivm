// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iVm from '@/index'
import './assets/style/base.css'

Vue.use(iVm)

Vue.config.productionTip = false
// 开启debug模式
Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
