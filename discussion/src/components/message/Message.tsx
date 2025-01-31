import profile from "../../images/profile32.png";
import robot from "../../images/logo32.png";
import "./Message.css";

import {
	WingmanMessage,
	WingmanMessageOption,
} from "../../types/WingmanMessage";
import { useContext } from "react";
import { ControlContext, SendMessageContext } from "../../contexts/Contexts";

function Message(props: {
	message: WingmanMessage;
	sentMessage: boolean;
	isLast: boolean;
}) {
	const onSend: Function = useContext(SendMessageContext);
	// eslint-disable-next-line
	const [disableControl, disableSendButton, controlDiscussion] =
		useContext(ControlContext);
	const messageOption = () => {
		let option: WingmanMessageOption | null = props.message.option;
		if (option === null) return <></>;

		let acceptButton = <></>;
		let denyButton = <></>;

		if (option.acceptAction !== null)
			acceptButton = (
				<button
					className="button-option button-success"
					onClick={() => onSend(option?.acceptAction?.messageToSend)}
				>
					{option.acceptAction.buttonText}
				</button>
			);

		if (option.denyAction !== null)
			denyButton = (
				<button
					className="button-option button-failure"
					onClick={() => onSend(option?.denyAction?.messageToSend)}
				>
					{option.denyAction.buttonText}
				</button>
			);

		return (
			<div className="button-container">
				{acceptButton}
				{denyButton}
			</div>
		);
	};

	const displayEmbed = () => {
		let option: WingmanMessageOption | null = props.message.option;
		if (option === null) return <></>;
		if (option?.embeddedUrl !== null && option?.embeddedUrl !== "")
			return (
				<img
					className="embed-image message-received"
					src={option?.embeddedUrl}
					alt=""
				/>
			);

		return <></>;
	};

	return (
		<div className="message-padder">
			<div className="message-wrapped">
				<div
					className={
						"message-container " +
						(!props.message.option?.embeddedUrl
							? "message-container-padded "
							: "") +
						(!props.sentMessage
							? "message-container-received"
							: "message-container-sent")
					}
				>
					<div
						className={
							"message-text " +
							(props.sentMessage
								? "message-sent"
								: "message-received")
						}
					>
						<span className="message-content">
							{props.message.message}
						</span>
					</div>
					<img
						src={props.sentMessage ? profile : robot}
						alt="profile pic"
						className={
							"message-image " +
							(props.sentMessage
								? "message-image-me"
								: "message-image-them")
						}
					></img>
				</div>
				{displayEmbed()}
			</div>
			{messageOption()}
			{disableControl || props.message.context.disconnect ? (
				<div className="conversation-end-holder">
					{props.message.context.disconnect ? (
						<p id="conversation-end">End of conversation.</p>
					) : (
						<></>
					)}
					{disableControl && props.isLast ? (
						<button
							className="new-discussion"
							onClick={() => controlDiscussion(true)}
						>
							Start new conversation
						</button>
					) : (
						<></>
					)}
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

export default Message;
