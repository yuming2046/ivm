<template>
	<div class="main" :class="isToggle ? 'sidebar-collapse' : ''">
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
		data: () => ({
			isToggle: false
		}),
		watch: {
			isToggle: {
				deep: true,
				handler(v){
					console.log(v)
				}
			}
		},
		components: {iHeader, SiderBar},
		mounted(){
			console.log("###")
			this.$on('sidebar-toggle', (status) => {
				console.log("@@@")
				console.log(status)
				this.isToggle = status;
			});
		}
	}
</script>

<style>
	.main{width:100%;height:100%;display:flex;flex-direction: column;}
	.section{position:absolute;top: 57px;bottom:0;left:0;right: 0;display: flex}
</style>