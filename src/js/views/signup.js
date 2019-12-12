import React, { Component } from "react";
import { Container, Col, Form, FormGroup, Label, Input, Button, FormText, FormFeedback } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/loginform.scss";

class Reg extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			lastname: "",
			email: "",
			password: "",
			password2: "",
			validate: {
				emailState: ""
			}
		};
		this.handleChange = this.handleChange.bind(this);
	}

	validateEmail(e) {
		const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const { validate } = this.state;
		if (emailRex.test(e.target.value)) {
			validate.emailState = "has-success";
		} else {
			validate.emailState = "has-danger";
		}
		this.setState({ validate });
	}

	handleChange = async event => {
		const { target } = event;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const { name } = target;
		await this.setState({
			[name]: value
		});
	};

	submitForm(e) {
		e.preventDefault();
		//console.log(`Email: ${ this.state.email }`);
	}

	render() {
		const { name, lastname, email, password, password2 } = this.state;
		return (
			<Container>
				<h2 className="h2login">Register</h2>
				<Form className="form" onSubmit={e => this.submitForm(e)}>
					<Col>
						<FormGroup>
							<Label>
								<FontAwesomeIcon icon="user" color="#6DB65B" size="sm" />
								&nbsp;&nbsp;First Name
							</Label>
							<Input name="firstname" placeholder="your first name" />
						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Label>
								<FontAwesomeIcon icon="user" color="#6DB65B" size="sm" />
								&nbsp;&nbsp;Last Name
							</Label>
							<Input name="lastname" placeholder="your last name" />
						</FormGroup>
					</Col>

					<Col>
						<FormGroup>
							<Label>
								<FontAwesomeIcon icon="envelope" color="#6DB65B" size="sm" />
								&nbsp;&nbsp; Username
							</Label>
							<Input
								type="email"
								name="email"
								id="exampleEmail"
								placeholder="myemail@email.com"
								value={email}
								valid={this.state.validate.emailState === "has-success"}
								invalid={this.state.validate.emailState === "has-danger"}
								onBlur={e => {
									this.validateEmail(e);
								}}
								onChange={e => {
									this.handleChange(e);
								}}
							/>
							<FormFeedback valid>That&#39s a tasty looking email you&#39ve got there.</FormFeedback>
							<FormFeedback>
								Uh oh! Looks like there is an issue with your email. Please input a correct email.
							</FormFeedback>
							<FormText>Your username is most likely your email.</FormText>
						</FormGroup>
					</Col>
					<Col>
						<FormGroup>
							<Label for="examplePassword">
								<FontAwesomeIcon icon="key" color="#6DB65B" size="sm" />
								&nbsp;&nbsp;Password
							</Label>
							<Input
								type="password"
								name="password"
								id="examplePassword"
								placeholder="********"
								value={password}
								onChange={e => this.handleChange(e)}
							/>
						</FormGroup>
					</Col>
					<Button color="success">Submit</Button>
				</Form>
			</Container>
		);
	}
}

export default Reg;
