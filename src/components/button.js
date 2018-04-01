import React, { Component } from 'react'
import { View, Button, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux';

class ButtonGraph extends Component {
  constructor(props){
    super(props)
    this.week = this.week.bind(this)
    this.threemonth = this.threemonth.bind(this)
    this.year = this.year.bind(this)

    this.state = {
      dayNumbers:''
    };
  }

  

week(){
  this.setState({
    dayNumbers :'7'
  })

}

threemonth(){
  this.setState({
    dayNumbers :'90'
  })

}

year(){
  this.setState({
    dayNumbers :'365'
  })

}
  render(){
    return(
      <View style={styles.container} >
        <TouchableHighlight style={styles.button}>
          <Button
            onPress={this.week}
            title="7 DAYS"
            color="#171a1c"
          />
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Button
              onPress={this.threemonth}
              title="3 MONTH"
              color="#171a1c"
            />
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}>
              <Button
                onPress={this.year}
                title='YEAR'
                color="#171a1c"
              />
              </TouchableHighlight>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  button:{
    marginLeft:10,
    backgroundColor:'transparent'
  }

})

function mapStateToProps (state, ownProps) {
    return {
        dayNumbers: state.coinReducer.dayNumbers

    }
}
const ButtonGraphList = connect(mapStateToProps)(ButtonGraph);
export default ButtonGraphList;
