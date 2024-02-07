import { MutableRefObject, useContext, useEffect, useRef } from "react";

import Message from "../../message/Message";
import { ChatContext, WingmanContext } from "../../../contexts/Contexts";

import "./ChatDiscussion.css";
import MessageBubble from "../../message-bubble/MessageBubble";

function ChatDiscussion() {
	const chats = useContext(ChatContext);
	const waitingWingmanResponse = useContext(WingmanContext);
	const bottomRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [chats]);

	return (
		<div id="chatboard-discussion">
			{chats.map((chat, index) => (
				<Message
					key={index}
					message={chat.message}
					sentMessage={chat.sent}
					isLast={index + 1 === chats.length}
				/>
			))}
			{waitingWingmanResponse ? <MessageBubble /> : <></>}
			<div ref={bottomRef}></div>
		</div>
	);
}
export default ChatDiscussion;
