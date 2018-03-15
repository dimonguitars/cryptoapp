import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import App from './mainApp';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class MainScreen extends Component {

  render(){
    return (
      <View style={styles.container}>
        <App />
        {/* <LoginStatusMessage /> */}
      </View>
    )
  }
};

MainScreen.navigationOptions = {
  title: 'Crypto Screen',
};

export default MainScreen;
