import { createStore } from "redux";
import postReducer from "./reducer/postReducer"; 

const store = createStore(postReducer);

export default store;