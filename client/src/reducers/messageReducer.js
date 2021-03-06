import { 
  CHANGENAME, 
  CHANGEMARKDOWN, 
  PUT_MARKDOWN_SUCCESS, 
  PUT_MARKDOWN_FAILURE, 
  PUT_MARKDOWN_STARTED, 
  CHANGEPASSKEY,
  GET_MARKDOWN_STARTED,
  GET_MARKDOWN_SUCCESS,
  GET_MARKDOWN_FAILURE } from '../action-creators/simpleAction';

var defaultMarkdown = `# Welcome to my React/Redux Markdown Previewer!

## This is a sub-heading...
### I also used SASS
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...

And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export const nameReducer = (state = {docName: 'Untitled Document'}, action) => {
	switch (action.type) {
		case CHANGENAME:
			// don't mutate state here
			var newName = {docName: action.name};
			return Object.assign({}, state, newName);
		default:
			return state;
	}
};

export const markdownReducer = (state = {userMarkdown: defaultMarkdown}, action) => {
	switch (action.type) {
		case CHANGEMARKDOWN:
			// don't mutate state here
			var newMarkdown = {userMarkdown: action.markdown};
			return Object.assign({}, state, newMarkdown);
		default:
			return state;
	}
};

export const passkeyReducer = (state = {passkey: ''}, action) => {
  switch (action.type) {
    case CHANGEPASSKEY:
      if (action.passkey.length<13) {        
        var newPasskey = {passkey: action.passkey};        
        console.log(newPasskey);
        return Object.assign({}, state, newPasskey);
      }
    default:
      return state;
  }
};

export const putMarkdownReducer = (state = {loading: false, markdown: [{passkey:''}], error: null}, action) => {
  switch (action.type) {
    case PUT_MARKDOWN_STARTED:
      return {
        ...state,
        loading: true
      };
    case PUT_MARKDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        markdown: [...state.markdown, action.payload]
      };
    case PUT_MARKDOWN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}

export const getMarkdownReducer = (state = {loading: false, markdown: [{passkey:''}], error: null}, action) => {
  switch (action.type) {
    case GET_MARKDOWN_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_MARKDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        markdown: [...state.markdown, action.payload]
      };
    case GET_MARKDOWN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
}