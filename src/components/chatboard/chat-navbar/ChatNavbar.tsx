import { useContext } from "react";
import logo from "../../../images/logo32.png";

import "./ChatNavbar.css";
import { FaAngleDoubleDown } from "react-icons/fa";
import { DisplayContext } from "../../../contexts/Contexts";

function ChatNavbar() {
	const [displayChat, setDisplayChat] = useContext(DisplayContext);
	return (
		<nav id="chat-navbar-container">
			<div id="chat-brand">
				<img id="chat-navbar-logo" src={logo} alt="Logo of merchant" />
				<h1 id="chat-navbar-merchant-name">Ozia</h1>
			</div>
			<button
				id="chat-navbar-button"
				onClick={() => setDisplayChat(false)}>
				<FaAngleDoubleDown />
			</button>
		</nav>
	);
}

export default ChatNavbar;
