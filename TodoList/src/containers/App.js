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
  View,
  TouchableOpacity,
  Image,
  YellowBox
} from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import { createStackNavigator } from 'react-navigation';
import ScheduleScreen from '../components/ScheduleScreen';
import AddTaskScreen from '../components/AddTaskScreen';
import { calendarHighlight, gray } from '../styles';

const Navigation = createStackNavigator({
  Schedule: {
    screen: ScheduleScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Schedule',
      headerTitleStyle: {
        color: gray,
        fontSize: 22,
        fontWeight: 'bold'
      },
      headerRight:
        <TouchableOpacity
          onPress={() => navigation.navigate('AddTask')}
        >
          <Image
            style={{ height: 30, width: 30, marginEnd: 10 }}
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADPSURBVGhD7dZBCsIwEIXhgFtFvIDgAVx5GO8jXsWFQ8pE6UaT6KJdCq48iQfQCqmoFEppq1N5H8wqocwPpVQBAABIRES9OE5G+RiTDsJRtzDvp5Hxt3y08Uk46haESIMQaRAiDUKkQYg0CGnL4y+W+TCrOprt/D3EnYvulc16s5uEVeohssPXhb4/bhVWqQchjU1jIcd+9n6fqk7E/vKx0LXoXtlkz1mGVX4Dn19pECINQqRBiDQIkQYh0vxNCG3tWLOn5xi3CEcAAADQDqXu1SdrzcOGeTsAAAAASUVORK5CYII=' }}
          />
        </TouchableOpacity>,
      // remove bottom top
      headerStyle: {
        // ios
        borderBottomWidth: 0,
        // android
        elevation: 0
      }

    })
  },
  AddTask: {
    screen: AddTaskScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Add new task',
      headerTitleStyle: {
        color: gray,
        fontSize: 22,
        fontWeight: 'bold'
      },
      headerRight:
        <TouchableOpacity
          onPress={navigation.getParam('addTask')}
        >
          <Text style={{
            fontSize: 16,
            color: calendarHighlight,
            fontWeight: 'bold',
            marginEnd: 15
          }}>Done</Text>
        </TouchableOpacity>,

      headerLeft:
        <TouchableOpacity
          onPress={() => navigation.navigate('Schedule')}
        >
          <Image
            style={{ height: 20, width: 20, marginStart: 10 }}
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEKSURBVGhD7dMxagJBFMbxVbHyBhZpLTyFEMhF0tva7QkCaSwk2CQ2WUd2tDPu8wS5QBrrXECw0cksvkJlTev35PvBwLLzivmzswlRtTRN6/poUwihNsvlxeWyc15+Pr10dMuOY0QxnnkJJ+tDt224EhHiV3nTEXzl/1AVEa/Yxvuvto5h+y8iW6wedAwbI1AwAgUjUDACBSNQMAIFI1DcRUQpHvjVfMT7ctmKB9+fRrhcfk1FlLIsa5QHPw8pDvGqPeuIHc4XvRizvZOY1SNjEDEGFWNQMQYVY1AxBhVjUDEG1bUYl6+fdMSO6hiZ6LYtlzHOy0C37JnOpet8MYyrPxp9N/U10e0lyR+GznmkkPcJ3wAAAABJRU5ErkJggg==' }}
          />
        </TouchableOpacity>
    })
  }
});

const store = createStore(rootReducer)
export default class App extends Component {

  render() {
    // console.disableYellowBox = true
    return (
      // nhét con store vào trong App
      <Provider store={store}>
        <Navigation />
      </Provider>

    );
  }
}
