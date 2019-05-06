import axios from "axios";

export const CHANGENAME = 'CHANGENAME';
export const CHANGEMARKDOWN = 'CHANGEMARKDOWN';
export const PUT_MARKDOWN_SUCCESS = 'PUT_MARKDOWN_SUCCESS';
export const PUT_MARKDOWN_FAILURE = 'PUT_MARKDOWN_FAILURE';
export const PUT_MARKDOWN_STARTED = 'PUT_MARKDOWN_STARTED';

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

//tutorial from https://alligator.io/redux/redux-thunk/
export const putMarkdown = (markdown) => {
	return dispatch => {

		//first dispatch an immediate synchronous action to the store to indicate that we’ve started saving 
		dispatch(putMarkdownStarted());

		axios.post("/api/new-file", {
				markdown,
				completed: false
		})
		.then(res => {
			dispatch(putMarkdownSucess(res.data));
		})
		.catch(err => {
			dispatch(putMarkdownFailure(err.message));
		});
	};
};

const putMarkdownSucess = markdown => ({
	type: PUT_MARKDOWN_SUCCESS,
	payload: {
		...markdown
	}
});

const putMarkdownStarted = () => ({
	type: PUT_MARKDOWN_STARTED
});

const putMarkdownFailure = error => ({
	type: PUT_MARKDOWN_FAILURE,
	payload: {
		error
	}
});