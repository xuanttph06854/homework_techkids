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
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import firebase from 'react-native-firebase'

import LoginScreen from './Loginscreen';
import SplashScreen from './SplashScreen'
import HomeScreen from './HomeScreen'

const SwitchNavigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  HomeScreen: HomeScreen
})

export default class App extends Component {
  // componentDidMount() {
  //   console.log(firebase)
  // }

  render() {
    return (
      <SwitchNavigation />
      //<LoginScreen />
    );
  }
}
