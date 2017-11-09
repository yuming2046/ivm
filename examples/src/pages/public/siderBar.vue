<template>
	<div class="siderbar">
		<div class="user">
			<div class="useravator">
				<img src="../../assets/images/1.jpg" alt="">
			</div>
			<div class="username">
				<p class="usernameTop">欢迎你！俞明</p>
				<p class="userstatus">在线</p>
			</div>
		</div>
		<div class="menu">
			<Menu mode="vertical" theme="dark" active-index="1" accordion>
				<MenuItem index="1">
					<Icon type="stats-bars"></Icon>
					<span class="layout-text">统计分析</span>
				</MenuItem>
				<MenuItem index="2">
					<Icon type="ios-people"></Icon>
					<span class="layout-text">会员管理</span>
				</MenuItem>
				<MenuSub index="3">
					<template slot="title">
						<span class="layout-text">日志管理</span>
					</template>
					<MenuItem styles="menuitem" index="3-1">操作日志</MenuItem>
					<MenuItem styles="menuitem" index="3-2">登陆日志</MenuItem>
				</MenuSub>
				<MenuSub index="4">
					<template slot="title">
						<span class="layout-text">权限管理</span>
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


</style>