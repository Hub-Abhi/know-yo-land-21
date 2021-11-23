import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import routes from "./routing/routes";

const App = () => {
	return (
		<Router>
			<Routes>
				{routes.map((route) => (
					<Route
						key={route.map}
						exact={route.exact}
						path={route.path}
						element={<route.component />}
					/>
				))}
				{/* <Route key="1" exact={true} path="/" element={<HomePage />} /> */}
			</Routes>
		</Router>
	);
};

export default App;
