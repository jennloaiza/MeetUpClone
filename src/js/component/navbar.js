import { Link } from "react-router-dom";
import logo from "../../img/meetuplogo.png";
import React, { useState } from "react";

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "../../styles/home.scss";

const Navi = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar color="light" light expand="md">
				<NavbarBrand href="/">
					{" "}
					<img className="logo" src={logo} />{" "}
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink tag={Link} to="/demo" className="lol">
								Start a new group
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/login">
								Log in
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink tag={Link} to="/signup">
								Sign up
							</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Navi;
