/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

// Matches exact aliases like "@/icon.svg?react" and nested ones like "@/assets/icons/icon.svg?react"
declare module "@/*?react" {
	import React from "react";
	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}

// Fallback mapping for standard relative paths (e.g., "./icon.svg?react")
declare module "*.svg?react" {
	import React from "react";
	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}
