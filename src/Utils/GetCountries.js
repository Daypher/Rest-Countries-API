import data from "../assets/data.json";

export function getCountries({ region, nombre } = {}) {
	let result = data;
	if (region) {
		result = result.filter((i) => i.region === region);
	}

	if (nombre !== "") {
		//result = result.filter((n) => n.name.toLowerCase().includes(nombre));
		result = result.filter((f) => {
			return (
				Object.values(f.translations).some((e) =>
					e.toLowerCase().includes(nombre)
				) || f.name.toLowerCase().includes(nombre)
			);
		});
	}

	// const test = data.filter((i) => {
	// 	let d = Object.values(i.translations).some((e) =>
	// 		e.toLowerCase().includes(nombre)
	// 	);
	// 	return d;
	// });
	result = result.map(
		({ name, flag, population, region, capital, alpha3Code }) => {
			return {
				name,
				flag,
				population,
				region,
				capital,
				alpha3Code,
			};
		}
	);
	return result;
}
export function getRegions() {
	const result = new Set(data.map(({ region }) => region));
	return Array.from(result);
}
export function getCountry(id) {
	const country = data.find(
		(c) => c.alpha3Code.toLowerCase() === id.toLowerCase()
	);
	return country;
}
export function findBorders([...boders]) {
	const result = boders.map((i) => {
		const x = data.find((m) => m.alpha3Code === i);
		return { name: x.name, alpha3Code: i };
	});
	return result;
}
