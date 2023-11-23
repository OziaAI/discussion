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

	// The div containing the custom classes are mandatory for Fade and Collapse
	// transition to be triggered, see:
	// https://stackoverflow.com/questions/60510444/react-bootstrap-collapse-not-working-with-custom-components

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
