import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { Container, Card, CardItem, Thumbnail, Header, Content, List, ListItem, Icon, Left, Right, Body, Item, Input} from 'native-base'
import { connect } from 'react-redux';
import * as actions from '../actions'
import searchAllcoins from '../actions'



class CryptoApp extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title:'CryptoTracker',
    }
  };


  constructor (props){
  super(props)
  this.coinDetails = this.coinDetails.bind(this)
  this.searchCoins = this.searchCoins.bind(this)
  }



  searchCoins(searchInput){
    this.props.searchCoins(searchInput)
  }
  coinDetails(item) {
    this.props.navigation.navigate('Details', {coindetails: item, title:item.id});
  }

  componentDidMount(){
  this.props.loadCoinData()
  }
  render(){
    let coinData = (this.props.onSearch.length == 0) ? this.props.coins.coinData : this.props.onSearch
    return(
      <Container >
            <View  style={{borderBottomWidth: 0}}>
              <Header searchBar rounded >
              <Item  >
                <Icon name="ios-search" />
                <Input placeholder="enter coin name" onChangeText={(text) => this.searchCoins(text)}/>
                <Icon name="ios-search" />
              </Item>
             </Header>
           </View>
        <Content>
           {
              this.props.coins.isFetching &&
              <View style={styles.activityIndicator}>
               <ActivityIndicator size ='large'/>
              </View>
          }

            <List style={styles.coinList}
                  dataArray={coinData}
                  renderRow={(item, index) =>
                  <ListItem style={styles.ListItem}
                    avatar key={index}
                    onPress={() => this.coinDetails(item)}>
                    <Left>
                      <Text style={styles.symbol}>{item.symbol}</Text>
                    </Left>
                    <Body>
                      <Text note>{item.id}</Text>
                    </Body>
                    <Right>
                      <Text>{item.price_usd}</Text>
                    </Right>
                    <Right>
                      <Text style={item.percent_change_24h < 0 ?
                        styles.percentChangeMinus : styles.percentChangePlus
                      }>{item.percent_change_24h}</Text>
                    </Right>
                  </ListItem>
            }>
            </List>

          </Content>
         </Container>
    )
  }
}


const styles = StyleSheet.create({

    activityIndicator: {
        alignItems:'center',
    },
    ListItem:{
      backgroundColor: "transparent",
    },
    coinList:{
        padding: 0
    },
    symbol: {
      padding: 0,
      fontWeight: "bold",
      marginLeft:5

    },
    coinsearch: {
      flex: 1,
      justifyContent: 'center',
      borderBottomWidth: 0
    },
    percentChangeMinus:{
      marginLeft: -10,
      color: "#e80b0b"
    },
    percentChangePlus:{
      marginLeft: -10,
      color: "#31c613"
    }
  })

  function mapStateToProps (state, ownProps) {
      return {
          coins: state.coinReducer,
          onSearch: state.coinReducer.allCoins
      }
  }


  function mapDispatchToProps (dispatch, ownProps) {

      return {
          loadCoinData: () => dispatch(actions.fetchAllCoinData()),
          searchCoins: (searchInput) => dispatch(searchAllcoins(searchInput))
      }
  }
  const App = connect(mapStateToProps, mapDispatchToProps)(CryptoApp);
  export default App;
