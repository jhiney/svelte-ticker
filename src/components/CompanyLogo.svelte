<script>
	export let symbol;
	import { onMount } from "svelte";
	import { Button } from "@brainandbones/skeleton";

	onMount(async () => {
		//getPositions();
	});
</script>

<div class="font-bold">
	<Button
		size="base"
		background="bg-primary-500"
		color="text-white"
		ring="ring-transparent"
		weight="ring-none"
		rounded="rounded-full"
		width="w-auto"
		disabled={false}
	>
		{symbol}
	</Button>
</div>
