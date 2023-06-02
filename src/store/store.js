import { combineReducers, applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { setFilms } from "./actions/films.actions";


const reducers = {
    films: setFilms,
}

const rootReducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools({});

const middlewares = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composeEnhancers(middlewares));

export default store;
