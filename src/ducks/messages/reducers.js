// import { combineReducers } from "redux";
import types from './types';
import splitMessage from '../../helpers/splitMessage';

const reducer = (state = [], action) => {
	switch (action.type) {
		case types.ADD:
			return [
				...state,
				...splitMessage(action.payload.text)
			]
		case types.CLEAR:
			return [];
		default:
			return state;
	}
}

export default reducer;
