import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import { primaryColorBrown, primaryColorRed } from '../styles'
class HistoryItem extends Component {
    state = {}
    renderHistoryItem = () => (
        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.timeStyle}>Tue Agu 14 2018 10:11:54</Text>
            <Text style={styles.priceStyle}>179$</Text>
            <Icon
                name='angle-down'
                size={25}
                style={{
                    marginHorizontal: 7,
                    marginVertical: 10
                }}
            />
        </View>
    )
    render() {
        return (
            <View>
                {this.renderHistoryItem()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    timeStyle: {
        fontSize: 18,
        color: primaryColorBrown,
        marginHorizontal: 7,
        marginVertical: 10,
        flex: 1
    },
    priceStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: primaryColorRed,
        marginHorizontal: 7,
        marginVertical: 10,
    }
});
export default HistoryItem;