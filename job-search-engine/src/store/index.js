import { createStore } from "redux";
import myReducer from "../myReducers";

const initialState = {
  liked: [],
  heartLike: false,
};

export default function configureStore() {
  return createStore(
    myReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
