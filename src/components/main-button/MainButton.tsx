import React, { MouseEventHandler } from "react";
import "./MainButton.css";
import { Button } from "react-bootstrap";
import { FaComment } from "react-icons/fa";

function MainButton(props: { onClick: MouseEventHandler<HTMLButtonElement> }) {
	return (
		<Button variant="primary" size="lg" onClick={props.onClick}>
			<FaComment />
		</Button>
	);
}
export default MainButton;
