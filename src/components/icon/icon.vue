<template>
	<i :class="classes"></i>
</template>
<script>
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
