import { writable, derived } from "svelte/store";
export const apiData = writable([]);
export const postitionNames = derived(apiData, ($apiData) => {
	if ($apiData) {
		return $apiData.map((positions) => positions.symbol);
	}
	return [];
});
