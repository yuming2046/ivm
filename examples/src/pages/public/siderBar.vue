<template>
	<div class="siderBar">
		<div class="user">
			<div class="userAvator">
				<img src="../../assets/images/1.jpg" alt="">
			</div>
			<div class="userName">
				<p class="userNameTop">欢迎你！俞明</p>
				<p class="userStatus">在线</p>
			</div>
		</div>
		<div class="menu">
			<Menu mode="vertical" theme="dark" active-index="1" accordion>
				<MenuItem index="1">
					<Icon type="stats-bars"></Icon>
					统计分析
				</MenuItem>
				<MenuItem index="2">
					<Icon type="ios-people"></Icon>
					会员管理
				</MenuItem>
				<MenuSub index="3">
					<template slot="title">
						日志管理
					</template>
					<MenuItem styles="menuitem" index="3-1">操作日志</MenuItem>
					<MenuItem styles="menuitem" index="3-2">登陆日志</MenuItem>
				</MenuSub>
				<MenuSub index="4">
					<template slot="title">
						权限管理
					</template>
					<MenuItem styles="menuitem" index="4-1">用户管理</MenuItem>
					<MenuItem styles="menuitem" index="4-2">角色管理</MenuItem>
					<MenuItem styles="menuitem" index="4-3">权限管理</MenuItem>
				</MenuSub>
			</Menu>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'SiderBar'
	}
</script>

<style>
	.siderBar{flex:240px 0 0;border-right: 1px solid #d2d6de;background-color: #f9fafc}
	.menuitem{font-size: 14px;padding-left:34px;}
	.siderBar .user{padding:16px;display: flex;flex-direction: row;/*border-bottom: 1px solid #d2d6de;*/}
	.siderBar .user .userAvator{padding-right: 10px}
	.siderBar .user .userAvator img{width:46px;height:46px;border-radius:50%;}
	.siderBar .user .userName{margin-top:4px;}
	.siderBar .user .userName p{font-size: 14px}
	.siderBar .user .userName p.userStatus{font-size: 12px;margin-top:6px;}

</style>