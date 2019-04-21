import { ADD, CHANGE } from '../action-creators/simpleAction';

export const messageReducer = (state = [], action) => {
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