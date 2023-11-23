import React, { MouseEventHandler } from "react";
import {
	Container,
	Navbar,
	Button,
	CloseButton,
	Row,
	Col,
	Form,
} from "react-bootstrap";
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
			<Container id="chatboard-discussion">
				<Row>Test</Row>
			</Container>
			<Container fluid>
				<Row>
					<Col>
						<Form.Control type="text" placeholder="Your message" />
					</Col>
					<Col>
						<Button variant="primary">Send</Button>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Chatboard;
