import React, { MouseEventHandler, useState } from "react";
import "./MainButton.css";
import { Button } from "react-bootstrap";
import { FaComment, FaPen, FaRegTimesCircle } from "react-icons/fa";

function MainButton(props: {
	onClick: MouseEventHandler<HTMLButtonElement>;
	displayChat: boolean;
}) {
	const [buttonHovered, setButtonHovered] = useState(false);
	const onHover = () => {
		setButtonHovered(true);
	};
	const onLeave = () => {
		setButtonHovered(false);
	};

	const selectContentButton = () => {
		if (props.displayChat) return <FaRegTimesCircle />;
		if (buttonHovered) return <FaPen />;
		return <FaComment />;
	};
	return (
		<Button
			variant={props.displayChat ? "primary" : "outline-primary"}
			size="lg"
			onClick={props.onClick}
			onMouseOver={onHover}
			onMouseLeave={onLeave}>
			{selectContentButton()}
		</Button>
	);
}
export default MainButton;
