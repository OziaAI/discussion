import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";

import "./Chatboard.css";
import { FormEvent, MouseEvent, useContext } from "react";
import { SendMessageContext } from "../../contexts/Contexts";

function ChatControl(props: { onChangeMessage: React.ChangeEventHandler }) {
	const onSend: Function = useContext(SendMessageContext);
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSend();
	};
	const onClick = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		onSend();
	};

	return (
		<Container fluid id="chatboard-control">
			<Row>
				<Form
					onSubmit={onSubmit}
					className="d-flex justify-content-between">
					<Form.Control
						type="text"
						placeholder="Your message"
						id="chatboard-input"
						onChange={props.onChangeMessage}
					/>
					<Button
						variant="primary"
						className="ms-2"
						onClick={onClick}>
						<FaPaperPlane />
					</Button>
				</Form>
			</Row>
		</Container>
	);
}

export default ChatControl;
