import types from './types';

const addMessage = (text) => ({
	type: types.ADD
	, payload: {
		text
	}
});


export default {
	addMessage
}
