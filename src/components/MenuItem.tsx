import React from "react";
import {NavLink} from "react-router-dom";
import {menuProps} from "../assets/interfaces/Interfaces";

const MenuItem = (props: React.HTMLProps<HTMLDivElement> & menuProps) => {
	return (
		<NavLink
			className={({isActive}) =>
				`${props.className} ${
					props.open ? null : "justify-center"
				} flex p-[5%] rounded-xl transition-all items-center box-content gap-[5%] xldesktop:gap-[15%] h-[25%] ${
					isActive
						? `text-white bg-[#5570F1]`
						: "text-[#53545c] bg-[#FFFFFF]"
				}`
			}
			to={props.path}
		>
			{({isActive}) => (
				<>
					{props.activeIcon && props.inactiveIcon ? (
						isActive ? (
							<props.activeIcon className='xldesktop:scale-[1.2]' />
						) : (
							<props.inactiveIcon className='xldesktop:scale-[1.2]' />
						)
					) : props.icon ? (
						<props.icon
							className='xldesktop:scale-[1.2]'
							fill={isActive ? "#5570F1" : "#FFFFFF"}
							stroke={isActive ? "#FFFFFF" : "#53545C"}
						/>
					) : null}
					<div
						className={`${
							props.open ? null : "hidden"
						} relative w-[65%] xldesktop:scale-[1.2] transition-all duration-150 text-start font-paragraph-2-regular font-[number:var(--paragraph-2-regular-font-weight)] text-black-50 text-[length:var(--paragraph-2-regular-font-size)] tracking-[var(--paragraph-2-regular-letter-spacing)] leading-[var(--paragraph-2-regular-line-height)] [font-style:var(--paragraph-2-regular-font-style)]`}
					>
						{props.text}
					</div>
				</>
			)}
		</NavLink>
	);
};

export default MenuItem;
