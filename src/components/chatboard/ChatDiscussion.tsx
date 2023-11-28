import { Container } from "react-bootstrap";
import {WingmanMessage} from "../../types/WingmanMessage";

import Message from "../message/Message";

import "./Chatboard.css";

function ChatDiscussion(props: {
	chats: { message: WingmanMessage; sent: boolean }[];
}) {
	return (
		<Container id="chatboard-discussion" className="mt-2">
			{props.chats.map((chat, index) => (
				<Message
					key={index}
					message={chat.message}
					sentMessage={chat.sent}
				/>
			))}
		</Container>
	);
}
export default ChatDiscussion;
