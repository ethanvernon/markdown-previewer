import axios from "axios";

export const CHANGENAME = 'CHANGENAME';
export const CHANGEMARKDOWN = 'CHANGEMARKDOWN';
export const CHANGEPASSKEY = 'CHANGEPASSKEY';
export const PUT_MARKDOWN_SUCCESS = 'PUT_MARKDOWN_SUCCESS';
export const PUT_MARKDOWN_FAILURE = 'PUT_MARKDOWN_FAILURE';
export const PUT_MARKDOWN_STARTED = 'PUT_MARKDOWN_STARTED';
export const GET_MARKDOWN_SUCCESS = 'GET_MARKDOWN_SUCCESS';
export const GET_MARKDOWN_FAILURE = 'GET_MARKDOWN_FAILURE';
export const GET_MARKDOWN_STARTED = 'GET_MARKDOWN_STARTED';

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

export const changePasskey = (passkey) => {
	return {
		type: CHANGEPASSKEY,
		passkey: passkey
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
			dispatch(changePasskey(res.data.passkey));
		})
		.catch(err => {
			dispatch(putMarkdownFailure(err.message));
		});
	};
};

const putMarkdownStarted = () => ({
	type: PUT_MARKDOWN_STARTED
});

const putMarkdownSucess = markdown => ({
	type: PUT_MARKDOWN_SUCCESS,
	payload: {
		...markdown
	}
});

const putMarkdownFailure = error => ({
	type: PUT_MARKDOWN_FAILURE,
	payload: {
		error
	}
});

export const getMarkdown = (passkey) => {
	return dispatch => {

		//first dispatch an immediate synchronous action to the store to indicate that we’ve started loading 
		dispatch(getMarkdownStarted());

		//builds query from user input on home page
		var getQuery='/api/get-file/?passkey=' + passkey;

		axios.get(getQuery)
		.then(res => {
			dispatch(getMarkdownSucess(res.data));
			console.log(res.data[0].markdown);
			dispatch(changeMarkdown(res.data[0].markdown));
		})
		.catch(err => {
			dispatch(getMarkdownFailure(err.message));
		});
	};
};

const getMarkdownStarted = () => ({
	type: GET_MARKDOWN_STARTED
});

const getMarkdownSucess = markdown => ({
	type: GET_MARKDOWN_SUCCESS,
	payload: {
		...markdown
	}
});

const getMarkdownFailure = error => ({
	type: GET_MARKDOWN_FAILURE,
	payload: {
		error
	}
});