import React, { useState, MouseEvent } from "react";
import "./App.css";

import MainButton from "./components/main-button/MainButton";
import Presenter from "./components/presenter/Presenter";
import Chatboard from "./components/chatboard/Chatboard";
import { Client, createSocket } from "./client/Client";
import { Chat } from "./types/Chat";
import {
	ChatContext,
	ControlContext,
	DisplayContext,
	SendMessageContext,
	WingmanContext,
} from "./contexts/Contexts";
import { WingmanMessage } from "./types/WingmanMessage";

let socket: WebSocket | null = createSocket();
let client: Client = new Client(socket);

function App() {
	const [chats, setChats] = useState<Chat[]>([]);
	const [message, setMessage] = useState("");
	const [waitingWingmanResponse, setWaitingWingmanResponse] = useState(false);
	const [displayChat, setDisplayChat] = useState(false);
	const [closingAnimation, setClosingAnimation] = useState(false);
	const [disableControl, setDisableControl] = useState(false);

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

		if (message === "" || message === null) return;

		let cleansedChat = cleanse(chats);
		client.send(msg === null ? message : msg, cleansedChat, setChats);
		setMessage("");
		input.value = "";
		setWaitingWingmanResponse(true);
	};

	const cleanse = (chat: Chat[]): Chat[] => {
		if (chat.length === 0) return [];
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
			option: data.option || null,
			context: data.context,
		};
		setWaitingWingmanResponse(false);
		setChats(chats.concat([{ message: wingmanMessage, sent: false }]));
		if (wingmanMessage.context.disconnect) {
			setDisableControl(true);
			controlDiscussion(false);
		}
	};
	if (socket !== null) socket.onmessage = onMessageReceived;

	const controlDiscussion = (open: boolean) => {
		if (open) {
			socket = createSocket();
			client = new Client(socket);
			setDisableControl(false);
			setChats([]);
		} else {
			if (socket !== null) socket.close();
			socket = null;
			client = new Client(null);
		}
	};

	const controlDisplayChat = (value: boolean) => {
		if (value === true) {
			setDisplayChat(value);
			return;
		}

		setTimeout(() => {
			setDisplayChat(value);
			setClosingAnimation(false);
		}, 1000);
		setClosingAnimation(true);
	};

	// The div containing the custom classes are mandatory for Fade and Collapse
	// transition to be triggered, see:
	// https://stackoverflow.com/questions/60510444/react-bootstrap-collapse-not-working-with-custom-components
	return (
		<div
			id="app-container"
			className={
				closingAnimation
					? "app-container-collapsed"
					: displayChat
					? "app-container-expanded"
					: ""
			}
		>
			<ChatContext.Provider value={chats}>
				<ControlContext.Provider
					value={[disableControl, controlDiscussion]}
				>
					<DisplayContext.Provider
						value={[displayChat, controlDisplayChat]}
					>
						<SendMessageContext.Provider value={sendMessage}>
							<WingmanContext.Provider
								value={waitingWingmanResponse}
							>
								<Presenter
									active={displayChat}
									button={
										<MainButton
											onClick={mainButtonOnClick}
											displayChat={displayChat}
										/>
									}
								>
									<Chatboard
										onCloseClick={closeButtonOnClick}
										onChangeMessage={onChangeMessage}
									/>
								</Presenter>
							</WingmanContext.Provider>
						</SendMessageContext.Provider>
					</DisplayContext.Provider>
				</ControlContext.Provider>
			</ChatContext.Provider>
		</div>
	);
}

export default App;
