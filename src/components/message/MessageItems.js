import React from "react";
import { Paper } from "@material-ui/core";
import decode from "jwt-decode";
const MessageItems = ({ src, name, setList, data, setSelectID }) => {
	const { _id } = decode(localStorage.getItem("token"));
	return (
		<Paper className="message-items">
			<img src={src} alt="" className="message-image" />
			<div>
				<h4 className="heading">{name}</h4>
			</div>
			<button
				onClick={() => {
					setList(data);
					let id = "";
					if (data[0].receiver._id !== _id) {
						id = data[0].receiver._id;
					}
					if (data[0].sender._id !== _id) {
						id = data[0].sender._id;
					}

					setSelectID(id);
				}}
			>
				Click
			</button>
		</Paper>
	);
};

export default MessageItems;
