import React, { useReducer } from "react";
import MessageContext from "./MessageContext";
import MessageReducer from "./MessageReducer";
const MessageState = props => {
	const incialState = {
		message: [
			{
				id: 1,
				first_name: "Elita",
				email: "eweeden0@soundcloud.com",
				messageAt: "4/27/2020",
				messageTime: "15:01",
			},
			{
				id: 2,
				first_name: "Peria",
				email: "pcohane1@google.cn",
				messageAt: "8/16/2020",
				messageTime: "17:11",
			},
			{
				id: 3,
				first_name: "Jeffrey",
				email: "jshevlan2@typepad.com",
				messageAt: "10/27/2020",
				messageTime: "14:33",
			},
			{
				id: 4,
				first_name: "Violetta",
				email: "vaylott3@ebay.co.uk",
				messageAt: "3/29/2020",
				messageTime: "15:44",
			},
			{
				id: 5,
				first_name: "Delila",
				email: "dmeagher4@weibo.com",
				messageAt: "10/31/2020",
				messageTime: "9:26",
			},
		],
	};
	// eslint-disable-next-line
	const [state, disparch] = useReducer(incialState, MessageReducer);

	return (
		<MessageContext.Provider
			value={{
				message: incialState.message,
			}}
		>
			{props.children}
		</MessageContext.Provider>
	);
};

export default MessageState;
