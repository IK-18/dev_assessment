import React from "react";
import {NavLink} from "react-router-dom";
import {supportProps} from "../assets/interfaces/Interfaces";
import FiChevronDown from "../assets/icons/FiChevronDown";

const SupportItem = (props: React.HTMLProps<HTMLDivElement> & supportProps) => {
	return (
		<NavLink
			className={`${props.className} flex items-center rounded-xl gap-[5%] p-[5%] min-h-[25%]`}
			style={{backgroundColor: `${props.bgcolor}`}}
			to={props.path}
		>
			{({isActive}) => (
				<div
					className={`w-full ${
						props.open ? null : "flex items-center justify-center"
					}`}
				>
					<div className='flex items-center gap-[5%]'>
						<props.icon className='xldesktop:scale-[1.2]' />
						{props.open && (
							<div className='font-paragraph-2-regular tracking-[var(--paragraph-2-regular-letter-spacing)] [font-style:var(--paragraph-2-regular-font-style)] text-[length:var(--paragraph-2-regular-font-size)] text-black-100 relative font-[number:var(--paragraph-2-regular-font-weight)] leading-[var(--paragraph-2-regular-line-height)]'>
								{props.text}
							</div>
						)}
					</div>
					{props.subtext && props.open ? (
						<div className='font-label-1-regular mt-[5%] xldesktop:scale-[1.2] xldesktop:left-[10%] max-w-full flex items-center gap-[5%] tracking-[var(--label-1-regular-letter-spacing)] text-[length:var(--label-1-regular-font-size)] [font-style:var(--label-1-regular-font-style)] text-black-40 relative font-[number:var(--label-1-regular-font-weight)] leading-[var(--label-1-regular-line-height)]'>
							{props.subtext}
							<FiChevronDown
								color='#6E7079'
								className='!relative -rotate-90 !w-[16px] !h-[16px]'
							/>
						</div>
					) : null}
				</div>
			)}
		</NavLink>
	);
};

export default SupportItem;
