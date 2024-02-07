import { ReactNode } from "react";

import "./Popover.css";

function Popover(props: { children: ReactNode; className: string }) {
	return (
		<div className={"popover-container " + props.className}>
			{props.children}
		</div>
	);
}

export default Popover;
