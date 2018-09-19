import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

export default class FirstWeather extends Component {
    state = {
        temp: Math.floor(this.props.weather[0].main.temp) - 273,
        doC: true
    }
    _changeTemp = () => {
        this.state.doC ? this.setState({ temp: Math.floor(this.state.temp * 1.8 + 32), doC: false })
            : this.setState({ temp: Math.floor(this.state.temp / 1.8 - 32 / 1.8), doC: true })
    }

    render() {
        let wd;
        switch (this.props.weather[0].weather[0].main) {
            case 'Clear':
                wd = (
                    <Image
                        style={styles.imgStyle}
                        source={require(`../image/clear.png`)}
                    />
                )
                break;
            case 'Rain':
                wd = (
                    <Image
                        style={styles.imgStyle}
                        source={require(`../image/rain.png`)}
                    />
                )
                break;
            case 'Clouds':
                wd = (
                    <Image
                        style={styles.imgStyle}
                        source={require(`../image/clouds.png`)}
                    />
                )
                break;
            case 'Snow':
                wd = (
                    <Image
                        style={styles.imgStyle}
                        source={require(`../image/snow.png`)}
                    />
                )
                break;
        }
        return (
            <View style={styles.container}>

                {/* image and description */}
                <View style={styles.desImgStyle}>
                    {wd}
                    <Text style={{ fontSize: 30, color: 'white' }}>{this.props.weather[0].weather[0].description}</Text>
                </View>

                {/* temp */}
                <View style={styles.tempViewStyle}>

                    <Text style={styles.tempStyle}>{this.state.temp}</Text>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity style={styles.touchStyle}
                            onPress={this._changeTemp}
                            disabled={this.state.doC}
                            styleDisabled={{ color: 'white' }}
                        ><Text>°C</Text></TouchableOpacity>

                        <TouchableOpacity style={styles.touchStyle}
                            onPress={this._changeTemp}
                            disabled={!this.state.doC}
                            styleDisabled={{ color: 'white' }}
                        ><Text>°F</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgStyle: {
        width: 120,
        height: 120,
        alignItems: 'center'
    },
    desImgStyle: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    },
    tempViewStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: "center"
    },
    tempStyle: {
        fontWeight: '400',
        fontSize: 110,
        color: 'white',
        alignItems: 'center'
    },
    touchStyle: {
        backgroundColor: '#39354C',
        color: 'white',
        fontSize: 22,
        fontWeight: '100',
        marginRight: 5,
        marginBottom: 20
    }
})