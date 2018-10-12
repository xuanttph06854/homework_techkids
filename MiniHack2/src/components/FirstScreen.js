import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, FlatList, Dimensions } from 'react-native'


import Itemconvert from './Itemconvert.js';
import { connect } from 'react-redux'

class FirstScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            textLeft: '',
            textRight: '',
            changeLeft: true,
            changeRight: true
        }
    }
    changeValue = () => {

    }

    renderItem1 = (item) => <Itemconvert object={item} type='left' />
    renderItem2 = (item) => <Itemconvert object={item} type='right' />
    render() {
        data = this.props.currentData


        var resutltR = parseFloat(this.state.textLeft) * this.props.currentValue.left / this.props.currentValue.right
        var resutltL = parseFloat(this.state.textRight) * this.props.currentValue.right / this.props.currentValue.left


        return (
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TextInput
                        style={styles.txtInStyle}
                        onChangeText={(text) => this.setState({
                            textLeft: text === '' ? '' : text,
                            changeLeft: true,
                            changeRight: false
                        })}

                        value={this.state.changeRight && this.state.textRight === ''
                            ? '' : this.state.changeRight && this.state.textRight !== '' ? resutltL.toString()
                                : this.state.textLeft.toString()
                        }
                    />
                    <FlatList
                        data={data}
                        renderItem={this.renderItem1}
                        keyExtractor={(item) => item.value}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.txtInStyle}
                        onChangeText={(text) => this.setState({
                            textRight: text === '' ? '' : text,
                            changeRight: true,
                            changeLeft: false

                        })}
                        value={this.state.changeLeft && this.state.textLeft === ''
                            ? '' : this.state.changeLeft && this.state.textLeft !== '' ? resutltR.toString()
                                : this.state.textRight.toString()}
                    />
                    <FlatList
                        data={data}
                        renderItem={this.renderItem2}
                        keyExtractor={(item) => item.value}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    txtInStyle: {
        width: Dimensions.get('window').width / 2,
        // marginStart: 20,
        alignItems: 'center',
        marginTop: 20
    }
})
const mapStateToPropts = ({ currentValue, currentData }) => ({ currentValue, currentData });
export default connect(mapStateToPropts)(FirstScreen);