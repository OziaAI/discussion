import React, { MouseEventHandler } from "react";
import { Container } from "react-bootstrap";

import "./Chatboard.css";

import ChatNavbar from "./ChatNavbar";
import ChatDiscussion from "./ChatDiscussion";
import ChatControl from "./ChatControl";
import {WingmanMessage} from "../../types/WingmanMessage";

function Chatboard(props: {
	onCloseClick: MouseEventHandler<HTMLButtonElement>;
	chats: { message: WingmanMessage; sent: boolean }[];
	onSend: Function;
	onChangeMessage: React.ChangeEventHandler;
}) {
	return (
		<Container
			id="chatboard-container"
			className="d-flex flex-column shadow mb-2 rounded justify-content-between">
			<ChatNavbar />
			<ChatDiscussion chats={props.chats} />
			<ChatControl
				onChangeMessage={props.onChangeMessage}
				onSend={props.onSend}
			/>
		</Container>
	);
}

export default Chatboard;
