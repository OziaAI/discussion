export type UserMessageAction = {
	buttonText: string;
	messageToSend: string;
};

export type WingmanMessageOption = {
	embeddedUrl: string | null;
	acceptAction: UserMessageAction | null;
	denyAction: UserMessageAction | null;
};

export type WingmanMessage = {
	message: string;
	option: WingmanMessageOption | null;
};
