<script>
	export let symbol;
	export let current_price;
	export let lastday_price;

	let symbol_name;

	import getName from "../lib/getName.js";
	import { onMount } from "svelte";
	import CompanyLogo from "./CompanyLogo.svelte";

	onMount(async () => {
		symbol_name = await getName(symbol);

		if (symbol_name.includes(".")) {
			symbol_name = symbol_name.substring(0, symbol_name.indexOf("."));
		}
	});
</script>

<div
	class="shadow-lg max-w-sm rounded overflow-hidden border-2 border-black dark:border-surface-400"
>
	<div class="px-6 py-4">
		<p class="text-center font-bold text-warning-400">{symbol_name}</p>

		<p class="text-zinc-400 text-center text-base dark:text-accent-300 text-left">
			The current price is <a class="text-primary-400">${current_price}</a> and closed yesterday at
			<a class="text-primary-400">${lastday_price}</a>
		</p>
		<div class="mb-2 py-4 flex justify-center">
			<CompanyLogo {symbol} />
		</div>
	</div>
</div>
