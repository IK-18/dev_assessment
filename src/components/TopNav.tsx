import PropTypes from "prop-types";
import React from "react";
import Home from "../assets/icons/Home";
import FiChevronDown from "../assets/icons/FiChevronDown";
import Notification from "../assets/icons/Notification";
import {topNavProps} from "../assets/interfaces/Interfaces";

export const TopNav = (props: topNavProps): JSX.Element => {
	return (
		<div
			className={`${
				props.open
					? "xldesktop:w-[80%] desktop:w-[85%] xldesktop:left-[20%] desktop:left-[15%]"
					: "w-[95%] left-[5%]"
			} h-[7%] flex flex-col items-start transition-all duration-300 absolute`}
		>
			<div className='gap-[10px] px-[21px] py-[14px] self-stretch w-full flex-[0_0_auto] bg-white flex flex-col items-start relative'>
				<div className='flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]'>
					<div className='relative w-fit font-subheading-3-medium font-[number:var(--subheading-3-medium-font-weight)] text-black-60 text-[length:var(--subheading-3-medium-font-size)] tracking-[var(--subheading-3-medium-letter-spacing)] leading-[var(--subheading-3-medium-line-height)] [font-style:var(--subheading-3-medium-font-style)]'>
						{props.text}
					</div>
					<div className='inline-flex items-center gap-[20px] relative flex-[0_0_auto]'>
						<div className='inline-flex flex-col items-center justify-center gap-[10px] px-[12px] py-[5px] relative self-stretch flex-[0_0_auto] bg-secondary-20 rounded-[8px]'>
							<div className='inline-flex items-center gap-[20px] relative flex-[0_0_auto]'>
								<div className='relative w-fit font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-100 text-[length:var(--paragraph-2-regular-font-size)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]'>
									Nanny’s Shop
								</div>
								<FiChevronDown
									className='!relative !w-[20px] !h-[20px]'
									color='#1C1D22'
								/>
							</div>
						</div>
						<Notification
							className='!relative !w-[20px] !h-[20px]'
							color='#5570F1'
						/>
						<img
							className='relative w-[32px] h-[32px] object-cover'
							alt='Profile'
							src={props.profile}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-start gap-[10px] px-[20px] py-[4px] relative self-stretch w-full flex-[0_0_auto] bg-white border-t [border-top-style:solid] border-stroke'>
				<div className='inline-flex justify-start items-center gap-[11px] relative flex-[0_0_auto]'>
					<Home
						className='!relative !w-[16px] !h-[16px]'
						color='#5570F1'
					/>
					<div className='inline-flex items-start gap-[11px] relative flex-[0_0_auto]'>
						{props.text !== "Dashboard" ? (
							<>
								<div className='relative w-fit mt-[-1.00px] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-black-30 text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
									/
								</div>
								<div className='relative w-fit mt-[-1.00px] font-label-1-regular font-[number:var(--label-1-regular-font-weight)] text-black-30 text-[length:var(--label-1-regular-font-size)] tracking-[var(--label-1-regular-letter-spacing)] leading-[var(--label-1-regular-line-height)] [font-style:var(--label-1-regular-font-style)]'>
									{props.text}
								</div>
							</>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

TopNav.propTypes = {
	text: PropTypes.string,
	profile: PropTypes.string,
	text1: PropTypes.string,
};
