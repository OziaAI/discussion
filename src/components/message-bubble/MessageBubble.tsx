import "./MessageBubble.css";

import robot from "../../images/logo32.png";

function MessageBubble() {
	return (
		<div className="message-padder">
			<div className="message-container message-container-received">
				<div className="message-thought-container message-received message-bubble-fadein">
					<span className="message-thought-container">
						<div className="dot one"></div>
						<div className="dot two"></div>
						<div className="dot three"></div>
					</span>
				</div>
				<img
					src={robot}
					alt="profile pic"
					className="message-image message-image-them"
				></img>
			</div>
		</div>
	);

	/*return (
		<div className="chat-bubble">
			<div className="loading">
				<div className="dot one"></div>
				<div className="dot two"></div>
				<div className="dot three"></div>
			</div>
			<div className="tail"></div>
		</div>
	)*/
}

export default MessageBubble;
