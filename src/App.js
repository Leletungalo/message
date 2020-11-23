import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import AuthState from "./context/auth/AuthState";
import MessageState from "./context/massage/MessageState";

function App() {
	return (
		<Router>
			<AuthState>
				<MessageState>
					<div className="App">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/login" component={Login} />
						</Switch>
					</div>
				</MessageState>
			</AuthState>
		</Router>
	);
}

export default App;
