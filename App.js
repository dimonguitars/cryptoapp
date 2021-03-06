import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import AppReducer from "./src/reducers";
import AppWithNavigationState from "./src/navigators/AppNavigator";
import { middleware } from "./src/utils/redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  AppReducer,
  composeWithDevTools(applyMiddleware(middleware, thunk))
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("App", () => App);

export default App;
