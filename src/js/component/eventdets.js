import React from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { Card, Button, CardTitle, CardText, CardLink, Row, Col } from "reactstrap";
import "../../styles/home.scss";

const Eventinfo = props => {
	return (
		<Row className="card-adjustment">
			<Col sm="3">
				<Card body outline color="warning">
					<CardLink className="linkcolor" color="info" href="#">
						THU, NOV 7, 6:00 PM
					</CardLink>
					<CardTitle>
						<strong>Game Night at Craft on 14 Featuring Jackbox Games</strong>
					</CardTitle>
					<CardText>Game Night Classic, Modern</CardText>
					<CardLink className="linkcolor" href="#">
						<i className="fa fa-map-marker">&nbsp;&nbsp;CRAFT on 14</i>
					</CardLink>
					&nbsp;&nbsp;
					<div className="attendee-spacing">
						<span className="numcount">9 attendees</span>
						<Button tag={Link} to="/eventpage" className="bttnsize" outline color="info">
							Attend
						</Button>{" "}
					</div>
				</Card>
			</Col>
			<Col sm="3">
				<Card body outline color="warning">
					<CardLink className="linkcolor" color="info" href="#">
						SUN, NOV 10, 9:00 AM
					</CardLink>
					<CardTitle>
						<strong>Attend Our Exotic Cats on Las Olas Meetup Event</strong>
					</CardTitle>
					<CardText>The Art of Photography, USA</CardText>
					<CardLink className="linkcolor" href="#">
						<i className="fa fa-map-marker">&nbsp;&nbsp;Starbucks</i>
						&nbsp;
					</CardLink>
					&nbsp;&nbsp;
					<div className="attendee-spacing">
						<span className="numcount">6 attendees</span>
						<Button className="bttnsize" outline color="info">
							Attend
						</Button>{" "}
					</div>
				</Card>
			</Col>
			<Col sm="3">
				<Card body outline color="warning">
					<CardLink className="linkcolor" color="info" href="#">
						MON, NOV 11, 3:00 PM
					</CardLink>
					<CardTitle>
						<strong>QUALITY BOOK CLUB</strong>
					</CardTitle>
					<CardText>Quality Book Club</CardText>
					<CardLink className="linkcolor" href="#">
						<i className="fa fa-map-marker">&nbsp;&nbsp;Sharons Home</i>
					</CardLink>
					&nbsp;&nbsp; &nbsp;&nbsp;
					<div className="attendee-spacing">
						<span className="numcount">4 attendees</span>
						<Button className="bttnsize" outline color="info">
							Attend
						</Button>{" "}
					</div>
				</Card>
			</Col>
			<Col sm="3">
				<Card body outline color="warning">
					<CardLink className="linkcolor" color="info" href="#">
						TUE, NOV 12, 7:45 AM
					</CardLink>
					<CardTitle>
						<strong>Come join us for breakfast and networking</strong>
					</CardTitle>
					<CardText>Plantation Business Network</CardText>
					<CardLink className="linkcolor" href="#">
						<i className="fa fa-map-marker">&nbsp;&nbsp;TooJays Original Gourmet Deli</i>
					</CardLink>
					&nbsp;&nbsp;
					<div className="attendee-spacing">
						<span className="numcount">8 attendees</span>
						<Button className="bttnsize" outline color="info">
							Attend
						</Button>{" "}
					</div>
				</Card>
			</Col>
		</Row>
	);
};

export default Eventinfo;
