import React, { useState, useEffect } from "react";
import decode from "jwt-decode";
import MessageItems from "./MessageItems";
import profile from "../../images/profile-min.JPG";
import "./Message.css";
import DisplayConvensation from "./DisplayConvensation";
import SendMessages from "./SendMessages";

const Messages = () => {
	const [receiver, setReceiver] = useState([]);
	const [list, setList] = useState([]);
	const { _id } = decode(localStorage.getItem("token"));
	const [selectedID, setSelectID] = useState("");
	useEffect(() => {
		const getMessage = async () => {
			try {
				const user = {
					userID: _id,
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
					"https://longa-money.herokuapp.com/api/messages/user",
					opotions
				);
				const jjj = await res.json();
				const lele = jjj.filter(element => {
					if (
						element.receiver._id === "5fb666fb1d5dab0017e098f0" ||
						element.sender._id === "5fb666fb1d5dab0017e098f0"
					) {
						return element;
					}
				});
				const nxinxi = jjj.filter(element => {
					if (
						element.receiver._id === "5fb1006b23d264001720d9ed" ||
						element.sender._id === "5fb1006b23d264001720d9ed"
					) {
						return element;
					}
				});
				const temp = [];
				temp.push(lele);
				temp.push(nxinxi);
				console.log(temp);
				setReceiver(temp);
			} catch (error) {
				console.error(error);
			}
		};
		getMessage();
	}, []);

	return (
		<div className="messages">
			<div className="header">
				<h4 className="message-header">Messages</h4>
			</div>
			<div className="message-list">
				{receiver &&
					receiver.map(element => {
						let name = "";
						if (element[0].receiver._id !== _id) {
							name = element[0].receiver.name;
						}
						if (element[0].sender._id !== _id) {
							name = element[0].sender.name;
						}
						return (
							<MessageItems
								name={name}
								data={element}
								setList={setList}
								src={profile}
								setSelectID={setSelectID}
							/>
						);
					})}
			</div>
			<div className="displays">
				<DisplayConvensation list={list} />
				<SendMessages selectedID={selectedID} />
			</div>
		</div>
	);
};

export default Messages;
