<template>
	<i :class="classes" @click="handleClick"></i>
</template>
<script>
	import '@/assets/style/icon.css'
	const prefixCls = 'ivm-icon';

	export default {
		name: 'Icon',
		props: {
			type: String,
			size: [Number, String],
			styles: {
				type: String
			}
		},
		methods: {
			handleClick (event) {
				this.$emit('click', event);
			},
		},
		computed: {
			classes () {
				return [
					`${prefixCls} ${prefixCls}-${this.type}`,
					this.styles
				]
			}
		}
	};
</script>
