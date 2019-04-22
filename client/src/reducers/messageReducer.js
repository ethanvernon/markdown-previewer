import { ADD, CHANGE, CHANGENAME } from '../action-creators/simpleAction';

export const messageReducer = (state = ['hey'], action) => {
 switch (action.type) {
   case ADD:
     return [
       ...state,
       action.message
     ];
   default:
     return state;
 }
};

export const titleReducer = (state = {title: 'My title'}, action) => {
	switch (action.type) {
		case CHANGE:
			// don't mutate state here
			var newObject = {title: action.title};
			return Object.assign({}, state, newObject);
		default:
			return state;
	}
};

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