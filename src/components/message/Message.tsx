import { Row, Col, Button, Image, Container } from "react-bootstrap";

import profile from "../../images/profile32.png";
import robot from "../../images/logo32.png";
import "./Message.css";

import {
	WingmanMessage,
	WingmanMessageOption,
} from "../../types/WingmanMessage";
import { useContext } from "react";
import { SendMessageContext } from "../../contexts/Contexts";

function Message(props: { message: WingmanMessage; sentMessage: boolean }) {
	const onSend: Function = useContext(SendMessageContext);
	const messageOption = () => {
		let option: WingmanMessageOption | null = props.message.option;
		if (option === null) return <></>;

		let acceptButton = <></>;
		let denyButton = <></>;

		if (option.acceptAction !== null)
			acceptButton = (
				<Button
					className="button-option"
					variant="success"
					onClick={() => onSend(option?.acceptAction?.messageToSend)}>
					{option.acceptAction.buttonText}
				</Button>
			);

		if (option.denyAction !== null)
			denyButton = (
				<Button
					className="button-option"
					variant="danger"
					onClick={() => onSend(option?.denyAction?.messageToSend)}>
					{option.denyAction.buttonText}
				</Button>
			);

		return (
			<Row className="d-flex justify-content-evenly mt-2 button-container">
				<Col>{acceptButton}</Col>
				<Col>{denyButton}</Col>
			</Row>
		);
	};

	return (
		<Container className="mb-2">
			<Container
				className={
					"d-flex message-container" +
					(!props.sentMessage ? " flex-row-reverse" : "")
				}>
				<Container>
					<Row>
						<Container
							className={
								"message-text " +
								(props.sentMessage
									? "message-sent"
									: "message-received")
							}>
							<span>{props.message.message}</span>
						</Container>
					</Row>
				</Container>
				<Image
					src={props.sentMessage ? profile : robot}
					className={
						"message-image " + (props.sentMessage ? "ms-2" : "me-2")
					}
					roundedCircle></Image>
			</Container>
			{messageOption()}
		</Container>
	);
}

export default Message;
