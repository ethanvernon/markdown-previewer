export const ADD = 'ADD';
export const CHANGE = 'CHANGE';

export const addMessage = (message) => {
	return {
		type: ADD,
		message: message
	}
};

export const changeTitle = (title) => {
	return {
		type: CHANGE,
		title: title
	}
};