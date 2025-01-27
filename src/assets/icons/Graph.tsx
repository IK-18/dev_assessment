import React from "react";

const Graph = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={props.className}
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M14.3982 11.5743C14.9605 11.5743 15.4324 12.0384 15.3465 12.5936C14.8421 15.8603 12.0456 18.2857 8.67277 18.2857C4.94119 18.2857 1.91663 15.2612 1.91663 11.5305C1.91663 8.45677 4.25171 5.59362 6.88066 4.94625C7.44557 4.80677 8.02452 5.20414 8.02452 5.78572C8.02452 9.72607 8.15698 10.7454 8.90522 11.2998C9.65347 11.8541 10.5333 11.5743 14.3982 11.5743Z'
				stroke='#5570F1'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M18.077 8.293C18.1218 5.76142 15.0121 1.68072 11.2226 1.75089C10.9279 1.75616 10.6919 2.00177 10.6788 2.29563C10.5832 4.37721 10.7121 7.07458 10.784 8.29738C10.806 8.67809 11.1051 8.97721 11.4849 8.99914C12.7419 9.07107 15.5376 9.16931 17.5893 8.85879C17.8683 8.81668 18.0726 8.57458 18.077 8.293Z'
				stroke='#5570F1'
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

export default Graph;
