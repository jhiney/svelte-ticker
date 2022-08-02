<script>
	import { onMount } from "svelte";
	import { apiData, positions } from "../lib/store.js";
	import { variables } from "../lib/variables.js";
import TestCard from "./testCard.svelte";

	onMount(async () => {
		fetch("https://paper-api.alpaca.markets/v2/positions", {
			method: "GET",
			headers: {
				"APCA-API-KEY-ID": variables.baseKey,
				"APCA-API-SECRET-KEY": variables.secretKey
			}
		})
			.then((response) => response.json())
			.then((data) => {
				apiData.set(data);
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	});
</script>

{#each $positions as positions}
	<TestCard {...positions} />
{/each}
