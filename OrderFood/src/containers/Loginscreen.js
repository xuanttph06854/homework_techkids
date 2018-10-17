import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native';
import { Button } from 'react-native-elements'
import { backgroundColor, primaryColorBrown, primaryColorRed, primaryColorGreen } from '../styles'
class LoginScreen extends Component {
    state = {}
    renderLogo = () => (
        <View style={styles.logoStyleView}>
            <Image
                style={styles.imgStyle}
                resizeMode='contain'
                source={require('../../imgs/logo_app.jpg')}
            />
        </View>

    )

    renderLogin = () => (
        <View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.loginImg}
                        //resizeMode='contain'
                        source={require('../../imgs/ic_email.png')}
                        keyboardType={'email-address'}
                    />
                    <Text style={styles.txtInput}>Email</Text>
                </View>
                <TextInput />
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        style={styles.loginImg}
                        //resizeMode='contain'
                        source={require('../../imgs/ic_password.png')}

                    />
                    <Text style={styles.txtInput}>Password</Text>
                </View>
                <TextInput
                    secureTextEntry={true}
                />
            </View>
        </View>
    )
    renderSignUp = () => (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.buttonStyle}>
                <Button
                    title='Sign Up'
                    buttonStyle={{
                        backgroundColor: primaryColorGreen,
                        width: 100,
                        height: 45,
                        borderWidth: 0,
                        borderRadius: 16,
                        marginTop: 60,
                        //marginBottom: 60
                    }}
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button
                    title='Sign Up'
                    buttonStyle={{
                        backgroundColor: primaryColorRed,
                        width: 100,
                        height: 45,
                        borderWidth: 0,
                        borderRadius: 16,
                        marginTop: 60,
                        //marginBottom: 60
                    }}
                />
            </View>
        </View>
    )
    renderError = () => (
        <Text style={{ color: 'red' }}>Error....</Text>
    )
    render() {
        return (
            <View style={styles.container}>
                {this.renderLogo()}
                {this.renderLogin()}
                {this.renderError()}
                {this.renderSignUp()}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        backgroundColor: backgroundColor,
    },
    logoStyleView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgStyle: {
        height: 250,
        width: 250,
    },
    loginStyleView: {
        backgroundColor: backgroundColor,
    },
    loginImg: {
        height: 16,
        width: 16,
        marginStart: 10
    },
    txtInput: {
        color: primaryColorBrown,
        marginStart: 10
    },
    buttonStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default LoginScreen;