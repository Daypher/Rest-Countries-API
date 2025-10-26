import { FaMagnifyingGlass } from "react-icons/fa6";
import { getRegions, getCountries } from "../Utils/GetCountries";
import { useEffect, useMemo, useState } from "react";
export const Search = ({ setCountry, total }) => {
	const region = useMemo((i) => getRegions());
	const [getregion, setregion] = useState(null);
	const [getinput, setinput] = useState("");
	useEffect(() => {
		if (getregion) {
			getregion !== "null"
				? setCountry(getCountries({ region: getregion, nombre: getinput }))
				: setCountry(getCountries({ nombre: getinput.toLowerCase() }));
		}
		if (!getregion) {
			setregion("null");
		}
	}, [getregion, getinput]);

	return (
		<>
			<div className="search-wrapper">
				<div className="input">
					<FaMagnifyingGlass className="search-icon" />
					<input
						placeholder="Search for a country...."
						onChange={(e) => setinput((x) => e.target.value)}
					></input>
				</div>

				<select onChange={(e) => setregion((x) => e.target.value)}>
					<option value="null">Filter by Region</option>
					{region.map((r) => (
						<option
							key={r}
							value={r}
						>
							{r}
						</option>
					))}
				</select>
			</div>
			<h2>Results Found: {total}</h2>
		</>
	);
};
