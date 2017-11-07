import Emitter from './mixins/emitter'
import {Icon, Menu} from './components'

import './assets/style/base.css'

const ivm = {
	Icon,
	Menu,
	iMenu: Menu,
	MenuGroup: Menu.Group,
	MenuItem: Menu.Item,
	MenuSub: Menu.Sub
};

const install = function(Vue, opts = {}) {
	// locale.use(opts.locale);
	// locale.i18n(opts.i18n);

	Object.keys(ivm).forEach(key => {
		Vue.component(key, ivm[key]);
	});

	Vue.mixin(Emitter)

	// Vue.prototype.$Loading = LoadingBar;
	// Vue.prototype.$Message = Message;
	// Vue.prototype.$Modal = Modal;
	// Vue.prototype.$Notice = Notice;
	// Vue.prototype.$Spin = Spin;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default Object.assign(ivm, {install}); // eslint-disable-line no-undef