import { WingmanMessage } from "../types/WingmanMessage";
import { Chat } from "../types/Chat";
import React from "react";

type ChatSetter = React.Dispatch<React.SetStateAction<Chat[]>>;

export const createSocket = (): WebSocket => {
	let api_path =
		process.env.NODE_ENV === "production"
			? "wss://api.s3l4h.com"
			: "ws://121.0.0.0:8080";

	let socket: WebSocket = new WebSocket(`${api_path}/ws/chat/lobby/`);
	return socket;
};

export class Client {
	socket: WebSocket;

	constructor(socket: WebSocket) {
		this.socket = socket;
	}

	send(message: string, chats: Chat[],
	setChats: React.Dispatch<React.SetStateAction<Chat[]>>) {
		if (message === "" || message === undefined) return;

		this.socket.send(JSON.stringify({ message: message }));
		const wingmanMessage: WingmanMessage = {
			message: message,
			option: null,
		};
		setChats(
			chats.concat([{ message: wingmanMessage, sent: true }]),
		);
	}
}
