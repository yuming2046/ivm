<template>
	<li :class="classes" @click.stop="handleClick"><slot></slot></li>
</template>
<script>
	const prefixCls = 'ivm-menu';

	export default {
		name: 'MenuItem',
		data () {
			return {
				active: false
			};
		},
		props: {
			styles: {
				type: String
			},
			index: {
				type: [String, Number],
				required: true
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			handleClick(){
				if (this.disabled) return;
				let parent = this.$parent;
				let index = parent.$options.index;
				while (parent && (!index || index !== 'MenuSub')) {
					parent = parent.$parent;
					if (parent) index = parent.$options.index;
				}
				if (parent) {
					this.dispatch('MenuSub', 'on-menu-item-select', this.index);
				} else {
					this.dispatch('Menu', 'on-menu-item-select', this.index);
				}
			}
		},
		computed: {
			classes () {
				return [
					`${prefixCls}-item`,
					{
						[`${prefixCls}-item-active`]: this.active,
						[`${prefixCls}-item-selected`]: this.active,
						[`${prefixCls}-item-disabled`]: this.disabled
					},
					this.styles
				]
			}
		},
		mounted () {
			this.$on('on-update-active-index', (index) => {
				if (this.index === index) {
					this.active = true;
					this.dispatch('MenuSub', 'on-update-active-index', true);
				} else {
					this.active = false;
				}
			});
		}
	}
</script>