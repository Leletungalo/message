import React, { useContext } from "react";
import decode from "jwt-decode";
import ConvesationItems from "./ConvesationItems";
import profile from "../../images/profile-min.JPG";
import MessageContext from "../../context/massage/MessageContext";

const DisplayConvensation = () => {
	const { displayList } = useContext(MessageContext);
	const { _id } = decode(localStorage.getItem("token"));
	return (
		<div className="display-convensation">
			{displayList &&
				displayList.map(ele => {
					let right = false;
					if (ele.sender._id === _id) {
						right = true;
					}
					return (
						<ConvesationItems
							align={right}
							title={ele.sender.name}
							src={profile}
							text={ele.text}
						/>
					);
				})}
		</div>
	);
};

export default DisplayConvensation;
