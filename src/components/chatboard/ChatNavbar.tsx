import logo from "../../images/logo32.png";
import { Navbar, Image } from "react-bootstrap";

import "./Chatboard.css";

function ChatNavbar() {
	return (
		<Navbar
			className="justify-content-between shadow rounded"
			bg="primary"
			data-bs-theme="dark"
		>
			<Navbar.Brand href="#" className="ms-3">
				<Image
					className="d-inline-block align-top me-1"
					roundedCircle
					src={logo}
				></Image>
				OziaAI
			</Navbar.Brand>
		</Navbar>
	);
}

export default ChatNavbar;
