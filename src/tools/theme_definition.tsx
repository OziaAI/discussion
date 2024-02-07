import { ThemeColor } from "../types/ThemeColor";

function setColorTheme(themeColor: ThemeColor) {
	const isGradient: boolean = themeColor.includes("gradient");
	const isBlue: boolean = themeColor.includes("blue");
	const isRed: boolean = themeColor.includes("red");
	const isYellow: boolean = themeColor.includes("yellow");
	const isGreen: boolean = themeColor.includes("green");

	let firstColor: string = "";
	let secondColor: string = "";

	if (isBlue) {
		firstColor = "rgba(37, 145, 251, 0.98)";
		secondColor = "rgba(0, 7, 128, 1)";
	} else if (isRed) {
		firstColor = "rgba(245,175,25,1)";
		secondColor = "rgba(204,33,40,1)";
	} else if (isGreen) {
		firstColor = "rgb(138, 208, 47)";
		secondColor = "rgb(34, 126, 34)";
	} else if (isYellow) {
		firstColor = "rgb(241, 203, 39)";
		secondColor = "rgb(241, 137, 25)";
	}
	document.documentElement.style.setProperty(
		"--primary-color-2",
		`${firstColor}`,
	);
	document.documentElement.style.setProperty(
		"--primary-color-3",
		`${secondColor}`,
	);

	if (!isGradient) {
		document.documentElement.style.setProperty(
			"--primary-color-1",
			"var(--primary-color-2)",
		);
	}
}

export default setColorTheme;
