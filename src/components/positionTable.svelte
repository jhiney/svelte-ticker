<script>
	import { onMount } from "svelte";
	import { positions } from "../lib/store.js";
	import getPositions from "../lib/getPositions.js"
	import TestCard from "./testCard.svelte";

	onMount(async () => {
		getPositions();	
	});
</script>

{#each $positions as positions}
	<TestCard {...positions} />
{/each}
