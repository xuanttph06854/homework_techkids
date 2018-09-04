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
import LogoMain from './component/LogoMain';
import IteamComponent from './component/IteamComponent';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.styleLogo}>
          <LogoMain />
        </View>

        <View style={styles.styleIteam}>
          <IteamComponent
            country1={'Vietnam'}
            flag1={'http://flagpedia.net/data/flags/normal/vn.png'}
            country2={'Korea'}
            flag2={'http://flagpedia.net/data/flags/normal/kr.png'}
          />
          <IteamComponent
            country1={'Japan'}
            flag1={'http://flagpedia.net/data/flags/mini/jp.png'}
            country2={'UAE'}
            flag2={'http://flagpedia.net/data/flags/mini/uz.png'}
          />
          <IteamComponent
            country1={'Germany'}
            flag1={'http://flagpedia.net/data/flags/normal/de.png'}
            country2={'France'}
            flag2={'http://flagpedia.net/data/flags/normal/fr.png'}
          />
          <IteamComponent
            country1={'Spain'}
            flag1={'http://flagpedia.net/data/flags/mini/es.png'}
            country2={'Brazil'}
            flag2={'http://flagpedia.net/data/flags/normal/br.png'}
          />
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFCC',
    flex: 1
  },

  styleLogo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  styleIteam: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});