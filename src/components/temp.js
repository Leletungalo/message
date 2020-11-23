/*
const getMessage = () => {
		try {
			axios("https://longa-money.herokuapp.com/api/messages/user", {
				headers: {
					Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmIwNDMwNTYyMTkzNzAwMTczNjg4NTEiLCJlbWFpbCI6Im5nYWxvLmxlbGV0dUBnbWFpbC5jb20iLCJpYXQiOjE2MDU1NDIwNjMsImV4cCI6MTYwNTU0NTY2M30.94uHmQuq2vJqZGm4lvSX3AeYnYaR0wsC5ESbgxvy7yM`,
				},
				data: { userID: "5fb043056219370017368851" },
			}).then(res => {
				console.log(res.data);
			});
		} catch (error) {
			console.error(error);
		}
		the working geetMessages
		const getMessage = async () => {
		try {
			const user = {
				userID: "5fb043056219370017368851",
			};
			const opotions = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify(user),
			};

			const res = await fetch(
				"https://longa-money.herokuapp.com/api/messages/user",
				opotions
			);

			const jjj = await res.json();
			console.log(jjj);
		} catch (error) {
			console.error(error);
		}
	};

	const { email, _id } = decode(localStorage.getItem("token"));
	console.log(email, _id); 
	};
*/
