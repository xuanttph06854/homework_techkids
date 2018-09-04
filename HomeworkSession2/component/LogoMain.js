import React, { Component } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

export default class LogoMain extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Image
                    source={require('../image/wc.png')}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    main: {
        height: 250,
        width: 350,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});