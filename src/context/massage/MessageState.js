import React, { useReducer } from "react";
import MessageContext from "./MessageContext";
import MessageReducer from "./MessageReducer";
import { SET_DISPLAYED, SET_LOADING_DISPLAY } from "./Values";
const MessageState = props => {
	const incialState = {
		message: [],
		displayList: [],
		loadingDisplay: false,
	};

	const [state, disparch] = useReducer(MessageReducer, incialState);

	const getDisplayedList = async (id, friendID) => {
		try {
			disparch({
				type: SET_LOADING_DISPLAY,
			});
			console.log("lelethu");
			const user = {
				userID: id,
				friendID: friendID,
			};
			const opotions = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify(user),
			};

			const res = await fetch(
				"https://longa-money.herokuapp.com/api/messages/message/friend",
				opotions
			);
			const data = await res.json();
			console.log(data);
			disparch({
				type: SET_DISPLAYED,
				payload: data,
			});
		} catch (error) {
			console.error("diplayed", error);
		}
	};

	return (
		<MessageContext.Provider
			value={{
				message: state.message,
				loadingDisplay: state.loadingDisplay,
				getDisplayedList,
				displayList: state.displayList,
			}}
		>
			{props.children}
		</MessageContext.Provider>
	);
};

export default MessageState;
