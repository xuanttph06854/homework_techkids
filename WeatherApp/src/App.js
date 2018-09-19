import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import FirstWeather from './FirstWeather';
import WeatherItem from './WeatherItem';
import { convertDate } from './Functions';

let textLocation = 'hanoi'
export default class App extends Component {

  state = {
    data: [],
    location: 'hanoi',
    loading: true
  }
  _onPressSearch = () => {
    this.setState({ location: textLocation })
  }
  render() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.location}&appid=b1b15e88fa797225412429c1c50c122a1`)
      .then((response) => {
        this.setState({ data: response.data, loading: false })

      })
      .catch((error) => {
        console.log(error);
      });
    return (
      <View style={styles.container}>

        {/* searching */}
        <View style={styles.searchStyle}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => { textLocation = text }}
            placeholder="Your city"
            underlineColorAndroid="white"
          />

          {/* button search */}
          <View style={{ flex: 0.5 }}></View>
          <TouchableOpacity
            style={styles.touchStyle}
            onPress={this._onPressSearch}
          ><Text>Search</Text></TouchableOpacity>
        </View>

        {this.state.loading ? <ActivityIndicator />
          : <View style={{ marginTop: 10 }}>
            {/* city */}
            <View style={styles.cityViewStyle}>
              <Text style={styles.cityNameStyle}>{this.state.data.city.name}</Text>
              <Text style={styles.cityTimeStyle}>{convertDate(this.state.data.list[0].dt)}</Text>
            </View>

            {/* image and temp */}
            <View style={{ flex: 7, marginTop: 25 }}>
              <FirstWeather weather={this.state.data.list} />
            </View>

            <View style={{ flex: 10 }}>
              <WeatherItem weathers={this.state.data.list} />
            </View>
          </View>
        }


      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#39354C',
    alignItems: 'center'
  },
  searchStyle: {
    flexDirection: "row",
    width: Dimensions.get('window').width - 35,
    marginTop: 10
  },
  inputStyle: {
    flex: 8,
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 7
  },
  touchStyle: {
    flex: 2,
    backgroundColor: 'white',
    color: 'black',
    fontWeight: '100',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cityViewStyle: {
    flexDirection: "column",
    flex: 3,
    marginTop: 10,
    alignItems: 'center'
  },
  cityNameStyle: {
    fontWeight: '300',
    fontSize: 40,
    color: 'white'
  },
  cityTimeStyle: {
    fontSize: 20,
    color: 'white'
  }
});