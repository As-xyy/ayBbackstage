import Vue from 'vue'
import http from '../../utils/HttpClient'
import router from '../../router/index'

const state = {
  show: false
}

const mutations = {
	login: (data, formData) => {
		state.show = true;
		formData.grant_type = 'password'
		http.post('login/index', null, formData)
		.then(response => {
			state.show = false;
			router.push({name: 'home'})
		}).catch(err => {
			state.show = false;
		})
	}
}

const actions = {
	login: (events, formData) => {
		events.commit('login', formData)
	}
}

export default {
	state,
	mutations,
	actions
}