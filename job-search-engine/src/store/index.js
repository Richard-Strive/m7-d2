import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Fav from "../myReducers/Fav";
import ReducerList from "../myReducers/ReducerList";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  fav: {
    liked: [],
    showA: false,
  },
  jobData: { jobs: [] },
};

const hugeReducer = combineReducers({ fav: Fav, jobData: ReducerList });

export default function configureStore() {
  return createStore(
    hugeReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
