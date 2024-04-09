import React from "react";
import "./styles/main.css";
import {RouterProvider} from "react-router-dom";
import BaseRouter from "./routers/BaseRouter";

const App = (): JSX.Element => {
	return <RouterProvider router={BaseRouter} />;
};

export default App;
