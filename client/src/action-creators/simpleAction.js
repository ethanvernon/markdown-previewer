export const CHANGENAME = 'CHANGENAME';
export const CHANGEMARKDOWN = 'CHANGEMARKDOWN';

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