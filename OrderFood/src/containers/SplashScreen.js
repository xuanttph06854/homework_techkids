import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles'
class SplashScreen
    extends Component {
    state = {}
    renderLogo = () => (
        <Image
            style={styles.imgStyle}
            resizeMode='contain'
            source={require('../../imgs/logo_app.jpg')}
        />
    )

    render() {
        return (
            <View style={styles.container}>
                {this.renderLogo()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor,
    },
    logoStyleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgStyle: {
        height: 300,
        width: 300,
        flex: 1
    },
});
export default SplashScreen;