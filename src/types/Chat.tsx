import { WingmanMessage } from "./WingmanMessage";

export type ChatSetter = React.Dispatch<React.SetStateAction<Chat[]>>;

export type Chat = {
	message: WingmanMessage;
	sent: boolean;
};
