<script>
	import { onMount } from "svelte";
	import { positions } from "../lib/store.js";
	import getPositions from "../lib/getPositions.js"
	import TestCard from "./testCard.svelte";
import Header from "./Header.svelte";

	onMount(async () => {
		getPositions();	
	});
</script>


{#each $positions as positions}
	<TestCard {...positions} />
{/each}
