import React, { MouseEventHandler } from "react";
import { Container, Row, Image } from "react-bootstrap";

import robot from "../../images/logo32.png";

import ChatNavbar from "./ChatNavbar";
import ChatDiscussion from "./ChatDiscussion";
import ChatControl from "./ChatControl";

import "./Chatboard.css";

function Chatboard(props: {
	onCloseClick: MouseEventHandler<HTMLButtonElement>;
	onChangeMessage: React.ChangeEventHandler;
}) {
	return (
		<Container
			id="chatboard-container"
			className="d-flex flex-column shadow mb-2 rounded justify-content-between">
			<ChatNavbar />
			<ChatDiscussion />
			<ChatControl onChangeMessage={props.onChangeMessage} />
			<p className="text-end me-3">
				<span className="powered-by">Powered by</span>
				<Image
					src={robot}
					className={"logo-image mx-2"}
					roundedCircle></Image>
				<strong>OziaAI</strong>
			</p>
		</Container>
	);
}

export default Chatboard;
