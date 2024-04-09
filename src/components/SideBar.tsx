import React from "react";
import MenuItem from "./MenuItem";
import SupportItem from "./SupportItem";
import {menuProps, supportProps} from "../assets/interfaces/Interfaces";
import ActiveDash from "../assets/icons/ActiveDash";
import InactiveDash from "../assets/icons/InactiveDash";
import Logo from "../assets/icons/Logo";
import Bag from "../assets/icons/Bag";
import People from "../assets/icons/People";
import Folder from "../assets/icons/Folder";
import Chat from "../assets/icons/Chat";
import Gear from "../assets/icons/Gear";
import HeadPhones from "../assets/icons/HeadPhones";
import Gift from "../assets/icons/Gift";
import Door from "../assets/icons/Door";

let menuItems: menuProps[] = [
	{
		activeIcon: ActiveDash,
		inactiveIcon: InactiveDash,
		text: "Dashboard",
		path: "/dashboard",
		notifications: 0,
	},
	{
		icon: Bag,
		text: "Orders",
		path: "/orders",
		notifications: 0,
	},
	{
		icon: People,
		text: "Customers",
		path: "/customers",
		notifications: 0,
	},
	{
		icon: Folder,
		text: "Inventory",
		path: "/inventory",
		notifications: 0,
	},
	{
		icon: Chat,
		text: "Conversations",
		path: "/conversations",
		notifications: 0,
	},
	{
		icon: Gear,
		text: "Settings",
		path: "/settings",
		notifications: 0,
	},
];

const supportItems: supportProps[] = [
	{
		icon: HeadPhones,
		text: "Contact Support",
		path: "/support",
		bgcolor: "#5e63661a",
	},
	{
		icon: Gift,
		text: "Free Gift Awaits You",
		subtext: "Upgrade your account",
		path: "/gift",
		bgcolor: "#ffcc9133",
	},
	{icon: Door, text: "Logout", path: "/logout", bgcolor: "white"},
];

export const SideBar = (props: {
	open: boolean;
	toggle: React.MouseEventHandler<HTMLDivElement>;
}) => {
	return (
		<div
			className={`${
				props.open ? "xldesktop:w-[20%] desktop:w-[15%]" : "w-[5%]"
			} flex flex-col py-[1%] bg-white h-[100vh] transition-all duration-300 relative items-center`}
		>
			<div
				onClick={props.toggle}
				className={`flex w-[80%] ${
					props.open ? null : "justify-center"
				} gap-[5%] items-center transition-all duration-300`}
			>
				<Logo className='xldesktop:scale-[1.2]' />
				<div
					className={`${
						props.open ? null : "hidden"
					} font-subheading-3-bold xldesktop:scale-[1.2] transition-all duration-300 [font-style:var(--subheading-3-bold-font-style)] tracking-[var(--subheading-3-bold-letter-spacing)] text-[length:var(--subheading-3-bold-font-size)] top-[14px] text-black-60 font-[number:var(--subheading-3-bold-font-weight)] text-center leading-[var(--subheading-3-bold-line-height)]`}
				>
					Metrix
				</div>
			</div>
			<div
				className={`${
					props.open ? "w-[80%]" : "w-[70%]"
				} h-[50%] gap-[0.4vw] flex mt-[3vw] flex-col`}
			>
				{menuItems.map((menuItem) => {
					return (
						<MenuItem
							open={props.open}
							path={menuItem.path}
							text={menuItem.text}
							notifications={menuItem.notifications}
							activeIcon={menuItem.activeIcon}
							inactiveIcon={menuItem.inactiveIcon}
							icon={menuItem.icon}
						/>
					);
				})}
			</div>
			<div className='w-[80%] h-[25%] absolute bottom-0 flex flex-col justify-evenly'>
				{supportItems.map((supportItem) => {
					return (
						<SupportItem
							open={props.open}
							path={supportItem.path}
							text={supportItem.text}
							subtext={supportItem.subtext}
							icon={supportItem.icon}
							bgcolor={supportItem.bgcolor}
						/>
					);
				})}
			</div>
		</div>
	);
};
