import { combineReducers } from "redux";
import auth from "./authReducer";
import chat from "./chatReducer";

export default combineReducers({
    auth,
    chat
})