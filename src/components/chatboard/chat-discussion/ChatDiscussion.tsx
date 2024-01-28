import { MutableRefObject, useContext, useEffect, useRef } from "react";

import Message from "../../message/Message";
import { ChatContext } from "../../../contexts/Contexts";

import "./ChatDiscussion.css";

function ChatDiscussion() {
	const chats = useContext(ChatContext);
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
			<div ref={bottomRef}></div>
		</div>
	);
}
export default ChatDiscussion;
