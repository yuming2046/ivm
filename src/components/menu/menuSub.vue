<template>
	<li :class="classes" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave">
		<div :class="[prefixCls + '-submenu-title']" ref="reference" @click="handleClick">
			<slot name="title"></slot>
			<Icon type="ios-arrow-down" :class="[prefixCls + '-submenu-title-icon']"></Icon>
		</div>
		<collapse-transition v-if="mode === 'vertical'">
			<ul :class="[prefixCls]" v-show="opened"><slot></slot></ul>
		</collapse-transition>
		<transition name="slide-up" v-else>
			<Drop
				v-show="opened"
				placement="bottom"
				ref="drop"
				:class="[prefixCls + '-drop']"><ul :class="[prefixCls + '-drop-list']"><slot></slot></ul>
			</Drop>
		</transition>
	</li>
</template>
<script>
	import Utils from '@/utils'
	import {Drop} from '../select'
	import Icon from '../icon'
	import CollapseTransition from '../base/collapse-transition'

	const prefixCls = 'ivm-menu';

	export default {
		name: 'MenuSub',
		components: { Icon, Drop, CollapseTransition },
		props: {
			index: {
				type: [String, Number],
				required: true
			},
			styles: {
				type: String
			},
			disabled: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				prefixCls: prefixCls,
				active: false,
				opened: false,
				dropWidth: parseFloat(Utils.getStyle(this.$el, 'width')),
				parent: Utils.findComponentUpward(this, 'Menu')
			};
		},
		computed: {
			classes () {
				return [
					`${prefixCls}-submenu`,
					{
						[`${prefixCls}-item-active`]: this.active,
						[`${prefixCls}-opened`]: this.opened,
						[`${prefixCls}-submenu-disabled`]: this.disabled
					},
					this.styles
				];
			},
			mode () {
				return this.parent.mode;
			},
			accordion () {
				return this.parent.accordion;
			}
		},
		methods: {
			handleMouseenter () {
				if (this.disabled) return;
				if (this.mode === 'vertical') return;
				clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					this.parent.updateOpenKeys(this.name);
					this.opened = true;
				}, 250);
			},
			handleMouseleave () {
				if (this.disabled) return;
				if (this.mode === 'vertical') return;
				clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					this.parent.updateOpenKeys(this.name);
					this.opened = false;
				}, 150);
			},
			handleClick () {
				if (this.disabled) return;
				if (this.mode === 'horizontal') return;
				const opened = this.opened;
				if (this.accordion) {
					this.parent.$children.forEach(item => {
						if (item.$options.name === 'MenuSub') item.opened = false;
					});
				}
				this.opened = !opened;
				this.parent.updateOpenKeys(this.name);
			}
		},
		watch: {
			mode (val) {
				if (val === 'horizontal') {
					this.$refs.drop.update();
				}
			},
			opened (val) {
				if (this.mode === 'vertical') return;
				if (val) {
					// set drop a width to fixed when menu has fixed position
					this.dropWidth = parseFloat(Utils.getStyle(this.$el, 'width'));
					this.$refs.drop.update();
				} else {
					this.$refs.drop.destroy();
				}
			}
		},
		mounted () {
			this.$on('on-menu-item-select', (index) => {
				if (this.mode === 'horizontal') this.opened = false;
				this.dispatch('Menu', 'on-menu-item-select', index);
				return true;
			});
			this.$on('on-update-active-index', (status) => {
				this.active = status;
			});
		}
	}
</script>