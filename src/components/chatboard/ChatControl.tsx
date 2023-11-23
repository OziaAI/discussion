import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";

import "./Chatboard.css";

function ChatControl() {
	return (
		<Container fluid id="chatboard-control">
			<Row>
				<Col xs={10}>
					<Form.Control type="text" placeholder="Your message" />
				</Col>
				<Col>
					<Button variant="primary" className="ms-0">
						<FaPaperPlane />
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default ChatControl;
