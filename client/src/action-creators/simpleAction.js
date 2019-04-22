export const ADD = 'ADD';
export const CHANGE = 'CHANGE';
export const CHANGENAME = 'CHANGENAME';

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

export const changeName = (name) => {
	return {
		type: CHANGENAME,
		name: name
	}
}