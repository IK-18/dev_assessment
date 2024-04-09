import React, {useEffect, useState} from "react";
import {TopNav} from "./TopNav";
import {SideBar} from "./SideBar";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import profile from "../assets/images/profile 1.jpg";

const BaseNav = () => {
	let [open, setOpen] = useState(true);

	const navigate = useNavigate();
	const location = useLocation();

	const toggle = () => {
		setOpen(!open);
	};

	useEffect(() => {
		if (location.pathname === "/") {
			navigate("/dashboard");
		}
	}, [location.pathname]);

	return (
		<div className='w-screen relative h-screen bg-stroke'>
			<TopNav
				open={open}
				text={
					location.pathname.charAt(1).toUpperCase() +
					location.pathname.substring(2)
				}
				profile={profile}
			/>
			<SideBar open={open} toggle={toggle} />
			<div
				className={`absolute flex items-center py-[0.5%] px-[1.5%] justify-center ${
					open
						? "xldesktop:left-[20%] xldesktop:w-[80%] desktop:w-[85%] desktop:left-[15%]"
						: "w-[95%] left-[5%]"
				} top-[10%] transition-all duration-300 h-[90%]`}
			>
				<Outlet context={open} />
			</div>
		</div>
	);
};

export default BaseNav;
