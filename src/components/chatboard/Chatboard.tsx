import React, { MouseEventHandler } from "react";
import { Container } from "react-bootstrap";

import "./Chatboard.css";

import ChatNavbar from "./ChatNavbar";
import ChatDiscussion from "./ChatDiscussion";
import ChatControl from "./ChatControl";

function Chatboard(props: {
	onCloseClick: MouseEventHandler<HTMLButtonElement>;
}) {
	return (
		<Container
			id="chatboard-container"
			className="d-flex flex-column shadow mb-2 rounded justify-content-between">
			<ChatNavbar />
			<ChatDiscussion />
			<ChatControl />
		</Container>
	);
}

export default Chatboard;
