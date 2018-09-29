import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Slider
} from 'react-native';

class ColorSlider extends Component {
    state = {
        colorR: 0,
        colorG: 0,
        colorB: 0
    }

    render() {
        return (
            <View>
                <View style={[styles.colorMain, { backgroundColor: `rgb(${this.state.colorR},${this.state.colorG},${this.state.colorB})` }]}>
                </View>
                <View style={styles.index}>
                    <Text style={{ color: '#555555', fontWeight: 'bold' }}>
                        {`RGB(${this.state.colorR},${this.state.colorG},${this.state.colorB})`}</Text>
                </View>
                <View>
                    <Text style={{ left: this.state.colorR + 20, color: 'red' }}>{this.state.colorG}</Text>
                    <Slider
                        maximumValue={255}
                        step={1}
                        thumbTintColor='red'
                        maximumTrackTintColor='red'
                        minimumTrackTintColor='red'
                        onValueChange={(value) => this.setState({ colorR: value })}
                    />
                    <Text style={{ left: this.state.colorG + 20, color: 'green' }}>{this.state.colorG}</Text>
                    <Slider
                        maximumValue={255}
                        step={1}
                        thumbTintColor='green'
                        maximumTrackTintColor='green'
                        minimumTrackTintColor='green'
                        onValueChange={(value) => this.setState({ colorG: value })}
                    />
                    <Text style={{ left: this.state.colorB + 20, color: 'blue' }}>{this.state.colorB}</Text>
                    <Slider
                        maximumValue={255}
                        step={1}
                        thumbTintColor='blue'
                        maximumTrackTintColor='blue'
                        minimumTrackTintColor='blue'
                        onValueChange={(value) => this.setState({ colorB: value })}
                    />
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    colorMain: {
        height: Dimensions.get('window').height * 0.5,
        width: Dimensions.get('window').width
    },
    index: {
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width,
        backgroundColor: '#D7D7D7',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export default ColorSlider;