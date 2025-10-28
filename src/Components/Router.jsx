import {
	createBrowserRouter,
	createHashRouter,
	Link,
	useLoaderData,
	useParams,
} from "react-router";
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
	{
		path: "/test",
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
				path: "/test/:id",
				Component: Prueba,
			},
		],
	},
];
export const router =
	import.meta.env.VITE_IS_GH !== "true"
		? createBrowserRouter(routes)
		: createHashRouter(routes);

function Prueba() {
	const dae = useParams();
	return (
		<>
			<h1>HOLA {dae.id}</h1>
		</>
	);
}
