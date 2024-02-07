export const setStorage = (key: string, value: string | null): void => {
	localStorage.setItem(key, value === null ? "" : value);
};

export const getStorage = (key: string, defaultValue: string = ""): string => {
	let value: string | null = localStorage.getItem(key);

	return value === null ? defaultValue : value;
};
