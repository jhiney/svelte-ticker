import { writable, derived } from "svelte/store";
export const apiData = writable([]);
export const positions = derived(apiData, ($apiData) => {
	if ($apiData) {
		return $apiData.map((positions) => positions);
	}
	return [];
});
