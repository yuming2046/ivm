<template>
	<div class="main">
		<iHeader/>
		<section class="section">
			<SiderBar/>
		</section>
	</div>
</template>

<script>
	import {iHeader, SiderBar} from './public'

	export default {
		name: 'Index',
		components: {iHeader, SiderBar}
	}
</script>

<style>
	.main{width:100%;height:100%;display:flex;flex-direction: column;}
	.section{position:absolute;top: 56px;bottom:0;left:0;right: 0;display: flex}
</style>