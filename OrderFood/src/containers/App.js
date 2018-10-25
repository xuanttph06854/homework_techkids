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
import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

import LoginScreen from './Loginscreen';
import SplashScreen from './SplashScreen'
import TabMenu from './TabMenu';
import TabOrder from './TabOrder';
import TabInfo from './TabInfo';
import TabHistory from './TabHistory';
import { primaryColorGreen } from '../styles'

const store = createStore(rootReducer)
const BottomTabNavigator = createBottomTabNavigator({
  Menu: TabMenu,
  Order: TabOrder,
  Info: TabInfo,
  History: TabHistory
},
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Menu') {
          iconName = `cutlery`;
        } else if (routeName === 'Order') {
          iconName = `shopping-cart`;
        } else if (routeName === 'History') {
          iconName = `history`;
        } else if (routeName === 'Info') {
          iconName = `info-circle`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <View>
          <Icon name={iconName} size={25} color={tintColor} />
          {
            routeName === 'Order' &&
            <View
              style={{
                position: 'absolute',
                height: 20,
                width: 20,
                backgroundColor: 'red',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                left: 15
              }}
            >
              <Text style={{ color: 'white', fontSize: 12 }}>49</Text>
            </View>
          }
        </View>;
      },
    }),
    tabBarOptions: {
      activeTintColor: primaryColorGreen,
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white'
      }
    },
  }

)

const SwitchNavigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  HomeScreen: BottomTabNavigator
})


export default class App extends Component {
  // componentDidMount() {
  //   console.log(firebase)
  // }

  render() {
    return (
      <Provider store={store} >
        <SwitchNavigation />
      </Provider>

      //<LoginScreen />
    );
  }
}
