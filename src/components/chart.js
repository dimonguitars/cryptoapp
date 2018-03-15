import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight, Button
} from 'react-native';
import axios from 'axios'
import Chart from 'react-native-chartjs';
import { Content, Container} from 'native-base';
import ButtonGraphList from './button'
import { connect } from 'react-redux';




class ChartGraph extends Component {
  constructor(props) {
    super(props);
    this.week = this.week.bind(this)
    this.threemonth = this.threemonth.bind(this)
    this.year = this.year.bind(this)
    this.state = {

      chartConfiguration : false,
      displayCoin: this.props.displayByDays.symbol,
      dayNumbers: 365
    };

  }


componentDidMount(){

  let dataObj = {

      labels: [],
      datasets: [{
        label: '7 Days Avg',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1,
        height: 200,
      }]

  }
axios.get(`https://min-api.cryptocompare.com/data/histoday?fsym=${this.props.displayByDays.symbol}&tsym=USD&limit=${this.state.dayNumbers}`)
  .then(res => {
          var coinTime = res.data.Data
          Time = coinTime.map((Token) => {
            dataObj.labels.push(new Date(Token.time * 1000).toDateString())
            dataObj.datasets[0].data.push(Token.close)
    })
    let chartConfiguration = {
        type: 'bar',
        data: dataObj,
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }

    };
    this.setState({
      chartConfiguration: chartConfiguration
    })
  });
}

componentDidUpdate(prevprops, prevstate){
  console.log(prevstate.dayNumbers, this.state.dayNumbers)
 if(prevstate.dayNumbers != this.state.dayNumbers){
   console.log('updating')
   this.componentDidMount()
 }


}
week(){
  this.setState({
    dayNumbers: 7
  })
}

threemonth(){
  this.setState({
    dayNumbers : 90
  })

}

year(){
  this.setState({
    dayNumbers : 365
  })

}

render() {
  console.log(this.state.dayNumbers)
  return (
    <Container style={styles.chart}>
        {this.state.chartConfiguration &&
          <Chart chartConfiguration = {
            this.state.chartConfiguration
          }
          defaultFontSize={25}/>
        }
        <View style={styles.container} >
          <TouchableHighlight style={styles.button}>
            <Button
              onPress={() =>this.week(7)}
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
    </Container>
  );
}
}

const styles = StyleSheet.create({
  chart: {
    flex:1,
    justifyContent: 'center'
  },
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  button:{
    marginLeft:10,
    backgroundColor:'transparent'
  }
});

function mapStateToProps (state, ownProps) {
    return {
        dayNumbers: state.coinReducer.dayNumbers

    }
}
const ChartGraphList = connect(mapStateToProps)(ChartGraph);
export default ChartGraphList;
