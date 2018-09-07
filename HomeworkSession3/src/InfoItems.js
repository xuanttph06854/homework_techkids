import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native';

class InfoItems extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.timeStyle}>
                    <Text style={{ color: 'white' }}>{this.props.info.time}</Text>
                </View>
                <View style={styles.itemStyle}>
                    <Text style={styles.textStyle}>{this.props.info.country1}</Text>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: this.props.info.flags1 }}
                    />
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: this.props.info.flags2 }}
                    />
                    <Text style={styles.textStyle}>{this.props.info.country2}</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: 350,
        borderRadius: 20,
        backgroundColor: '#898989',
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        flex: 0.8,
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 10,
        color: 'white'
    },
    imageStyle: {
        flex: 0.5,
        // height: 30,
        // width: 20,
        margin: 10
    },
    timeStyle: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemStyle: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default InfoItems;