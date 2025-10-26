import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");
	const router = env.VITE_IS_GH !== "true";
	const base_path = router ? "/" : "/Rest-Countries-API/";
	return {
		plugins: [react()],
		base: base_path,
	};
});
