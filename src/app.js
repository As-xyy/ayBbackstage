import './assets/bootstrap/css/bootstrap.min.css'
import './assets/common/common.css'
import './assets/font-awesome/css/font-awesome.min.css'
import './assets/jquery-confirm/jquery-confirm.css'

import './assets/jquery-validation-1.15.0/dist/jquery.validate.js'
import './assets/jquery-validation-1.15.0/dist/localization/messages_zh.js'
import './assets/jquery-confirm/jquery-confirm.js'

import Vue from 'vue';
import router from './router/'
import App from './App.vue'

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
