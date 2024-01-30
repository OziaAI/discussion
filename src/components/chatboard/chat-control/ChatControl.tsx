import { FaPaperPlane } from "react-icons/fa";

import "./ChatControl.css";
import { FormEvent, MouseEvent, useContext, useState } from "react";
import { ControlContext, SendMessageContext } from "../../../contexts/Contexts";

import robot from "../../../images/logo32.png";

function ChatControl(props: { onChangeMessage: React.ChangeEventHandler }) {
	const onSend: Function = useContext(SendMessageContext);
	const [disableControl, setDisableControl] = useContext(ControlContext);
	const [messageEmpty, setMessageEmpty] = useState(true);
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		onSend();
	};
	const onClick = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		onSend();
	};

	const onChangeMessageWrapped = (
		e: React.ChangeEvent<HTMLInputElement>,
	): void => {
		if (e.target.value === "") setMessageEmpty(true);
		else if (messageEmpty)
			// and (implicitely) input contains a text
			setMessageEmpty(false);
		props.onChangeMessage(e);
	};

	return (
		<div id="chatboard-control">
			<form
				autoComplete="off"
				onSubmit={onSubmit}
				className="chatboard-control-form"
			>
				<input
					autoComplete="false"
					type="text"
					placeholder={!disableControl ? "Your message" : ""}
					id="chatboard-input"
					onChange={onChangeMessageWrapped}
					disabled={disableControl}
				/>
				<button
					className="send-button"
					onClick={onClick}
					disabled={disableControl || messageEmpty}
				>
					<FaPaperPlane />
				</button>
			</form>
			<p className="powered-by-container">
				<span className="powered-by">Powered by</span>
				<img
					alt="logo of Ozia"
					src={robot}
					className={"logo-image"}
				></img>
				<strong>Ozia</strong>
			</p>
		</div>
	);
}

export default ChatControl;
