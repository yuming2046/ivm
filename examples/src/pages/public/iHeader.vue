<template>
	<div class="i-header">
		<div class="logo"><h1>IVM</h1></div>
		<div class="iheader-nav"></div>
	</div>
</template>

<script>
	export default {
		name: 'iHeader'
	}
</script>
<style>
	.i-header{height:56px;border-bottom: 1px solid #e6e6e6;display: flex;flex-direction: row;}
	.i-header .logo{flex: 0 0 240px;display: flex; align-items: center;justify-content: center;border-right: 1px solid #e6e6e6;background-color: #333}
	.i-header .logo h1{color:#fff;font-size:32px;}
	.i-header .iheader-nav{flex:1;}
</style>