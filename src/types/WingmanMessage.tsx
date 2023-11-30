export type UserMessageAction = {
	buttonText: string;
	messageToSend: string;
};

export type WingmanMessageOption = {
	embeddedUrl: string | null;
	acceptAction: UserMessageAction | null;
	denyAction: UserMessageAction | null;
};

export type WingmanMessageContext = {
	disconnect: boolean;
};

export type WingmanMessage = {
	message: string;
	context: WingmanMessageContext;
	option: WingmanMessageOption | null;
};
