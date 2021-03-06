/* generated by Svelte vX.Y.Z */
import { SvelteComponent as SvelteComponent_1, init, noop, safe_not_equal } from "svelte/internal";

function create_fragment(ctx) {
	return {
		c: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};
}

let a = 1;

let b = 2;

function instance($$self, $$props, $$invalidate) {
	

	let max;

	$$self.$$.update = ($$dirty = { Math: 1, a: 1, b: 1 }) => {
		if ($$dirty.a || $$dirty.b) {
			max = Math.max(a, b); $$invalidate('max', max);
		}
	};

	return {};
}

class SvelteComponent extends SvelteComponent_1 {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal);
	}
}

export default SvelteComponent;