<script context="module">
	import { store } from "$stores/store";

	export function load() {
		store.set({ override: true });

		return {
			stuff: {
				test: "Hello, World",
			},
			status: 400,
			error: "Error",
		};
	}
</script>
