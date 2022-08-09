import { variables } from "./variables.js";

export default function getName(symbol) {
	return fetch(variables.ALPACA_MARKETS_BASE_URL + "v2/assets/" + symbol, {
		method: "GET",
		headers: {
			"APCA-API-KEY-ID": variables.baseKey,
			"APCA-API-SECRET-KEY": variables.secretKey
		}
	})
		.then((response) => response.json())
		.then((data) => {
			return data.name;
		})
		.catch((error) => {
			console.log(error);
			return [];
		});
}
