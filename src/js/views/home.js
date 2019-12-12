import React from "react";
import videobg from "../../img/gathering-2.mp4";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Button } from "reactstrap";
import Eventinfo from "../component/eventdets.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Groupinfo from "../component/groupdets.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faKey,
	faUser,
	faCalendarAlt,
	faUserTie,
	faQuestionCircle,
	faCheck,
	faTimes,
	faMapMarkerAlt,
	faUserFriends
} from "@fortawesome/free-solid-svg-icons";
library.add(
	fab,
	faEnvelope,
	faKey,
	faUser,
	faCalendarAlt,
	faUserTie,
	faQuestionCircle,
	faCheck,
	faTimes,
	faMapMarkerAlt,
	faUserFriends
);

export const Home = () => {
	return (
		<div>
			<Jumbotron fluid className="text-center">
				<video id="video-background" muted autoPlay loop>
					<source src={videobg} className="mh-100" type="video/mp4" />
				</video>
				<Container>
					<h1 className="jumbotron-heading">
						<strong>The real world is calling</strong>
					</h1>
					<p className="lead">
						<strong>
							Join a local group to meet people, try something new, or do more of what you love.
						</strong>
					</p>
					<Button tag={Link} to="/events" color="danger" size="lg">
						Join Meetup
					</Button>
				</Container>
			</Jumbotron>
			<div className="eventtitle">
				<h3>Events in your area</h3>
				<p>See what is happening in your area soon.</p>
				<Link className="text-muted" id="seeall" to="/events">
					See all
				</Link>
				<br />
			</div>
			<br></br>
			<Eventinfo />
			<br></br>
			<br></br>
			<div className="eventtitle">
				<h3>Groups near you</h3>
				<p>Find groups that get together to the things they love.</p>
				<Link className="text-muted" id="seeall2" to="/groups">
					See all
				</Link>
			</div>
			<br />
			<Groupinfo />
		</div>
	);
};
