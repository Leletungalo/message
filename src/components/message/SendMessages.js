import React, { useState, useContext } from "react";
import decode from "jwt-decode";
import MessageContext from "../../context/massage/MessageContext";
import { IconButton, TextField, makeStyles } from "@material-ui/core";
import { SendRounded } from "@material-ui/icons";

const SendMessages = ({ selectedID }) => {
	const { getDisplayedList } = useContext(MessageContext);
	const classes = useStyles();
	const [message, setMessage] = useState("");
	const { _id } = decode(localStorage.getItem("token"));
	const sendMessage = async () => {
		if (message) {
			try {
				const user = {
					senderID: _id,
					text: message,
					receiverID: selectedID,
				};
				const opotions = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${localStorage.getItem(
							"token"
						)}`,
					},
					body: JSON.stringify(user),
				};

				const res = await fetch(
					"https://longa-money.herokuapp.com/api/messages/",
					opotions
				);

				const msg = await res.json();
				setMessage("");
				console.log(msg);
				getDisplayedList(_id, selectedID);
			} catch (error) {
				console.error("sendMessenge: ", error);
			}
		}
	};
	return (
		<div className={classes.root}>
			<TextField
				className={classes.message}
				label="Message"
				value={message}
				onChange={e => setMessage(e.target.value)}
			/>
			<IconButton className={classes.sendButton} onClick={sendMessage}>
				<SendRounded color="primary">Send</SendRounded>
			</IconButton>
		</div>
	);
};

const useStyles = makeStyles({
	root: {
		width: "100%",
		padding: "1em",
		position: "absolute",
		bottom: "0",
		left: "0",
	},
	message: {
		width: "80%",
	},
	sendButton: {
		width: "20%",
		borderRadius: "10px",
	},
});

export default SendMessages;
