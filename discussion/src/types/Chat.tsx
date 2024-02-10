import { WingmanMessage } from "./WingmanMessage";

export type ChatSetter = any;

export type Chat = {
	message: WingmanMessage;
	sent: boolean;
};
