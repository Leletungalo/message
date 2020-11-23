import React from "react";
import Messages from "./message/Messages";
import "../componentCSS/Home.css";

const Home = () => {
	return (
		<div className="home">
			<aside className="home-aside">
				<button className="aside-button">Home</button>
				<button className="aside-button">Feed</button>
				<button className="aside-button">Messages</button>
				<button className="aside-button">Wallet</button>
				<button className="aside-button">My jobs</button>
			</aside>
			<div className="right">
				<Messages />
			</div>
		</div>
	);
};

export default Home;
