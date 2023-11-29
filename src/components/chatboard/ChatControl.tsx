import { Container, Button, Row, Col, Form } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";

import "./Chatboard.css";
import { FormEvent, MouseEventHandler, MouseEvent } from "react";

function ChatControl(props: {
	onChangeMessage: React.ChangeEventHandler;
	onSend: Function;
}) {
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		props.onSend();
	};
	const onClick = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		props.onSend();
	};

	return (
		<Container fluid id="chatboard-control">
			<Row>
				<Form
					onSubmit={onSubmit}
					className="d-flex justify-content-between"
				>
					<Form.Control
						type="text"
						placeholder="Your message"
						id="chatboard-input"
						onChange={props.onChangeMessage}
					/>
					<Button
						variant="primary"
						className="ms-2"
						onClick={onClick}
					>
						<FaPaperPlane />
					</Button>
				</Form>
			</Row>
		</Container>
	);
}

export default ChatControl;
