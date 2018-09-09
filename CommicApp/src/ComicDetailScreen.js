import React, { Component } from 'react';
import {
    Text,
    View,
    StyleShee,
    FlatList,
    Image,
    Dimensions
} from 'react-native';

import { data } from './database.json';
import AutoScaleImage from './AutoScaleImage';

class ComicDetailScreen extends Component {
    state = {}

    render() {
        return (
            <View>
                {/* <Text>{this.props.navigation.getParam('comic').title}</Text> */}
                <FlatList
                    data={this.props.navigation.getParam('comic').photos}
                    renderItem={({ item }) => <AutoScaleImage
                        uriImage={item}
                    // resizeMode={'stretch'}
                    />}
                    keyExtractor={(item) => item}
                />
            </View>
        );
    }
}

export default ComicDetailScreen;