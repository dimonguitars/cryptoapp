import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import coinReducer from './coinreducers';

import { AppNavigator } from '../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = AppNavigator.router.getActionForPathAndParams('MainPage');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');

const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  // tempNavState
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'MainPage':
      nextState = AppNavigator.router.getStateForAction(
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'MainPage' }),
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

// const initialAuthState = { isLoggedIn: false };
//
// function auth(state = initialAuthState, action) {
//   switch (action.type) {
//     case 'Login':
//       return { ...state, isLoggedIn: true };
//     case 'Logout':
//       return { ...state, isLoggedIn: false };
//     default:
//       return state;
//   }
// }

const AppReducer = combineReducers({
  nav,
  // auth,
  coinReducer
});

export default AppReducer;
