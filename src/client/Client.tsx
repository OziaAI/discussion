import { WingmanMessage } from "../types/WingmanMessage";
import { Chat, ChatSetter } from "../types/Chat";
import React from "react";

export const createSocket = (): WebSocket => {
	let api_path =
		process.env.NODE_ENV === "production"
			? "wss://api.s3l4h.com"
			: "ws://127.0.0.1:8000";

	let socket: WebSocket = new WebSocket(`${api_path}/ws/chat/lobby/`);
	return socket;
};

export class Client {
	socket: WebSocket;

	constructor(socket: WebSocket) {
		this.socket = socket;
	}

	send(message: string, chats: Chat[], setChats: ChatSetter) {
		if (message === "" || message === undefined) return;

		this.socket.send(JSON.stringify({ message: message }));
		const wingmanMessage: WingmanMessage = {
			message: message,
			option: null,
		};
		setChats(chats.concat([{ message: wingmanMessage, sent: true }]));
	}
}
