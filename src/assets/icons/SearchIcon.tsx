import React from "react";

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={props.className}
			width='20'
			height='21'
			viewBox='0 0 20 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle
				cx='9.80547'
				cy='10.3055'
				r='7.49047'
				stroke='#130F26'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M15.0153 15.9043L17.9519 18.8333'
				stroke='#130F26'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

export default SearchIcon;
