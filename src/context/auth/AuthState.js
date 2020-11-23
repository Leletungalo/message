import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import Reducer from "./Reducer";
import { SET_USER } from "./Values";

const AuthState = props => {
	const incialState = {
		user: {
			name: "leletu",
			surname: "ngalo",
			email: "lelethungao@gmail.com",
		},
	};
	// eslint-disable-next-line
	const [state, disparch] = useReducer(incialState, Reducer);

	const setUser = user =>
		disparch({
			type: SET_USER,
			payload: user,
		});

	return (
		<AuthContext.Provider
			value={{
				user: incialState.user,
				setUser,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
