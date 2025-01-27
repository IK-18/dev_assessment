import React from "react";

const Check = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={props.className}
			width='12'
			height='12'
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M10 3L4.5 8.5L2 6'
				stroke='#1C1D22'
				stroke-width='2'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

export default Check;
