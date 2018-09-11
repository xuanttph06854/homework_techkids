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
import { createStackNavigator } from 'react-navigation';

import CakeScreen from './CakeScreen';
import CakeDetailScreen from './CakeDetailScreen';

const Navigation = createStackNavigator({
  FirstScreen: {
    screen: CakeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Cakes',
      }
    }
  },
  DetailScreen: {
    screen: CakeDetailScreen
  }
});

// const Navigation = createStackNavigator({
//   FirstScreen: {
//     screen: CakeScreen,
//     navigationOptions: ({ navigation }) => {
//       return {
//         title: 'Cakes',
//       }
//     }
//   },
//   DetailtScreen: {
//     screen: CakeDetailScreen

//   }
// });
export default class App extends Component {
  render() {
    // Orientation.lockToPortrait()
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

