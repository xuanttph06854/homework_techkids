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
import Orientation from 'react-native-orientation';

import ComicListScreen from './ComicListScreen';
import ComicDetailScreen from './ComicDetailScreen';


const Navigation = createStackNavigator({
  ComicList: {
    screen: ComicListScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Comics',
      }
    }
  },
  CommicDetailt: {
    screen: ComicDetailScreen

  }
});
export default class App extends Component {
  render() {
    Orientation.lockToPortrait()
    return (
      <View style={{ backgroundColor: 'rgb(230,230,230)', flex: 1 }}>
        <Navigation />
      </View>
    );
  }
}

