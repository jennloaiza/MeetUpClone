import React from "react";
import { Container, Row, Col, CardImg, Button, ButtonGroup } from "reactstrap";
import adventure from "../../img/adventure.jpg";
import "../../styles/grouppage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GroupPage = () => {
	return (
		<Container>
			<Row>
				<Col xs="6">
					<CardImg top width="100%" src={adventure} alt="Card image cap" className="gpageimage" />
				</Col>
				<Col xs="6" className="groupinfo">
					<h3>
						<strong>Get Out There Adventures</strong>
					</h3>
					<div className="adventureinfo">
						<p>
							<FontAwesomeIcon className="location" icon="map-marker-alt" color="black" />
							&nbsp;&nbsp;Pompano Beach, FL
						</p>
						<p>
							<FontAwesomeIcon className="data-separator" icon="user-friends" color="black" />
							&nbsp;&nbsp;5,975 members
						</p>
						<p>
							<FontAwesomeIcon className="user" icon="user" color="black" />
							&nbsp;&nbsp;Organized by <strong>Jimmy</strong> and <strong>13 others</strong>
						</p>
					</div>
					<Button color="danger">Join Group</Button>{" "}
				</Col>
			</Row>
			<br />

			<hr className="my-8" />

			<Row className="container-fluid">
				<Col xs="3" className="verticalbtn">
					<div>
						<ButtonGroup vertical>
							<Button outline color="info">
								Events
							</Button>{" "}
							<br />
							<Button outline color="info">
								Members
							</Button>{" "}
							<br />
							<Button outline color="info">
								Photos
							</Button>{" "}
							<br />
							<Button outline color="info">
								Discussions
							</Button>{" "}
							<br />
							<Button outline color="info">
								More..
							</Button>{" "}
						</ButtonGroup>
					</div>
				</Col>
				<Col sm="12" md={{ size: 8, offset: 3 }}>
					<div className="adventuredetails">
						<h4>What we&#39;re about</h4>
						<p>All ages are welcome!</p>
						<p>
							The purpose of this group is to enjoy the great outdoors and making and enjoying being with
							friends. Miami-Dade, Broward, and Palm Beach counties will be the location of many of our
							adventurous activities involving indoor and outdoors. Join us for South Florida events,
							adventures and social gatherings.
						</p>
						<p>
							Among the activities that we enjoy are: boating, kayaking, sailing, snorkeling, scuba
							diving, horseback riding, bicycling and canoeing. We travel to nature centers and state
							parks for hiking and exploration.
						</p>
						<p>
							Our indoor events include bowling, parties, board and game nights, dinner and movie nights
							and even our Super Bowl party!
						</p>
						<p>
							In fact, we have lots of events and adventures that practically anyone, whether you are a
							single, family or couple, can enjoy! We would love to hear from our members with new ideas
							that would be fun for our group!{" "}
						</p>
						<p>
							WE DO NOT CHARGE ANY DUES OR FEES; all costs on the site are ONLY what the vendor charges us
							for events.
						</p>
						<p> We look forward to you joining GET OUT THERE ADVENTURES!!! </p>
						<p>
							Your participation in any of our activities is your acknowledgment that you are solely
							responsible for your own assessment of your abilities and your physical fitness to
							participate in that activity. Walkers and hikers must be physically fit and by joining any
							event you agree to waive all rights and claims for damages against Get Out There Adventures
							in South Florida, it&#39;s Organizers and Assistant Organizers.
						</p>
						<br />
						BY JOINING THIS GROUP YOU AGREE TO THE ABOVE TERMS
						<br />
						(PS - We require that the photo in your profile be a current one of yourself. We like to
						identify you in the crowd at your first Meetup with us!)
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default GroupPage;
