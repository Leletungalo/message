import React from "react";
import decode from "jwt-decode";
import ConvesationItems from "./ConvesationItems";
import profile from "../../images/akho-min.jpeg";
const DisplayConvensation = ({ list }) => {
	const { _id } = decode(localStorage.getItem("token"));

	return (
		<div className="display-convensation">
			{list &&
				list.map(ele => {
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
