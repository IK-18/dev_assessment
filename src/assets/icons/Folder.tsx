import React from "react";

const Folder = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={props.className}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M21.4189 15.7321C21.4189 19.3101 19.3099 21.4191 15.7319 21.4191H7.94988C4.36288 21.4191 2.24988 19.3101 2.24988 15.7321V7.93211C2.24988 4.35911 3.56388 2.25011 7.14288 2.25011H9.14288C9.86088 2.25111 10.5369 2.58811 10.9669 3.16311L11.8799 4.37711C12.3119 4.95111 12.9879 5.28911 13.7059 5.29011H16.5359C20.1229 5.29011 21.4469 7.11611 21.4469 10.7671L21.4189 15.7321Z'
				fill={props.fill}
				stroke={props.stroke}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M7.48096 14.463H16.216'
				fill={props.fill}
				stroke={props.stroke}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

export default Folder;
