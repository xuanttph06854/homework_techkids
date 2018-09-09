import React, { Component } from 'react';
import {
    FlatList,
    Button,
    View
} from 'react-native';
import Comicitems from './Comicitems';
import { data } from './database.json';

export default class ComicListSrceen extends Component {
    state = {}

    renderItem = ({ item }) => <Comicitems comic={item}
        navigation={this.props.navigation} />
    // renderItem = (data) => {
    //     console.log('data.....')
    //     console.log(data)
    //     return <Comicitems comic={data.item} />
    // }
    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    numColumns={2}
                    keyExtractor={(item) => item.id.toString()}
                // keyExtractor={(item) => {
                //     console.log('key:..........')
                //     console.log(item)
                //     return item.id
                // }}
                />
                {/* <Button
                    title='Press me'
                    onPress={() => this.props.navigation.navigate('CommicDetailt')}
                /> */}
            </View>

        );
    }
}