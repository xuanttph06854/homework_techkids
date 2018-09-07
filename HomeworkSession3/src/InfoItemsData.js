import React, { Component } from 'react';
import {
    Text,
    View,
    StyleShee,
    FlatList
} from 'react-native';
import InfoItems from './InfoItems';
import { data } from './data.json';
class InfoItemsData extends Component {
    state = {}
    renderItem = ({ item }) => <InfoItems info={item} />
    render() {
        return (
            <FlatList
                data={data}
                renderItem={this.renderItem}
            />
        );
    }
}

export default InfoItemsData;