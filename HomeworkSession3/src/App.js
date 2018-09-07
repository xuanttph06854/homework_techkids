import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import InfoItemsData from './InfoItemsData';
import LogoMain from './LogoMain';
class App extends Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <LogoMain />
        </View>
        <View style={styles.iteam}>
          <InfoItemsData />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFBD1'
  },
  logo: {
    flex: 1
  },
  iteam: {
    flex: 1
  }
});

export default App;