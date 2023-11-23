import React, { MouseEventHandler } from "react";
import { Container, Navbar, CloseButton, Row, Col } from "react-bootstrap";
import "./Chatboard.css";

function Chatboard(props: {
	onCloseClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<Container id="chatboard-container" className="shadow mb-2 rounded">
			<Navbar
				className="justify-content-between rounded"
				bg="primary"
				data-bs-theme="dark">
				<Navbar.Brand href="#">OziaAI</Navbar.Brand>
				<CloseButton onClick={props.onCloseClick} />
			</Navbar>
			<Container></Container>
		</Container>
	);
}

export default Chatboard;
