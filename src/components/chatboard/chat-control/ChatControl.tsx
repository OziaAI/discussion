import { FaPaperPlane } from "react-icons/fa";

import "./ChatControl.css";
import { FormEvent, MouseEvent, useContext } from "react";
import { ControlContext, SendMessageContext } from "../../../contexts/Contexts";

import robot from "../../../images/logo32.png";

function ChatControl(props: { onChangeMessage: React.ChangeEventHandler }) {
	const onSend: Function = useContext(SendMessageContext);
	const [disableControl, setDisableControl] = useContext(ControlContext);
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSend();
	};
	const onClick = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		onSend();
	};

	return (
		<div id="chatboard-control">
			<form onSubmit={onSubmit} className="chatboard-control-form">
				<input
					type="text"
					placeholder={!disableControl ? "Your message" : ""}
					id="chatboard-input"
					onChange={props.onChangeMessage}
					disabled={disableControl}
				/>
				<button
					className="send-button"
					onClick={onClick}
					disabled={disableControl}>
					<FaPaperPlane />
				</button>
			</form>
			<p className="powered-by-container">
				<span className="powered-by">Powered by</span>
				<img
					alt="logo of Ozia"
					src={robot}
					className={"logo-image"}></img>
				<strong>Ozia</strong>
			</p>
		</div>
	);
}

export default ChatControl;
