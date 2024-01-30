import { ReactNode } from "react";

import "./Popover.css";

function Popover(props: { children: ReactNode }) {
	return <div className="popover-container">{props.children}</div>;
}

export default Popover;
