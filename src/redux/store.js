import {composeWithDevTools} from 'redux-devtools-extension'
import contactsReducer from './contactsReducer';
import {createStore} from "redux";

const store = createStore(contactsReducer,composeWithDevTools());

export default store;