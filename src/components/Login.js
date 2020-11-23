import React, { useState } from "react";
import { Redirect } from "react-router-dom";
const Login = () => {
	const [logIn, setlogIn] = useState(false);
	const login = async e => {
		e.preventDefault();
		const email = e.target["email"].value;
		const password = e.target["password"].value;

		if ((email !== "", password !== "")) {
			const user = {
				email: "ngalo.leletu@gmail.com",
				password: "123456789",
			};

			const opotions = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			};

			const res = await fetch(
				"https://longa-money.herokuapp.com/api/user/login",
				opotions
			);
			const jjj = await res.json();
			localStorage.setItem("token", jjj.token);
			console.log(jjj);
			setlogIn(true);
		}
	};
	if (logIn) return <Redirect to="/" />;
	return (
		<div className="login">
			<form onSubmit={login} className="myform">
				<input type="text" placeholder="Email" name="email" />
				<input type="text" placeholder="Password" name="password" />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default Login;
/*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIxMDA2YjIzZDI2NDAwMTcyMGQ5ZWQiLCJlbWFpbCI6Im54aW54dTk3QGdtYWlsLmNvbSIsImlhdCI6MTYwNjEyNjY5MiwiZXhwIjoxNjA2MTMwMjkyfQ.LUBtLqJDgsOArSAYgFESjKNlmBT0P9B2mHdyrraCLE8 */
