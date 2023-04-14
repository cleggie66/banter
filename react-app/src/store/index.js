import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import channelsReducer from "./channel";
import workspacesReducer from "./workspace";
import messagesReducer from "./message";
import activeChannelReducer from "./activeChannel";
import usersReducer from "./users";

const rootReducer = combineReducers({
  session,
  channels: channelsReducer,
  workspaces: workspacesReducer,
  messages: messagesReducer,
  activeChannel: activeChannelReducer,
  users: usersReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
