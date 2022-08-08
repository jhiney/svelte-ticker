<script>
	export let symbol;
	export let current_price;
	export let lastday_price;
</script>

<div
	class="shadow-lg max-w-sm rounded overflow-hidden border-2 border-black dark:border-zinc-400"
>
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2 text-cyan-400 text-left">
			{symbol}
		</div>

		<p class="text-zinc-400 text-base dark:text-zinc-400 text-left">
			The current price is <a class="text-cyan-400">${current_price}</a> and closed yesterday at <a class="text-cyan-400">${lastday_price}</a>
		</p>
	</div>
</div>
