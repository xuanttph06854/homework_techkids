import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList
} from 'react-native';

import CakeItemsComponent from './CakeItemsComponent';
import { data } from './data.json';

class CakeScreen extends Component {
    state = {}
    renderItem = ({ item }) => <CakeItemsComponent cic={item}
        navigation={this.props.navigation} />
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => { item }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default CakeScreen;