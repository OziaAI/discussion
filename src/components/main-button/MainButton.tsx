import React, { MouseEventHandler, useState } from "react";
import "./MainButton.css";
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
	return (
		<button
			className="main-button"
			onClick={props.onClick}
			onMouseOver={onHover}
			onMouseLeave={onLeave}>
			<FaComment />
		</button>
	);
}
export default MainButton;
