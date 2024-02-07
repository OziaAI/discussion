import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { getStorage } from "./tools/storage_access";
import setColorTheme from "./tools/theme_definition";
import { ThemeColor } from "./types/ThemeColor";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);

const colorTheme: ThemeColor = getStorage(
	"colorTheme",
	"blue-gradient",
) as ThemeColor;
const chatPlacement = getStorage("chatPlacement", "right");

setColorTheme(colorTheme);

const resize = () => {
	// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty("--vh", `${vh}px`);
};

resize();

window.addEventListener("resize", () => {
	// We execute the same script as before
	resize();
});

root.render(
	<React.StrictMode>
		<App
			className={
				"app-placement-" + (chatPlacement === "left" ? "left" : "right")
			}
		/>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
