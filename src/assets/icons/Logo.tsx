import React from "react";

const Logo = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			className={props.className}
			width='53'
			height='52'
			viewBox='0 0 53 52'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M22.5074 12.037C22.6177 12.2616 22.6906 12.5021 22.7233 12.7494L23.3265 21.7192L23.626 26.2277C23.6291 26.6913 23.7018 27.152 23.8419 27.5948C24.2035 28.4539 25.0736 28.9999 26.0202 28.9618L40.4443 28.0184C41.0689 28.0081 41.6721 28.2417 42.1211 28.6678C42.4953 29.0229 42.7369 29.4874 42.813 29.987L42.8385 30.2904C42.2416 38.5556 36.1713 45.4494 27.9232 47.229C19.6751 49.0086 11.2171 45.2493 7.14128 37.9923C5.96625 35.884 5.23232 33.5666 4.98257 31.1761C4.87824 30.4685 4.8323 29.7538 4.8452 29.0389C4.83232 20.1776 11.1426 12.5168 19.9758 10.6699C21.0389 10.5044 22.0811 11.0672 22.5074 12.037Z'
				fill='#97A5EB'
			/>
			<path
				opacity='0.4'
				d='M28.3948 4.33512C38.2745 4.58647 46.5781 11.6909 48.1764 21.26L48.1612 21.3306L48.1176 21.4333L48.1236 21.7151C48.101 22.0886 47.9568 22.4478 47.7084 22.7381C47.4495 23.0404 47.0959 23.2462 46.7065 23.3261L46.4691 23.3587L29.8274 24.437C29.2738 24.4916 28.7227 24.3131 28.311 23.9459C27.968 23.6399 27.7487 23.2269 27.6867 22.7818L26.5697 6.16431C26.5503 6.10812 26.5503 6.04721 26.5697 5.99102C26.585 5.53297 26.7866 5.1 27.1295 4.78884C27.4725 4.47769 27.9282 4.31428 28.3948 4.33512Z'
				fill='#FFCC91'
			/>
		</svg>
	);
};

export default Logo;
