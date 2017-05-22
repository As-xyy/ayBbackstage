<template>
	<div id="index" class="index_header">
		<div class="index clear">
			<div id="" class="nav_logo"><img src="../../assets/imgs/logo.png" alt="" /></div>
			<div id="" class="nav_menu">
				<ul class="">
					<li id="" @click="set_system">
						<a href="#">系统管理</a>
					</li>
					<li id="" @click="organization ">
						<a href="#">机构管理</a>
					</li>
					<!--<li id="">
						<a href="#">渠道管理</a>
					</li>-->
					 <li id="index_business"><a href="#" @click="index_business">代理业务</a></li> 
				</ul>
			</div>
			<div class="nav_logout">
				<span id=""><i class=" "></i><a href="">&nbsp;主页</a></span>
				<span id=""><i class=" "></i><a href="">&nbsp;修改密码</a></span>
				<span id=""><i class=" "></i><a href="">&nbsp;退出系统</a></span>
			</div>
		</div>
		<div class="index_menu">
			<ul>
				<li v-for="(item,index) in menus" key='inedx' @click="childCheck(index )">
					<a href="javascript:;">{{item.name}}</a>
					<ul v-show="index == i ">
						<li v-for="childItem in item.child">
							<router-link :to=childItem.link>{{childItem.child_name}}</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="main">
			<router-view></router-view>
		</div>
	</div>
</template>

<script type="text/javascript">
	import './HomeComponent.scss';
	import './HomeComponent.js'
	import api from '../../utils/api.js'
	export default {
		name: 'home',
		data: function() {
			return {
				ishow: false,
				i: -1,
				isOpen: false,
				menus: this.menus = [
					{ name: '系统管理', child: [{ child_name: '用户管理', link: 'private' }, { child_name: '角色管理', link: 'public' }]}
				]
			}
		},
		methods: {
			//菜单显示和隐藏
			childCheck: function childCheck(index) {
				//          if(this.i == -1){
				this.i = index;
				//          }else{this.i = -1}
			},
			index_business: function() {
				this.menus = [
					{ name: '协议管理', child: [{ child_name: '协议定义（私有）', link: 'private' }, { child_name: '协议定义（平台）', link: 'public' }, { child_name: '费率设置', link: "rateSet" }, { child_name: '费率审核', link: 'rateAudit' }] },
					{ name: '投保管理', child: [{ child_name: '车车险保单管理', link: 'carsure' },{ child_name: '保单审核', link: 'carsurecheck' }] }
				]
			},
			set_system:function(){
				this.menus = [
					{ name: '系统管理', child: [{ child_name: '用户管理', link: 'private' }, { child_name: '角色管理', link: 'public' }] }
				]
			},
			organization:function(){
				this.menus = [
					{ name: '组织/人员', child: [{ child_name: '团队定义', link: 'private' }, { child_name: '业务员级别定义', link: 'public' }, { child_name: '业务员管理', link: 'public' }] }
				]
			}
		},
		created:function(){
			//测试接口
			api.findRate().then(res => {
            console.log(res)

        }).catch(err => {

            console.log(err)
        })
		}
	}
</script>
