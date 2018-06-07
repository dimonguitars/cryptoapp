import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { List, Left, ListItem, Right, Body, Container, Content} from 'native-base';
import { NavigationActions } from 'react-navigation';
import ChartGraphList from './chart'



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
    let coinData = this.props.navigation.state.params.coindetails;
    const { container, category, generalInfo } = styles;
    return(
            <View style={container}>
              <ChartGraphList
              displayByDays={coinData}
              style={styles.graphStyle}
            />
              <Container >
                <Content >
                  <List>
                    <ListItem itemDivider style={styles.category}>
                      <Text style={category}>Prices</Text>
                    </ListItem>
                    <ListItem>
                      <Left><Text>Current USD price</Text></Left>
                      <Right><Text>${coinData.price_usd}</Text></Right>
                    </ListItem>
                    <ListItem style={{flexDirection: 'row', justifyContent:'space-between'}}>
                      <Text>Current BTC price</Text>
                      <Text>{coinData.price_btc}</Text>
                    </ListItem>
                    <ListItem itemDivider style={styles.category}>
                      <Text style={category}>General Information</Text>
                    </ListItem>
                    <ListItem >
                      <Left style={{flexDirection: 'column', justifyContent:'flex-start'}}>
                        <Text>Name</Text>
                        <Text>Symbol</Text>
                      </Left>
                      <Right>
                        <Text style={{marginLeft:5}}>
                        {coinData.name}
                      </Text>
                      <Text>
                        {coinData.symbol}
                      </Text>
                    </Right>
                    </ListItem>
                    <ListItem style={generalInfo}>
                      <Text>Total Market Cap</Text>
                      <Text>${coinData.market_cap_usd} USD</Text>
                    </ListItem>

                      <ListItem style={generalInfo}>
                      <Text>Max available</Text>
                      <Text>{coinData.max_supply}</Text>
                      </ListItem>

                    <ListItem style={generalInfo}>
                    <Text>Coins in circulation</Text>
                    <Text>{coinData.total_supply}</Text>
                    </ListItem>

                    <ListItem itemDivider style={category}>
                      <Text style={category}>Traiding Details</Text>
                    </ListItem>
                    <ListItem>
                      <Left><Text>Changes in one hour</Text></Left>
                      <Right><Text style={coinData.percent_change_1h < 0 ? styles.priceDown:styles.priceUp}>{coinData.percent_change_1h} %</Text></Right>
                    </ListItem>
                    <ListItem>
                      <Left><Text>Changes in 24 hours</Text></Left>
                      <Right><Text style={coinData.percent_change_24h < 0 ? styles.priceDown:styles.priceUp}> {coinData.percent_change_24h}%</Text></Right>
                    </ListItem>
                    <ListItem>
                      <Left><Text>Changes in last 7 days</Text></Left>
                      <Right><Text style={coinData.percent_change_7d < 0 ? styles.priceDown:styles.priceUp}>{coinData.percent_change_7d} %</Text></Right>
                    </ListItem>
                  </List>
                </Content>
              </Container>

            </View>
    )
  }
};

export default ProfileScreen;


const styles = StyleSheet.create({
  container:{
  flex:1
  },
  generalInfo:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  category: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
  },
  priceDown:{
    color: "#ed1717"
  },
  priceUp: {
    color: '#34b54c'
  },
  graphStyle: {

    justifyContent: 'center',
    paddingLeft: 0,
    marginLeft: 0
  }
});
