import { createBrowserRouter, createHashRouter, Link } from "react-router";
import { MainLayout } from "./MainLayout";
import { CountryDetails } from "./CountryDetails";
import { getCountries, getCountry } from "../Utils/GetCountries";
import { FaArrowLeftLong } from "react-icons/fa6";
import App from "../App";

const routes = [
	{
		path: "/",
		Component: MainLayout,
		children: [
			{
				index: true,
				Component: App,
				loader: () => {
					return getCountries();
				},
			},
			{
				path: "/:id",
				Component: CountryDetails,
				loader: ({ params }) => getCountry(params.id),
				errorElement: (
					<>
						<h1>THIS ITEM IS NOT AVAILABLE</h1>
						<Link
							to="/"
							className="return-btn"
						>
							<FaArrowLeftLong /> Back
						</Link>
					</>
				),
			},
		],
	},
];
export const router =
	import.meta.env.VITE_IS_GH !== "true"
		? createBrowserRouter(routes)
		: createHashRouter(routes);
