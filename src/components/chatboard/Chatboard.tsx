import React, { MouseEventHandler, useContext } from "react";
import { Container, Row, Image } from "react-bootstrap";

import robot from "../../images/logo32.png";

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
				<p id="conversation-end" className="text-center fst-italic">
					End of conversation.
				</p>
			) : (
				<ChatControl onChangeMessage={props.onChangeMessage} />
			)}
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
