<template>
	<div class="login-box">
		<div class="col-sm-12 b-r">
			<h3 class="m-t-none m-b">登录</h3>
			<form role="form">
			    <div class="form-group text-left">
			        <label>用户名：</label>
			        <input type="text" v-model="username" name="username" placeholder="请输入用户名" class="form-control">
			    </div>
			    <div class="form-group  text-left">
			        <label>密码：</label>
			        <input type="password" v-model="pwd" name="password" placeholder="请输入密码" class="form-control">
			    </div>
			    <div>
			    	<input type="button" class="btn btn-primary pull-right m-t-n-xs" value="登录" >
			    </div>
			</form>
		</div>
		<div class="copyright">AOYUNBAO</div>
		<!-- <pulse-loader v-if="$store.state.login.show"></pulse-loader> -->
	</div>
</template>

<script type="text/javascript">
	import './Login.scss'
	import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'

	export default {
		data: function(){
			return {
				username: '',
				pwd: ''
			}
		},
		methods: {
			// login: function(event){
			// 	if($('form').valid()){
			// 		this.$store.dispatch('login', {username: this.username, password: this.pwd})
			// 	}
			// }
			// ...mapActions(['login'])
		},
		components:{
			// PulseLoader
		}
	}
</script>
