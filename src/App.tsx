import React, { useState, MouseEvent } from "react";
import "./App.css";

import MainButton from "./components/main-button/MainButton";
import Chatboard from "./components/chatboard/Chatboard";
import { Collapse, Fade } from "react-bootstrap";

function App() {
	const [displayChat, setDisplayChat] = useState(false);

	const mainButtonOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setDisplayChat(!displayChat);
	};

	const closeButtonOnClick = (e: MouseEvent<HTMLButtonElement>): void => {
		e.preventDefault();
		setDisplayChat(false);
	};

	return (
		<div id="app-container">
			<Fade in={displayChat}>
				<div>
					<Chatboard onCloseClick={closeButtonOnClick} />
				</div>
			</Fade>
			<MainButton onClick={mainButtonOnClick} />
		</div>
	);
}

export default App;
