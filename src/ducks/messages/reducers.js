// import { combineReducers } from "redux";
import types from "./types";

const reducer = (state = [], action) => {
	switch (action.type) {
		case types.ADD:
			return [
				...state,
				action.payload.text
			]
		default:
			return state;
	}
}

export default reducer;
