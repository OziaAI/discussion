import { createContext } from "react";
import { Chat } from "../types/Chat";
export const ChatContext = createContext<Chat[]>([]);
export const ControlContext = createContext<[boolean, any]>([false, () => {}]);
export const DisplayContext = createContext<[boolean, any]>([false, () => {}]);
export const WingmanContext = createContext<boolean>(false);
export const SendMessageContext = createContext<Function>(() => {});
