<template>
	<div class="i-header">
		<div class="logo"><h1>IVM</h1></div>
		<div class="iheader-nav">
			<div class="sidebar-toggle">
				<Icon type="navicon-round" @click="toggleSideBar"></Icon>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'iHeader',
		data: () => ({
			isToggle: false
		}),
		methods: {
			toggleSideBar(){
				this.isToggle = !this.isToggle
				console.log(this.isToggle)
				this.$emit('sidebar-toggle', this.isToggle)
			}
		}
	}
</script>
<style>
	.i-header{height:56px;display: flex;flex-direction: row;border-bottom: 1px solid #d2d6de;}
	.i-header .logo{flex: 0 0 240px;display: flex; align-items: center;justify-content: center;border-right: 1px solid #d2d6de;/*background-color: #333*/}
	.i-header .logo h1{color:#2d8cf0;font-size:38px;}
	.i-header .iheader-nav{flex:56px 0 0;display: flex;flex-direction: column;border-right: 1px solid #d2d6de;}
	.i-header .iheader-nav .sidebar-toggle{display: flex;align-items: center;justify-content: center;}
	.i-header .iheader-nav .sidebar-toggle .ivm-icon-navicon-round{font-size:20px;display: block;position: absolute;top:14px;}
</style>