import React, { useContext } from "react";
import { Paper } from "@material-ui/core";
import decode from "jwt-decode";
import MessageContext from "../../context/massage/MessageContext";

const MessageItems = ({ src, name, setList, data, setSelectID }) => {
	const { getDisplayedList } = useContext(MessageContext);
	const { _id } = decode(localStorage.getItem("token"));
	return (
		<Paper
			onClick={() => {
				setList(data);

				let id = "";
				if (data[0].receiver._id !== _id) {
					id = data[0].receiver._id;
				}
				if (data[0].sender._id !== _id) {
					id = data[0].sender._id;
				}
				getDisplayedList(_id, id);
				setSelectID(id);
			}}
			className="message-items"
		>
			<img src={src} alt="" className="message-image" />
			<div>
				<h4 className="heading">{name}</h4>
			</div>
		</Paper>
	);
};

export default MessageItems;
