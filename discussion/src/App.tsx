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
import Popover from "./components/popover/Popover";
import { getStorage, setStorage } from "./tools/storage_access";

let socket: WebSocket | null = createSocket();
let client: Client = new Client(socket);

function App(props: { className: string }) {
	const [chats, setChatsRaw] = useState<Chat[]>(
		JSON.parse(getStorage("chats", "[]")),
	);
	const [message, setMessage] = useState("");
	const [waitingWingmanResponse, setWaitingWingmanResponse] = useState(false);
	const [displayChat, setDisplayChatRaw] = useState(false);
	const [displayPopover, setDisplayPopover] = useState(
		getStorage("popover-displayed", "false") === "false",
	);
	const [closingAnimation, setClosingAnimation] = useState(false);
	const [disableControl, setDisableControl] = useState(false);
	const [disableSendButton, setDisableSendButton] = useState(true);

	const setChats = (newChats: Chat[]) => {
		setStorage("chats", JSON.stringify(newChats));
		setChatsRaw(newChats);
	};

	const setDisplayChat = (value: boolean) => {
		if (value) {
			// this means the chatboard has been open
			if (displayPopover) {
				// this means this is the first time the popover has been displayed
				// so we remember this information in the client's local storage
				// so that next time he faces the main button, no popover is visible
				setDisplayPopover(false);
				setStorage("popover-displayed", "true");
			}
		}
		setStorage("chat-displayed", value.toString());
		setDisplayChatRaw(value);
	};

	const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>): void => {
		let input_message: string = e.target.value;
		if (input_message === "") setDisableSendButton(true);
		else if (disableSendButton)
			// and implicitely input_message is not empty
			setDisableSendButton(false);
		setMessage(input_message);
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

		if ((message === "" || message === null) && msg == null) return;

		let cleansedChat = cleanse(chats);
		client.send(msg === null ? message : msg, cleansedChat, setChats);
		setMessage("");
		input.value = "";
		setDisableSendButton(true);
		setWaitingWingmanResponse(true);
	};

	const cleanse = (chat: Chat[]): Chat[] => {
		if (chat.length === 0) return [];
		let c: Chat = chat[chat.length - 1];
		if (c.message.option !== null) {
			c.message.option.acceptAction = null;
			c.message.option.denyAction = null;
		}
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
				(closingAnimation
					? "app-container-collapsed"
					: getStorage("chat-displayed", "false") === "true" &&
						  !displayChat
						? "app-container-already-opened"
						: displayChat
							? "app-container-expanded"
							: "") +
				" " +
				props.className
			}
		>
			{!displayChat ? (
				<Popover className={!displayPopover ? "popover-none" : ""}>
					Hello there! 👋
				</Popover>
			) : (
				<></>
			)}
			<ChatContext.Provider value={chats}>
				<ControlContext.Provider
					value={[
						disableControl,
						disableSendButton,
						controlDiscussion,
					]}
				>
					<DisplayContext.Provider
						value={[displayChat, controlDisplayChat]}
					>
						<SendMessageContext.Provider value={sendMessage}>
							<WingmanContext.Provider
								value={waitingWingmanResponse}
							>
								<Presenter
									active={
										displayChat ||
										getStorage(
											"chat-displayed",
											"false",
										) === "true"
									}
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
