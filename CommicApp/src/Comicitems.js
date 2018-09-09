import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

export default class Comicitems extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => this.props.navigation.navigate('CommicDetailt', {
                    comic: this.props.comic
                })}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: this.props.comic.photos[0] }}
                />
                <Text style={styles.textStyle}
                    numberOfLine={2}>{this.props.comic.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 210,
        width: Dimensions.get('window').width / 2,
        padding: 10
    },
    imageStyle: {
        height: 150
    },
    textStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10
    }
});