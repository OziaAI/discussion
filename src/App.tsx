import React, { useState, MouseEvent } from "react";
import "./App.css";

import MainButton from "./components/main-button/MainButton";
import Chatboard from "./components/chatboard/Chatboard";
import { Collapse, Fade } from "react-bootstrap";
import {WingmanMessage} from "./types/WingmanMessage";

const client = new WebSocket("ws://127.0.0.1:8000/ws/chat/lobby/");

function App() {
	const [displayChat, setDisplayChat] = useState(false);
	const [message, setMessage] = useState("");
	const [chats, setChats] = useState<{ message: WingmanMessage; sent: boolean }[]>(
		[],
	);

	const mainButtonOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setDisplayChat(!displayChat);
	};

	const closeButtonOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setDisplayChat(false);
	};

	const onMessageReceived = function (
		this: WebSocket,
		e: MessageEvent<any>,
	): any {
		const data = JSON.parse(e.data.toString());
                const wingmanMessage : WingmanMessage = { message: data.message, option: null };
		setChats(chats.concat([{ message: wingmanMessage, sent: false }]));
	};

	const sendMessage = (): void => {
		console.log("sendMessage has been called");
		if (message === "") return;
		client.send(
			JSON.stringify({
				message: message,
			}),
		);
                const wingmanMessage : WingmanMessage = { message: message, option: null };
		setChats(chats.concat([{ message: wingmanMessage, sent: true }]));
		setMessage("");
		let chatInput = document.getElementById(
			"chatboard-input",
		) as HTMLInputElement;
		chatInput.value = "";
	};

	const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>): void => {
		console.log(e.target.value);
		setMessage(e.target.value);
	};

	client.onmessage = onMessageReceived;
	// The div containing the custom classes are mandatory for Fade and Collapse
	// transition to be triggered, see:
	// https://stackoverflow.com/questions/60510444/react-bootstrap-collapse-not-working-with-custom-components

	return (
		<div id="app-container">
			<Fade in={displayChat}>
				<div>
					<Chatboard
						onCloseClick={closeButtonOnClick}
						chats={chats}
						onSend={sendMessage}
						onChangeMessage={onChangeMessage}
					/>
				</div>
			</Fade>
			<MainButton onClick={mainButtonOnClick} />
		</div>
	);
}

export default App;
