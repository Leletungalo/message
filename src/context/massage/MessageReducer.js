import { SET_DISPLAYED, SET_LOADING_DISPLAY } from "./Values";
export default (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_DISPLAYED:
			console.log(state);
			console.log(payload);
			return {
				...state,
				displayList: payload,
			};
		case SET_LOADING_DISPLAY:
			return {
				...state,
				loadingDisplay: true,
			};

		default:
			return {
				...state,
			};
	}
};
