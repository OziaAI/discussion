import React, { ReactNode } from "react";

import "./Presenter.css";

function Presenter(props: {
	children: ReactNode;
	active: boolean;
	button: ReactNode;
}) {
	return (
		<div
			className={
				"presenter " +
				(props.active ? "presenter-expanded" : "presenter-collapsed")
			}>
			{props.active ? props.children : props.button}
		</div>
	);
}

export default Presenter;
