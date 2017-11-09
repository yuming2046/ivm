<template>
	<div class="i-header">
		<div class="logo"><h1>IVM</h1></div>
		<div class="iheader-nav" @click="collapseSideBar">
			<div class="sidebar-collapseBtn">
				<Icon type="navicon-round" styles="collapseBtn"></Icon>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'iHeader',
		data: () => {
			return {
				collapse: false
			}
		},
		methods: {
			collapseSideBar(){
				this.collapse = !this.collapse
				this.$emit('sidebar-collapse', this.collapse)
			}
		}
	}
</script>
<style>
	.i-header{height:56px;display: flex;flex-direction: row;border-bottom: 1px solid #d2d6de;}
	.i-header .logo{flex: 0 0 240px;display: flex; align-items: center;justify-content: center;border-right: 1px solid #d2d6de;transition:all .2s ease-in-out;/*background-color: #333*/}
	.i-header .logo h1{color:#2d8cf0;font-size:38px;}
	.i-header .iheader-nav{flex:56px 0 0;display: flex;flex-direction: column;border-right: 1px solid #d2d6de;}
	.i-header .iheader-nav .sidebar-collapseBtn{display: flex;align-items: center;justify-content: center;}
	.i-header .iheader-nav .sidebar-collapseBtn .collapseBtn{font-size:20px;display: block;position: absolute;top:14px;}
</style>