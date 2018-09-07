import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

class LogoMain extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../image/wc.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    logo: {
        marginTop: 5
    }
});

export default LogoMain;