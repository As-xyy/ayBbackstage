import Vue from 'vue'
// 引入Vue的路由模块
import VueRouter from 'vue-router'
// 引入对应的组件
Vue.use(VueRouter)

import HomeComponent from '../components/home/HomeComponent.vue'

//引入私有协议组件
import privateAgreement from '../components/privateAgreement/privateAgreement.vue'

//引入协议费率审核
import rateAudit from '../components/ratesAudit/ratesAudit.vue'

//引入车保
import carSure from '../components/carsure/CarsureComponent.vue'


import test from '../components/login/Login.vue'

var router = new VueRouter({
	routes: [{
		path: '/',
		name: 'systemanage',
		component: HomeComponent,
		children: [{
			path: '/private',
			name: 'privateAgreement',
			component: privateAgreement
		}, {
			path: '/rateSet',
			name: 'private',
			component: test
		}, {
			path: '/rateAudit',
			name: 'rateAudit',
			component: rateAudit
		}, {
			path: '/carSure',
			name: 'carSure',
			component: carSure
		}]
	}]
})

module.exports = router