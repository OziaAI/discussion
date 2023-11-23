import { Container } from "react-bootstrap";

import Message from "../message/Message";

import "./Chatboard.css";

function ChatDiscussion() {
	return (
		<Container id="chatboard-discussion" className="mt-2">
			<Message text="Test" sentMessage={true} />
			<Message
				text="I am a multiline response coming from Wingman, your shopping Assistant ! Feel free to report any issue !"
				sentMessage={false}
			/>
		</Container>
	);
}
export default ChatDiscussion;
