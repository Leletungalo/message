import React from "react";
import { Paper } from "@material-ui/core";

const ConvesationItems = ({ src, title, align, text }) => {
	let leftAlign = align ? "right" : "";
	return (
		<Paper className={"convensation-item " + leftAlign}>
			<img src={src} className="conversation-image" alt="" />
			<div>
				<h4 className="heading">{title}</h4>
				<p className="conversation">{text}</p>
			</div>
		</Paper>
	);
};

export default ConvesationItems;
