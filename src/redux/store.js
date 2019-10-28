import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "./middlewares/logger";
import { mainReducer } from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  content: mainReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
