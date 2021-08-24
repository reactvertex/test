import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import combineReducers from "./reducers/rootReducer";
import { createLogger } from "redux-logger";
import rootSaga from "./saga/rootSaga";
const middleWares = [];
const sagaMiddleWare = createSagaMiddleware();

const logger = createLogger({
  predicate: () => process.env.NODE_ENV === "development",
  collapsed: true,
});
middleWares.push(sagaMiddleWare);
middleWares.push(logger);

const store = createStore(combineReducers, applyMiddleware(...middleWares));

export default store;

sagaMiddleWare.run(rootSaga);
