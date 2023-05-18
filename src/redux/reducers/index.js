import { combineReducers } from "redux";
import { UserReducer } from "./userReducer";

const reducer = combineReducers({
    loginUser: UserReducer
})
export default reducer