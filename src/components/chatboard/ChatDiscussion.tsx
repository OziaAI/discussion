import { MutableRefObject, useContext, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

import Message from "../message/Message";
import { ChatContext } from "../../contexts/Contexts";

import "./Chatboard.css";

function ChatDiscussion() {
	const chats = useContext(ChatContext);
	const bottomRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [chats]);

	return (
		<Container id="chatboard-discussion" className="mt-2">
			{chats.map((chat, index) => (
				<Message
					key={index}
					message={chat.message}
					sentMessage={chat.sent}
				/>
			))}
			<div ref={bottomRef}></div>
		</Container>
	);
}
export default ChatDiscussion;
