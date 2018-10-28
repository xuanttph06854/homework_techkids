import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import { componentStyle, primaryColorBrown, primaryColorRed } from '../styles'
import OrderItem from '../components/OrderItem'
class TabOrder extends Component {
    state = {
    }

    totalPrice() {
        let tf = 0
        this.props.orders.forEach(item => { tf = tf + item.amount * item.unitPrice });
        console.log("total price: " + tf)
        return tf
    }
    renderTitle = () => <Text style={componentStyle.titleStyle}>Order</Text>
    renderOrders = () => (

        <FlatList
            style={{ flexGrow: 0 }}
            data={this.props.orders}
            renderItem={({ item }) => <OrderItem item={item} />}
            keyExtractor={item => item.name}
        />

    )
    renderTotal = () => (
        <View>
            <View
                style={{
                    marginTop: 10,
                    borderBottomColor: primaryColorBrown,
                    borderBottomWidth: 1,
                    marginHorizontal: 7
                }}
            />
            <View style={{ flexDirection: 'row' }}>
                <Text style={[componentStyle.titleStyle, { flex: 1 }]}>Total</Text>
                <Text style={componentStyle.titleStyle}>{this.totalPrice()}$</Text>
            </View>
        </View>

    )
    renderConfirm = () => <TouchableOpacity
        style={
            [{
                position: 'absolute',
                bottom: 16,
                alignSelf: 'center'
            }, componentStyle.button]
        }>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Confirm</Text>
    </TouchableOpacity>

    render() {
        return (

            <View style={componentStyle.screenContainer}>
                {this.renderTitle()}
                {this.renderOrders()}
                {this.renderTotal()}
                {this.renderConfirm()}
            </View>
        );
    }
}

const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps)(TabOrder);