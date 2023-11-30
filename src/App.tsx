import React, { useState, MouseEvent } from "react";
import "./App.css";

import MainButton from "./components/main-button/MainButton";
import Chatboard from "./components/chatboard/Chatboard";
import { Collapse, Fade } from "react-bootstrap";
import { Client, createSocket } from "./client/Client";
import { Chat } from "./types/Chat";
import { ChatContext, SendMessageContext } from "./contexts/Contexts";
import { WingmanMessage } from "./types/WingmanMessage";

const socket: WebSocket = createSocket();

function App() {
	const [chats, setChats] = useState<Chat[]>([
		{
			message: {
				message: "Have I answered your questions properly ?",
				option: {
					acceptAction: {
						buttonText: "Yes",
						messageToSend: "Yes I am satisfied.",
					},
					denyAction: {
						buttonText: "No",
						messageToSend: "No I am dissatisfied.",
					},
					embeddedUrl: null,
				},
			},
			sent: false,
		},
	]);
	const [message, setMessage] = useState("");
	const [displayChat, setDisplayChat] = useState(false);
	const [client, setClient] = useState<Client>(new Client(socket));
	const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setMessage(e.target.value);
	};

	const mainButtonOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setDisplayChat(!displayChat);
	};

	const closeButtonOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setDisplayChat(false);
	};

	const sendMessage = (msg: string | null = null) => {
		const input: HTMLInputElement = document.getElementById(
			"chatboard-input",
		) as HTMLInputElement;
		let cleansedChat = cleanse(chats);
		if (msg === null) client.send(message, cleansedChat, setChats);
		else client.send(msg, cleansedChat, setChats);
		setMessage("");
		input.value = "";
	};

	const cleanse = (chat: Chat[]): Chat[] => {
		if (chat.length == 0) return [];
		chat[chat.length - 1].message.option = null;
		return chat;
	};

	const onMessageReceived = function (
		this: WebSocket,
		e: MessageEvent<any>,
	): any {
		const data = JSON.parse(e.data.toString());
		const wingmanMessage: WingmanMessage = {
			message: data.message,
			option: null,
		};
		setChats(chats.concat([{ message: wingmanMessage, sent: false }]));
	};
	socket.onmessage = onMessageReceived;

	// The div containing the custom classes are mandatory for Fade and Collapse
	// transition to be triggered, see:
	// https://stackoverflow.com/questions/60510444/react-bootstrap-collapse-not-working-with-custom-components

	return (
		<div id="app-container">
			<ChatContext.Provider value={chats}>
				<SendMessageContext.Provider value={sendMessage}>
					<Fade in={displayChat}>
						<div>
							<Chatboard
								onCloseClick={closeButtonOnClick}
								onChangeMessage={onChangeMessage}
							/>
						</div>
					</Fade>
					<MainButton
						onClick={mainButtonOnClick}
						displayChat={displayChat}
					/>
				</SendMessageContext.Provider>
			</ChatContext.Provider>
		</div>
	);
}

export default App;
