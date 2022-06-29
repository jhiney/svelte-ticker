<script>
	import { onMount } from "svelte";
	import { apiData, positions } from "../lib/store.js";
	import { variables } from "../lib/variables.js";

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
	console.log($positions);
</script>

<div class="overflow-x-auto">
	<table data-theme="corporate" class="table rounded-full">
		<thead>
			<tr>
				<th>Ticker</th>
				<th>Current Price</th>
				<th>Previous Closing</th>
			</tr>
		</thead>
		<tbody>
			{#each $positions as positions}
				<tr>
					<td>{positions.symbol}</td>
					<td>{positions.current_price}</td>
					<td>{positions.lastday_price}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
