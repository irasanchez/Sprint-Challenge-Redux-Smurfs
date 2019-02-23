import { combineReducers } from "redux";
import { friendsReducer } from "./friendsReducer";
import { singleSmurfReducer } from "./singleFriendReducer";

export default combineReducers({
  smurfsReducer,
  singleSmurfReducer
});
