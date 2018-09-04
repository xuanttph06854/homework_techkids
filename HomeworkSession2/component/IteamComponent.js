import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class IteamComponent extends Component {
    render() {
        return (
            <View style={styles.iteamStyle}>
                <Text style={styles.styleText}>{this.props.country1}</Text>
                <Image
                    style={styles.styleImage}
                    source={{ uri: this.props.flag1 }}
                />
                <Image
                    style={styles.styleImage}
                    source={{ uri: this.props.flag2 }}
                />
                <Text style={styles.styleText}>{this.props.country2}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iteamStyle: {
        backgroundColor: '#FF3333',
        borderRadius: 20,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginBottom: 10,
        flexDirection: 'row'
    },
    styleText: {
        flex: 1,
        fontSize: 14,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30
    },
    styleImage: {
        flex: 0.6,
        height: '40 %',
        width: '40 %',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30
    }
});