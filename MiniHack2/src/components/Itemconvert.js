import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { changeValue } from '../actions'


class Itemconvert extends Component {

    onPress = () => {
        this.props.changeValue({
            type: this.props.type,
            value: this.props.object.item.value,
        })
    }
    render() {
        //console.log(this.props.object)
        return (
            <View style={{ flexDirection: 'row', }}>
                <View>
                    <TouchableOpacity
                        onPress={this.onPress}
                        style={[styles.container, { backgroundColor: this.props.object.item.color }]}
                    >
                        <Text>{this.props.object.item.name}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

})
const mapStateToPropts = ({ currentValue }) => ({ currentValue });
export default connect(mapStateToPropts, { changeValue })(Itemconvert)