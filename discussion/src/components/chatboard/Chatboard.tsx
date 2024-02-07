import React, { MouseEventHandler } from "react";

import ChatNavbar from "./chat-navbar/ChatNavbar";
import ChatDiscussion from "./chat-discussion/ChatDiscussion";
import ChatControl from "./chat-control/ChatControl";

import "./Chatboard.css";

function Chatboard(props: {
	onCloseClick: MouseEventHandler<HTMLButtonElement>;
	onChangeMessage: React.ChangeEventHandler;
}) {
	return (
		<div id="chatboard-container">
			<ChatNavbar />
			<ChatDiscussion />
			<ChatControl onChangeMessage={props.onChangeMessage} />
		</div>
	);
}

export default Chatboard;
