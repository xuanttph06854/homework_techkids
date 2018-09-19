import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import { convertDate } from './Functions';

export default class ItemsComponent extends Component {
    state = {}

    render() {
        let wd;
        switch (this.props.weather.weather[0].main) {
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
            <View style={styles.overview}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>{convertDate(this.props.weather.dt)}</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>{Math.floor(this.props.weather.main.temp) - 273}</Text>
                    {wd}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    overview: {
        flexDirection: 'row',
        backgroundColor: '#2E2B3E',
        width: Dimensions.get('window').width - 35,
        height: 50,
        borderRadius: 5,
        marginTop: 12
    },
    imgStyle: {
        width: 32,
        height: 32,
        marginLeft: 8
    }
})