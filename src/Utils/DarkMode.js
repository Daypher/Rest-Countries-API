export function getTheme() {
	return localStorage.getItem("theme") === "Dark";
}
export function setTheme(value) {
	localStorage.setItem("theme", value ? "Dark" : "Ligt");
}
