<template>
	<div class="main" :class="collapse ? 'sidebar-collapse' : ''">
		<iHeader v-on:sidebar-collapse="collapseSideBar"></iHeader>
		<section class="section">
			<SiderBar/>
		</section>
	</div>
</template>

<script>
	import {iHeader, SiderBar} from './public'

	export default {
		name: 'Index',
		data: () => ({
			collapse: false
		}),
		components: {iHeader, SiderBar},
		methods: {
			collapseSideBar(status){
				this.collapse = status
			}
		},
		mounted(){}
	}
</script>

<style>
	.main{width:100%;height:100%;display:flex;flex-direction: column;}
	.section{position:absolute;top: 57px;bottom:0;left:0;right: 0;display: flex}
</style>