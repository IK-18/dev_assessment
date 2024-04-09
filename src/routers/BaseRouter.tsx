import React from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import BaseNav from "../components/BaseNav";
import Conversations from "../pages/Conversations";
import {Dashboard} from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Customers from "../pages/Customers";
import Inventory from "../pages/Inventory";
import Settings from "../pages/Settings";
import Support from "../pages/Support";
import Gift from "../pages/Gift";
import Logout from "../pages/Logout";

const BaseRouter = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path='/' Component={BaseNav}>
				<Route path='/conversations' Component={Conversations} />
				<Route path='/dashboard' Component={Dashboard} />
				<Route path='/orders' Component={Orders} />
				<Route path='/customers' Component={Customers} />
				<Route path='/inventory' Component={Inventory} />
				<Route path='/settings' Component={Settings} />
				<Route path='/support' Component={Support} />
				<Route path='/gift' Component={Gift} />
				<Route path='/logout' Component={Logout} />
			</Route>
		</>,
	),
);

export default BaseRouter;
