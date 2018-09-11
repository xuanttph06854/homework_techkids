import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

class CakeItemsComponent extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity style={[styles.container, { backgroundColor: this.props.cic.color }]}
                onPress={() => this.props.navigation.navigate('DetailScreen', {
                    cic: this.props.cic
                })}>
                <View style={styles.imageStyle}>
                    <Image
                        style={{
                            height: 90,
                            width: 90
                        }}
                        source={{ uri: this.props.cic.photo }}
                    />
                </View>

                <Text style={styles.textStyle}>{this.props.cic.namecake}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: Dimensions.get('window').height / 4 - 20,
        width: Dimensions.get('window').width - 20,
        borderRadius: 10,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'

    },
    imageStyle: {
        flex: 1,
        margin: 30
    },
    textStyle: {
        flex: 0.7,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'verdana'
    }
});

export default CakeItemsComponent;