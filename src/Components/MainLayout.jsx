import { FaMoon, FaSun } from "react-icons/fa";
import { Outlet } from "react-router";
import { getTheme, setTheme } from "../Utils/DarkMode";
import { useEffect, useState } from "react";

export const MainLayout = () => {
	const [mode, setmode] = useState(getTheme());
	useEffect(() => {
		setTheme(mode);
	}, [mode]);
	const result = (
		<>
			<div className="container-theme">
				<div>
					<FaMoon className={mode ? "active" : "inactive"} />
					<FaSun className={!mode ? "active" : "inactive"} />
				</div>
				<span>Dark Mode</span>
			</div>
		</>
	);
	return (
		<>
			<div
				className="main-container"
				data-theme={mode ? "dark" : "light"}
			>
				<div className="menu">
					<h2>Where in the world?</h2>
					<div onClick={() => setmode(!mode)}>{result}</div>
				</div>
				<Outlet />
			</div>
		</>
	);
};
