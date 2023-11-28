import React from "react";
import { Row, Col, Button, Image, Container } from "react-bootstrap";

import profile from "../../images/profile32.png";
import robot from "../../images/logo32.png";
import "./Message.css";

import { WingmanMessage, WingmanMessageOption } from "../../types/WingmanMessage";

function Message(props: { message: WingmanMessage; sentMessage: boolean }) {

        const messageOption = () => {
            let option: WingmanMessageOption | null = props.message.option;
            if (option === null)
                return <></>;

            let acceptButton = <></>;
            let denyButton = <></>;

            if (option.acceptAction !== null)
                acceptButton = (<Button variant="success">
                    {option.acceptAction.buttonText}</Button>);

            if (option.denyAction !== null)
                denyButton = (<Button variant="danger">
                    {option.denyAction.buttonText}</Button>);

            return (<Row>
                {acceptButton}
                {denyButton}
            </Row>);
        };

	return (
		<Container
			className={
				"d-flex mb-2 message-container" +
				(!props.sentMessage ? " flex-row-reverse" : "")
			}>
			<Container
				className={
					"message-text " +
					(props.sentMessage ? "message-sent" :
                                        "message-received")
				}>
				<span>{props.message.message}</span>
			</Container>
			<Image
				src={props.sentMessage ? profile : robot}
				className={
					"message-image " + (props.sentMessage ? 
                                        "ms-2" : "me-2")
				}
				roundedCircle></Image>
                        {messageOption()}
		</Container>
	);
}

export default Message;
