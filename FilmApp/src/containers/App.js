/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import ListFilm from '../components/ListFilm'
import FilmDetail from '../components/FilmDetail'

const Navigation = createStackNavigator({
  firstScree: {
    screen: ListFilm,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: <Text style={{ fontFamily: 'cursive', fontSize: 35, fontWeight: 'bold', color: 'yellow', marginStart: 20 }}>
          List Film To Day</Text>,
        headerStyle: {
          backgroundColor: 'black'
        },
      }
    }
  },
  DetailScreen: {
    screen: FilmDetail,
    // navigationOptions: () => {
    //   return {
    //     headerTitle: <Text style={{ fontFamily: 'cursive', fontSize: 35, fontWeight: 'bold', color: 'yellow', marginStart: 20 }}>
    //       {this.props.navigation.getParam('film').title}</Text>,
    //     headerStyle: {
    //       backgroundColor: 'black'
    //     },
    //   }
    // }
  }
});

const store = createStore(rootReducer)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}


