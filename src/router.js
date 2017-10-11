import Router from 'vue-router'
import Vue from 'vue'

/* eslint-disable no-new */
Vue.use(Router)

const routes = [
	{ path: '/', component: require('./views/home') }
]

export default new Router({
	routes,
	mode: 'history',
	linkActiveClass: 'active'
})