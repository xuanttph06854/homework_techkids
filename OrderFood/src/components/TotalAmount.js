import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
class TotalAmount extends Component {
    state = {}

    countOrder = () => {
        let total = 0
        this.props.orders.forEach(item => total += item.amount)
        return total
    }
    render() {
        return (
            this.countOrder() == 0
                ? null
                : <View style={styles.totalAmount}>
                    <Text style={{ color: 'white', fontSize: 12 }}>{this.countOrder()}</Text>
                </View>
        );
    }
}
const styles = StyleSheet.create({
    totalAmount: {
        position: 'absolute',
        height: 20,
        width: 20,
        backgroundColor: 'red',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        left: 15
    }
});
const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps)(TotalAmount);