import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import logger from "./Middlewares/Logger";
import rootReducers from "./Reducers/index";

const configureStore = (initialState) => {
  const middlewares = applyMiddleware(...[logger, thunkMiddleware]);

  const store = createStore(
    rootReducers,
    initialState,
    composeWithDevTools(middlewares)
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./Reducers", () => store.replaceReducer(rootReducers));
  }

  return store;
};

export default configureStore();
