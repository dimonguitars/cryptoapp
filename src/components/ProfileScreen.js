import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { List, Left, ListItem, Right, Body, Container, Content} from 'native-base';
import { NavigationActions } from 'react-navigation';


class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
    title: (navigation.state.params.title).toUpperCase()
  }
  };

  constructor (props){
  super(props)
  }


  render(){
    console.log(props)
    let coinData = this.props.navigation.state.params.coindetails
    console.log(coinData)
    return(
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text style= {styles.center}>Prices</Text>
            </ListItem>
            <ListItem>
              <Left><Text>Current USD price</Text></Left>
              <Right><Text>{coinData.price_usd} $</Text></Right>
            </ListItem>
            <ListItem>
              <Left><Text>Current BTC price</Text></Left>
              <Right><Text>{coinData.price_btc}</Text></Right>
            </ListItem>
            <ListItem itemDivider>
              <Text style= {styles.center}>General Information</Text>
            </ListItem>
            <ListItem >
              <Left><Text>Name/Symbol</Text></Left>
              <Right><Text>{coinData.name}/ {coinData.symbol}</Text></Right>
            </ListItem>
            <ListItem >
              <Left><Text>Total Market Cap</Text></Left>
              <Right><Text>{coinData.market_cap_usd} USD</Text></Right>
            </ListItem>

              <ListItem>
                <Left><Text>Max available</Text></Left>
                <Right><Text>{coinData.max_supply} USD</Text></Right>
              </ListItem>

            <ListItem >
              <Left><Text>Coins in circulation</Text></Left>
              <Right><Text>{coinData.total_supply} USD</Text></Right>
            </ListItem>

            <ListItem itemDivider>
              <Text style= {styles.center}>Traiding Details</Text>
            </ListItem>
            <ListItem>
              <Left><Text>Changes in one hour</Text></Left>
              <Right><Text>{coinData.percent_change_1h} %</Text></Right>
            </ListItem>
            <ListItem>
              <Left><Text>Changes in 24 hours</Text></Left>
              <Right><Text>{coinData.percent_change_24h} %</Text></Right>
            </ListItem>
            <ListItem>
              <Left><Text>Changes in last 7 days</Text></Left>
              <Right><Text>{coinData.percent_change_7d} %</Text></Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
};



export default ProfileScreen;


const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    fontWeight: "bold"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
