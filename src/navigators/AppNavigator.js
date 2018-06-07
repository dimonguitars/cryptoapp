import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import { addListener } from "../utils/redux";
import LoginScreen from "../components/LoginScreen";
import MainScreen from "../components/MainScreen";
import ProfileScreen from "../components/ProfileScreen";
import mainApp from "../components/mainApp";

export const AppNavigator = StackNavigator(
  {
    MainPage: { screen: mainApp },
    Details: { screen: ProfileScreen }
  },
  {
    initialRouteName: "Login"
  }
);

class AppWithNavigationState extends React.Component {
  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    nav: state.nav
  };
}

export default connect(mapStateToProps)(AppWithNavigationState);
