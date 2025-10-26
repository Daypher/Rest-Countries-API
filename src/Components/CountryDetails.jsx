import { useLoaderData } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { findBorders } from "../Utils/GetCountries";
import { Link } from "react-router";
export const CountryDetails = () => {
	const data = useLoaderData();
	return (
		<div className="country-details">
			<Link
				to="/"
				className="return-btn"
			>
				<FaArrowLeftLong /> Back
			</Link>
			<div className="country-details-container">
				<div className="country-details-img-container">
					<img
						src={data.flag}
						className="country-details-img"
					></img>
				</div>
				<div className="country-details-wrapper">
					<div className="country-details-items">
						<div>
							<h2 className="fw-l">{data.name}</h2>
							<p className="fw-s">
								<span className="fw-l">Native Name: </span>
								{data.nativeName}
							</p>
							<p className="fw-s">
								<span className="fw-l">Population:</span>
								{data.population.toLocaleString()}
							</p>
							<p className="fw-s">
								<span className="fw-l">Region: </span>
								{data.region}
							</p>
							<p className="fw-s">
								<span className="fw-l">Sub Region: </span>
								{data.subregion}
							</p>
							<p className="fw-s">
								<span className="fw-l">Capital: </span>
								{data.capital}
							</p>
						</div>
						<div>
							<p>
								<span className="fw-l">Top Level Domain: </span>
								{data.topLevelDomain}
							</p>
							<p>
								<span className="fw-l">Currencies: </span>
								{data.currencies.map((c) => c.name).join(", ")}
							</p>
							<p>
								<span className="fw-l">Languages: </span>
								{data.languages.map((l) => l.name).join(", ")}
							</p>
						</div>
					</div>
					{data.borders && (
						<div className="border-countries-wrapper">
							<p>
								<span className="fw-l">Border Countries</span>
							</p>

							<div className="border-countries">
								{findBorders(data.borders).map((i) => (
									<Link
										to={"/" + i.alpha3Code}
										key={i.alpha3Code}
										className="border-country-item"
									>
										{i.name}
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
