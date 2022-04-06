import { combineReducers, createStore } from "redux";
import profileReducer from './profile-reducer';
import dialogsReducer from './dialog-reducer';
import navbarReducer from './navbar-reducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsReducer,
  navbar: navbarReducer
})

let store = createStore(reducers);

window.store = store;

export default store 