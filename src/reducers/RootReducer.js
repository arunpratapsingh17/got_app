import { combineReducers } from "redux";
import DataListReducer from "./DataListReducer";
const RootReducer = combineReducers({
    DataList:DataListReducer
})

export default RootReducer