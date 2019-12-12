import React from "react";
import { Link } from "react-router-dom";
import adventure from "../../img/adventure.jpg";
import tech from "../../img/tech.jpg";
import fl from "../../img/305.jpg";
import art from "../../img/art.jpg";
import { Card, CardBody, CardTitle, CardText, CardImg, Col, Button, Row } from "reactstrap";

const Groupinfo = props => {
	return (
		<Row className="card-adjustment">
			<Col sm="3">
				<div>
					<Card>
						<CardImg top width="100%" src={adventure} alt="Card image cap" />
						<CardBody outline color="info">
							<CardTitle className="text-muted">OUTDOORS & ADVENTURE</CardTitle>
							<CardText>
								<strong>Get Out There Adventures</strong>
								<p>33 upcoming events</p>
							</CardText>
							<div>
								<CardText>
									<small className="text-muted">5,965 Adventures</small>
									<Button tag={Link} to="/grouppage" className="bttnsize2" outline color="info">
										Join
									</Button>{" "}
								</CardText>
							</div>
						</CardBody>
					</Card>
				</div>
			</Col>
			<Col sm="3">
				<div>
					<Card>
						<CardImg top width="100%" src={tech} alt="Card image cap" />
						<CardBody outline color="info">
							<CardTitle className="text-muted">TECH</CardTitle>
							<CardText>
								<strong>Tech Seminar</strong>
								<p>2 upcoming events</p>
							</CardText>
							<div>
								<CardText>
									<small className="text-muted">4,580 Members</small>
									<Button className="bttnsize2" outline color="info">
										Join
									</Button>{" "}
								</CardText>
							</div>
						</CardBody>
					</Card>
				</div>
			</Col>
			<Col sm="3">
				<div>
					<Card>
						<CardImg top width="100%" src={fl} alt="Card image cap" />
						<CardBody outline color="info">
							<CardTitle className="text-muted">CAREER & BUSINESS</CardTitle>
							<CardText>
								<strong>South Florida FBA - Amazon Sellers</strong>
								<p>5 upcoming events</p>
							</CardText>
							<div>
								<CardText>
									<small className="text-muted">580 Wizards of Amazon</small>
									<Button className="bttnsize3" outline color="info">
										Join
									</Button>{" "}
								</CardText>
							</div>
						</CardBody>
					</Card>
				</div>
			</Col>
			<Col sm="3">
				<div>
					<Card>
						<CardImg top width="100%" src={art} alt="Card image cap" />
						<CardBody outline color="info">
							<CardTitle className="text-muted">PHOTOGRAPHY</CardTitle>
							<CardText>
								<strong>The Art of Photography U.S.</strong>
								<p>8 upcoming events</p>
							</CardText>
							<div>
								<CardText>
									<small className="text-muted">5,2,303 Photographers</small>
									<Button className="bttnsize3" outline color="info">
										Join
									</Button>{" "}
								</CardText>
							</div>
						</CardBody>
					</Card>
				</div>
			</Col>
		</Row>
	);
};

export default Groupinfo;
