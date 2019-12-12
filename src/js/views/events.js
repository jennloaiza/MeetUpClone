import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { Card, Button, CardText, CardLink, CardBody, CardHeader } from "reactstrap";
import "../../styles/home.scss";

const EventList = () => {
	return (
		<div>
			<Card className="card-list">
				<CardHeader tag="h3">
					<strong>Game Night at Craft on 14 Featuring Jackbox Games</strong>
				</CardHeader>
				<CardBody>
					<CardLink className="linkcolor" color="info" href="#">
						THU, NOV 7, 6:00 PM
					</CardLink>
					<CardText>Game Night Classic, Modern</CardText>
					<CardLink className="linkcolor" href="#">
						<i className="fa fa-map-marker">&nbsp;&nbsp;CRAFT on 14</i>
					</CardLink>
					&nbsp;&nbsp;
					<div className="attendee-spacing">
						<span className="numcount">9 attendees</span>
						<Button tag={Link} to="/eventpage" className="bttnsize2" outline color="info">
							Attend
						</Button>{" "}
					</div>
				</CardBody>
			</Card>
			<Card className="card-list">
				<CardHeader tag="h3">
					<strong>Attend Our Exotic Cats on Las Olas Meetup Event</strong>
				</CardHeader>
				<CardBody>
					<CardLink className="linkcolor" color="info" href="#">
						SUN, NOV 10, 9:00 AM
					</CardLink>
					<CardText>The Art of Photography, USA</CardText>
					<CardLink className="linkcolor" href="#">
						<i className="fa fa-map-marker">&nbsp;&nbsp;Starbucks</i>
						&nbsp;
					</CardLink>
					&nbsp;&nbsp;
					<div className="attendee-spacing">
						<span className="numcount">6 attendees</span>
						<Button className="bttnsize2" outline color="info">
							Attend
						</Button>{" "}
					</div>
				</CardBody>
			</Card>
			<Card className="card-list">
				<CardHeader tag="h3">
					<strong>QUALITY BOOK CLUB</strong>
				</CardHeader>
				<CardBody>
					<CardLink className="linkcolor" color="info" href="#">
						MON, NOV 11, 3:00 PM
					</CardLink>
					<CardText>Quality Book Club</CardText>
					<CardLink className="linkcolor" href="#">
						<i className="fa fa-map-marker">&nbsp;&nbsp;Sharons Home</i>
					</CardLink>
					&nbsp;&nbsp; &nbsp;&nbsp;
					<div className="attendee-spacing">
						<span className="numcount">4 attendees</span>
						<Button className="bttnsize2" outline color="info">
							Attend
						</Button>{" "}
					</div>
				</CardBody>
			</Card>
			<Card className="card-list">
				<CardHeader tag="h3">
					<strong>Come join us for breakfast and networking</strong>
				</CardHeader>
				<CardBody>
					<CardLink className="linkcolor" color="info" href="#">
						TUE, NOV 12, 7:45 AM
					</CardLink>
					<CardText>Plantation Business Network</CardText>
					<CardLink className="linkcolor" href="#">
						<i className="fa fa-map-marker">&nbsp;&nbsp;TooJays Original Gourmet Deli</i>
					</CardLink>
					&nbsp;&nbsp;
					<div className="attendee-spacing">
						<span className="numcount">8 attendees</span>
						<Button className="bttnsize2" outline color="info">
							Attend
						</Button>{" "}
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default EventList;
