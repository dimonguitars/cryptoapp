import { combineReducers } from "redux";
import { NavigationActions } from "react-navigation";
import coinReducer from "./coinreducers";

import { AppNavigator } from "../navigators/AppNavigator";

const firstAction = AppNavigator.router.getActionForPathAndParams("MainPage");

const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case "MainPage":
      nextState = AppNavigator.router.getStateForAction(state);
      break;
    case "Logout":
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "MainPage" }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

const AppReducer = combineReducers({
  nav,
  // auth,
  coinReducer
});

export default AppReducer;
