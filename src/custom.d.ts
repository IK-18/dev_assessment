declare module "*.svg" {
	import React from "react";
	export const ReactComponent: React.FC<React.SVGAttributes<SVGElement>> &
		extraProps;
}

declare module "*.jpg";
declare module "*.png";
