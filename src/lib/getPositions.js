import { variables } from "./variables.js";
import { apiData } from "./store";

export default function getPositions() {
	fetch(variables.ALPACA_BASE_URL + "v2/positions", {
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
}
