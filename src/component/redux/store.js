import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import rootreducer from "./root-reducer";

import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
const SagaMiddleware = createSagaMiddleware();

const Middlewares = [SagaMiddleware];

if (process.env.NODE_ENV === "development") {
  Middlewares.push(logger);
}

const store = createStore(rootreducer, applyMiddleware(...Middlewares));

SagaMiddleware.run(rootSaga);

export default store;
