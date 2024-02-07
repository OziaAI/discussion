import { WingmanMessage } from "../types/WingmanMessage";
import { Chat, ChatSetter } from "../types/Chat";

export const createSocket = (): WebSocket => {
	let api_path =
		process.env.REACT_APP_BACKEND_PATH !== undefined
			? process.env.REACT_APP_BACKEND_PATH
			: "ws://localhost:8000";

	let socket: WebSocket = new WebSocket(`${api_path}/ws/chat/lobby/`);
	return socket;
};

export class Client {
	socket: WebSocket | null;

	constructor(socket: WebSocket | null) {
		this.socket = socket;
	}

	send(message: string, chats: Chat[], setChats: ChatSetter) {
		if (this.socket === null) return;
		if (message === "" || message === undefined) return;

		this.socket.send(JSON.stringify({ message: message }));
		const wingmanMessage: WingmanMessage = {
			message: message,
			option: null,
			context: { disconnect: false },
		};
		setChats(chats.concat([{ message: wingmanMessage, sent: true }]));
	}
}
