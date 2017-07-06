import types from './types';

const addMessage = (text) => ({
	type: types.ADD
	, payload: {
		text
	}
});

const clearMessages = () => ({
	type: types.CLEAR
});


export default {
	addMessage,
	clearMessages,
}
