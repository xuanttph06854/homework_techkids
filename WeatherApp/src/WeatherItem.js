import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    FlatList
} from 'react-native'
import ItemsComponent from './ItemsComponent';


export default class WeatherItem extends Component {

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.weathers}
                    renderItem={({ item }) => <ItemsComponent weather={item} />}
                    keyExtractor={(item, index) => item.dt.toString()}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})