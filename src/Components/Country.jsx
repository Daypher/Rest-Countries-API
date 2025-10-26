import { useNavigate } from "react-router";
export const Country = ({ data }) => {
	const nav = useNavigate();

	return (
		<div
			className="country-container"
			onClick={() => nav(`/${data.alpha3Code}`)}
		>
			<div className="countr-img-container">
				<img
					src={data.flag}
					className="country-img"
				/>
			</div>
			<div className="country-data">
				<h2 className="fw-l">{data.name}</h2>
				<p className="fw-s">
					<span className="fw-l">Population:</span>{" "}
					{data.population.toLocaleString()}
				</p>
				<p className="fw-s">
					<span className="fw-l">Region:</span> {data.region}
				</p>
				<p className="fw-s">
					<span className="fw-l"> Capital:</span> {data.capital}
				</p>
			</div>
		</div>
	);
};
