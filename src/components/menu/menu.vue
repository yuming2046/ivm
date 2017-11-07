<template>
	<ul :class="classes"><slot></slot></ul>
</template>

<script>
	import Utils from '@/utils'
	import '@/assets/style/menu.css'

	const prefixCls = 'ivm-menu';

	export default {
		name: 'Menu',
		data () {
			return {
				currentActiveIndex: this.activeIndex
			};
		},
		props: {
			mode: {
				validator (value) {
					return Utils.oneOf(value, ['horizontal', 'vertical']);
				},
				default: 'vertical'
			},
			theme: {
				type: String,
				default: 'light'
			},
			styles: {
				type: String
			},
			accordion: {
				type: Boolean,
				default: false
			},
			activeIndex: {
				type: [String, Number]
			},
			openIndex: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		computed: {
			classes () {
				let theme = this.theme;
				// if (this.mode === 'vertical' && this.theme === 'primary') theme = 'light';
				return [
					`${prefixCls}`,
					`${prefixCls}-${theme}`,
					{
						[`${prefixCls}-${this.mode}`]: this.mode
					},
					this.styles
				];
			}
		},
		methods: {
			updateActiveIndex () {
				if (this.currentActiveIndex === undefined) {
					this.currentActiveIndex = -1;
				}
				this.broadcast('MenuSub', 'on-update-active-index', false);
				this.broadcast('MenuItem', 'on-update-active-index', this.currentActiveIndex);
			},
			updateOpenKeys (index) {
				const idx = this.openIndex.indexOf(index);
				if (idx > -1) {
					this.openIndex.splice(idx, 1);
				} else {
					this.openIndex.push(idx);
					if (this.accordion) {
						this.openIndex.splice(0, this.openIndex.length);
						this.openIndex.push(idx);
					}
				}
			},
			updateOpened () {
				const items = Utils.findComponentsDownward(this, 'MenuSub');
				if (items.length) {
					items.forEach(item => {
						if (this.openIndex.indexOf(item.index) > -1) item.opened = true;
					});
				}
			}
		},
		mounted () {
			this.updateActiveIndex();
			this.updateOpened();
			this.$on('on-menu-item-select', (index) => {
				this.currentActiveIndex = index;
				this.$emit('on-select', index);
			});
		},
		watch: {
			openIndex () {
				this.$emit('on-open-change', this.openIndex);
			},
			activeIndex (val) {
				this.currentActiveIndex = val;
			},
			currentActiveIndex () {
				this.updateActiveIndex();
			}
		}
	}
</script>