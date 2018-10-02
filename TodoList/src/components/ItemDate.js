import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

class ItemDate extends Component {
    state = {}
    render() {
        const day = this.props.date.substring(0, this.props.date.indexOf(" "))
        const date = this.props.date.substring(this.props.date.indexOf(" ") + 1)
        return (
            <View style={styles.container}>
                <Text style={styles.dayOfWeek}>{day}</Text>
                <Text style={styles.dateText}>{date}</Text>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginVertical: 5,
        alignItems: 'baseline'
    },
    dayOfWeek: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    dateText: {
        fontSize: 13,
        color: 'gray',
        paddingHorizontal: 20,
    }
});
export default ItemDate;