import { combineReducers } from 'redux';
import { nameReducer, markdownReducer } from './messageReducer';

/**
 * Usually when exporting combineReducers you give a key for each reducer,
 * followed by the reducer associated with it.
 */
export const rootReducer = combineReducers({
	docName: nameReducer,
	userMarkdown: markdownReducer
});
