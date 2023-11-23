import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";

import profile from "../../images/profile32.png";
import robot from "../../images/logo32.png";
import "./Message.css";

function Message(props: { text: string; sentMessage: boolean }) {
	return (
		<Container
			className={
				"d-flex mb-2 message-container" +
				(!props.sentMessage ? " flex-row-reverse" : "")
			}>
			<Container
				className={
					"message-text " +
					(props.sentMessage ? "message-sent" : "message-received")
				}>
				<span>{props.text}</span>
			</Container>
			<Image
				src={props.sentMessage ? profile : robot}
				className={
					"message-image " + (props.sentMessage ? "ms-2" : "me-2")
				}
				roundedCircle></Image>
		</Container>
	);
}

export default Message;
