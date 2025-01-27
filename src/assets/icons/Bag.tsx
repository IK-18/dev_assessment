import React from "react";

const Bag = (
	props: React.SVGProps<SVGSVGElement> & {fill: string; stroke: string},
) => {
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
				d='M16.5137 21.5H8.16592C5.09955 21.5 2.74715 20.3925 3.41534 15.9348L4.19338 9.8936C4.60528 7.66934 6.02404 6.81808 7.26889 6.81808H17.4474C18.7105 6.81808 20.0469 7.73342 20.5229 9.8936L21.3009 15.9348C21.8684 19.889 19.5801 21.5 16.5137 21.5Z'
				fill={props.fill}
				stroke={props.stroke}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M16.651 6.5984C16.651 4.21233 14.7167 2.27804 12.3307 2.27804V2.27804C11.1817 2.27317 10.0781 2.7262 9.26388 3.53695C8.44969 4.34771 7.99199 5.44939 7.992 6.5984H7.992'
				fill={props.fill}
			/>
			<path
				d='M16.651 6.5984C16.651 4.21233 14.7167 2.27804 12.3307 2.27804V2.27804C11.1817 2.27317 10.0781 2.7262 9.26388 3.53695C8.44969 4.34771 7.99199 5.44939 7.992 6.5984H7.992'
				stroke={props.stroke}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M15.2963 11.1018H15.2506Z'
				fill={props.fill}
			/>
			<path
				d='M15.2963 11.1018H15.2506'
				stroke={props.stroke}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M9.46572 11.1018H9.41995Z'
				fill={props.fill}
			/>
			<path
				d='M9.46572 11.1018H9.41995'
				stroke={props.stroke}
				stroke-width='1.5'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	);
};

export default Bag;
