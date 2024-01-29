import React, { MouseEventHandler, useState } from "react";
import "./MainButton.css";
import { FaComment, FaPen, FaRegTimesCircle } from "react-icons/fa";

function MainButton(props: {
	onClick: MouseEventHandler<HTMLButtonElement>;
	displayChat: boolean;
}) {
	const [buttonHovered, setButtonHovered] = useState(false);
	const [buttonLeft, setButtonLeft] = useState(false);
	const onHover = () => {
		setButtonHovered(true);
	};
	const onLeave = () => {
		setButtonLeft(true);
		setTimeout(() => {
			setButtonHovered(false);
			setButtonLeft(false);
		}, 500);
	};
	return (
		<button
			className="main-button"
			onClick={props.onClick}
			onMouseOver={onHover}
			onMouseLeave={onLeave}>
			{buttonHovered ? (
				<FaComment
					className={
						"main-button-icon icon-hovered " +
						(buttonLeft ? "icon-left" : "")
					}
				/>
			) : (
				<></>
			)}
			<FaComment className="main-button-icon icon-active" />
		</button>
	);
}
export default MainButton;
