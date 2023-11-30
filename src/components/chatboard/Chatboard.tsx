import React, { MouseEventHandler, useContext } from "react";
import { Container } from "react-bootstrap";

import ChatNavbar from "./ChatNavbar";
import ChatDiscussion from "./ChatDiscussion";
import ChatControl from "./ChatControl";

import "./Chatboard.css";
import { ChatContext } from "../../contexts/Contexts";

function Chatboard(props: {
	onCloseClick: MouseEventHandler<HTMLButtonElement>;
	onChangeMessage: React.ChangeEventHandler;
}) {
	const [chats, displayControl] = useContext(ChatContext);
	return (
		<Container
			id="chatboard-container"
			className="d-flex flex-column shadow mb-2 rounded justify-content-between">
			<ChatNavbar />
			<ChatDiscussion />
			{!displayControl ? (
				<p className="text-center fst-italic fs-6">
					End of conversation.
				</p>
			) : (
				<ChatControl onChangeMessage={props.onChangeMessage} />
			)}
		</Container>
	);
}

export default Chatboard;
