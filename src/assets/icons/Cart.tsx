import React from "react";

const Cart = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={props.className}
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g clip-path='url(#clip0_202_491)'>
				<path
					d='M16.6667 18.3333C17.1269 18.3333 17.5 17.9602 17.5 17.5C17.5 17.0398 17.1269 16.6667 16.6667 16.6667C16.2065 16.6667 15.8334 17.0398 15.8334 17.5C15.8334 17.9602 16.2065 18.3333 16.6667 18.3333Z'
					stroke='black'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M7.49996 18.3333C7.9602 18.3333 8.33329 17.9602 8.33329 17.5C8.33329 17.0398 7.9602 16.6667 7.49996 16.6667C7.03972 16.6667 6.66663 17.0398 6.66663 17.5C6.66663 17.9602 7.03972 18.3333 7.49996 18.3333Z'
					stroke='black'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M0.833374 0.833334H4.16671L6.40004 11.9917C6.47624 12.3753 6.68496 12.72 6.98966 12.9652C7.29436 13.2105 7.67562 13.3408 8.06671 13.3333H16.1667C16.5578 13.3408 16.9391 13.2105 17.2438 12.9652C17.5484 12.72 17.7572 12.3753 17.8334 11.9917L19.1667 5H5.00004'
					stroke='black'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</g>
			<defs>
				<clipPath id='clip0_202_491'>
					<rect width='20' height='20' fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};

export default Cart;
