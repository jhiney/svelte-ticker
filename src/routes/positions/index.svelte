<script>
    import { onMount } from "svelte";
    import { apiData, postitionNames } from '../../lib/store.js'
    import { variables } from '../../lib/variables.js';

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
<main>
	<h1>Assets</h1>
	<ul>
	{#each $postitionNames as positionName}
		<li>{positionName}</li>
	{/each}
	</ul>
</main>