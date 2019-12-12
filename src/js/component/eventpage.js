import React, { useState } from "react";
import { Container, Row, Col, CardImg, Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import "../../styles/eventpage.scss";
import gamemap from "../../img/gamemap.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EventPage = () => {
	const [modal, setModal] = useState(true);
	const [cancel, setCancel] = useState(false);

	const toggle = () => setModal(!modal);
	const changeCancel = () => setCancel(!cancel);

	return (
		<Container>
			<Row>
				<FontAwesomeIcon icon="calendar-alt" color="orange" size="4x" />

				<Col className="title">
					<medium className="text-muted">Thursday, November 7, 2019</medium>

					<h3>
						<strong>Game Night at Craft on 14: Featuring Jackbox Games</strong>
					</h3>
				</Col>
			</Row>
			<br />
			<div className="rvsp">
				<p>
					<strong>Are you going?</strong>&nbsp;&nbsp;
					<span className="text-muted">7 people going </span>
				</p>
				<Button color="info" size="sm" onClick={toggle} className="rvspbtn">
					<FontAwesomeIcon icon="check" color="white" />
				</Button>{" "}
				<Modal isOpen={modal} toggle={toggle}>
					<ModalBody>See you there!</ModalBody>
					<ModalFooter>
						<Button outline color="info" onClick={toggle}>
							confirm
						</Button>{" "}
						<Button outline color="info" onClick={toggle}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
				<Button color="info" size="sm" onClick={changeCancel} className="rvspbtn">
					<FontAwesomeIcon icon="times" color="white" />
				</Button>
				<Modal isOpen={cancel} toggle={changeCancel}>
					<ModalBody>Aw shucks, maybe next time we&#39;ll convince you.</ModalBody>
					<ModalFooter>
						<Button outline color="info" onClick={changeCancel}>
							Done
						</Button>{" "}
						<Button outline color="info" onClick={changeCancel}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
			<Row className="title">
				<Col sm={{ size: 6, order: 2, offset: 1 }}>
					<FontAwesomeIcon className="tie" icon="user-tie" color="black" size="3x" pull="left" />
					<p>
						Hosted by Crawl: Board Game M.
						<br />
						From Game Night: Classic, Modern, Party Board
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Public group
						<FontAwesomeIcon icon="question-circle" className="question" />
					</p>
				</Col>
			</Row>
			<hr className="my-8" />

			<Row className="container-fluid">
				<Col xs="6">
					<p className="eventdetails">
						<h4>Details</h4>
						Crawl events provide 60+ games for anyone to enjoy FREE! Our library ranges from the classic
						games you grew up with to new releases from recent years. We also encourage you to bring your
						favorite games to share with others. Nights at Craft on 14 feature Jackbox Games. A Hilarious
						pack of different party games with trivia, drawing, bluffing, and sharp wit. Play from your
						phone and join the party or just engage from the privacy of your table. Drafts and Entrees $3
						off all night! Check out their menus online at crafton14.com Learn a new game, meet some new
						people, have a good time, and keep the hobby growing! Beginner and Experienced players welcomed
						alike.
					</p>
				</Col>
				<Col xs="6">
					<CardImg width="100%" src={gamemap} alt="image" className="imagemap" />
				</Col>
			</Row>
		</Container>
	);
};

export default EventPage;
