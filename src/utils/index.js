const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

class Utils {
	constructor(){

	}

	oneOf(value, validList){
		for (let i = 0; i < validList.length; i++) {
			if (value === validList[i]) {
				return true;
			}
		}
		return false;
	}



	camelCase(name) {
		return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
			return offset ? letter.toUpperCase() : letter;
		}).replace(MOZ_HACK_REGEXP, 'Moz$1');
	}

	getStyle (element, styleName) {
		if (!element || !styleName) return null;
		styleName = camelCase(styleName);
		if (styleName === 'float') {
			styleName = 'cssFloat';
		}
		try {
			const computed = document.defaultView.getComputedStyle(element, '');
			return element.style[styleName] || computed ? computed[styleName] : null;
		} catch(e) {
			return element.style[styleName];
		}
	}

	findComponentDownward (context, componentName) {
		const childrens = context.$children;
		let children = null;

		if (childrens.length) {
			childrens.forEach(child => {
				const name = child.$options.name;
				if (name === componentName) {
					children = child;
				}
			});

			for (let i = 0; i < childrens.length; i++) {
				const child = childrens[i];
				const name = child.$options.name;
				if (name === componentName) {
					children = child;
					break;
				} else {
					children = findComponentDownward(child, componentName);
					if (children) break;
				}
			}
		}
		return children;
	}

	findComponentsDownward (context, componentName, components = []) {
		const childrens = context.$children;

		if (childrens.length) {
			childrens.forEach(child => {
				const name = child.$options.name;
				const childs = child.$children;
				if (name === componentName) components.push(child);
					if (childs.length) {
						const findChilds = this.findComponentsDownward(child, componentName, components);
						if (findChilds) components.concat(findChilds);
					}
			});
		}
		return components;
	}

	findComponentUpward (context, componentName, componentNames) {
		if (typeof componentName === 'string') {
			componentNames = [componentName];
		} else {
			componentNames = componentName;
		}

		let parent = context.$parent;
		let name = parent.$options.name;
		while (parent && (!name || componentNames.indexOf(name) < 0)) {
			parent = parent.$parent;
			if (parent) name = parent.$options.name;
		}
		return parent;
	}

	hasClass(el, cls) {
		if (!el || !cls) return false;
		if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
		if (el.classList) {
			return el.classList.contains(cls);
		} else {
			return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
		}
	}

	addClass(el, cls) {
		if (!el) return;
		let curClass = el.className;
		const classes = (cls || '').split(' ');

		for (let i = 0, j = classes.length; i < j; i++) {
			const clsName = classes[i];
			if (!clsName) continue;
			if (el.classList) {
				el.classList.add(clsName);
			} else {
				if (!hasClass(el, clsName)) {
					curClass += ' ' + clsName;
				}
			}
		}
		if (!el.classList) {
			el.className = curClass;
		}
	}

	removeClass(el, cls) {
		if (!el || !cls) return;
		const classes = cls.split(' ');
		let curClass = ' ' + el.className + ' ';

		for (let i = 0, j = classes.length; i < j; i++) {
			const clsName = classes[i];
			if (!clsName) continue;

			if (el.classList) {
				el.classList.remove(clsName);
			} else {
				if (hasClass(el, clsName)) {
					curClass = curClass.replace(' ' + clsName + ' ', ' ');
				}
			}
		}
		if (!el.classList) {
			el.className = trim(curClass);
		}
	}
}

export default new Utils()