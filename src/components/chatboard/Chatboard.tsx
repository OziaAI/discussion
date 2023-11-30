import React, { MouseEventHandler } from "react";
import { Container } from "react-bootstrap";

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
		</Container>
	);
}

export default Chatboard;
