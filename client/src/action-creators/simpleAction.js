export const ADD = 'ADD';
export const CHANGE = 'CHANGE';
export const CHANGENAME = 'CHANGENAME';
export const CHANGEMARKDOWN = 'CHANGEMARKDOWN';
export const UPDATE = 'UPDATE';

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

export const changeMarkdown = (markdown) => {
	return {
		type: CHANGEMARKDOWN,
		markdown: markdown
	}
}

export const updateOutputBox = (markdownOuput) => {
	return {
		type: UPDATE,
		markdownOuput: markdownOuput
	}
}