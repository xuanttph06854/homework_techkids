import React, { Component } from 'react';
import {
    Text,
    View,
    StyleShee,
    Image,
    Dimensions
} from 'react-native';


class AutoScaleImage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fixedW: Dimensions.get('window').width,
            fixedH: 0,
            unmounted: false
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        Image.getSize(this.props.uriImage, (realW, realH) => !this.setState.unmounted && this.setState({
            fixedH: this.state.fixedW * realH / realW
        }), () => console.log('setState done'))
    }
    componentWillUnmount() {
        this.setState({ unmounted: true })
    }

    // state = {
    //     fixedW: Dimensions.get('window').width,
    //     fixedH: 0
    // }

    render() {
        return (
            <Image
                style={{
                    width: this.state.fixedW,
                    height: this.state.fixedH
                }}
                source={{ uri: this.props.uriImage }}
            />
        );
    }
}


export default AutoScaleImage;