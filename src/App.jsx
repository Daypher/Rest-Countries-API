import { useState } from "react";
import "./App.css";
import { Country } from "./Components/Country";
import { Search } from "./Components/Search";
import { useLoaderData } from "react-router";

function App() {
	const [country, setcountry] = useState(useLoaderData());
	return (
		<div className="country-page">
			<Search
				setCountry={setcountry}
				total={country.length}
			/>
			<div className="country-wrapper">
				{country.map((i) => (
					<Country
						key={i.name}
						data={i}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
