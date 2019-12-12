import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home, Events } from "./views/home";
import Login from "./views/login";
import EventList from "./views/events";
import GroupList from "./views/groups";
import Reg from "./views/signup";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import Navi from "./component/navbar";
import { Footer } from "./component/footer";
import EventPage from "./component/eventpage";
import GroupPage from "./component/grouppage";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navi />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Reg} />
						<Route path="/eventpage" component={EventPage} />
						<Route path="/events" component={EventList} />
						<Route path="/groups" component={GroupList} />
						<Route path="/grouppage" component={GroupPage} />
						<Route path="/demo" component={Demo} />
						<Route path="/single/:theid" component={Single} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<br></br>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
