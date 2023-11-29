import { createContext } from "react";
import { Chat } from "../types/Chat";
export const ChatContext = createContext<Chat[]>([]);
