import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';

class filmItem extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity style={styles.container}
                onPress={() => this.props.navigation.navigate('DetailScreen', {
                    film: this.props.film
                })}
            >
                <Image
                    style={styles.imgStyle}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${this.props.film.backdrop_path}` }}
                />
                <View style={styles.contentView}>
                    <Text style={styles.txtStyle}>{this.props.film.original_title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ height: 30, width: 30 }}
                            source={require('../image/iconstart.png')}
                        />
                        <Text style={styles.txtStyle}>{this.props.film.vote_average}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#D7D7D7',
        width: Dimensions.get('window').width,
        marginStart: 5,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgStyle: {
        flex: 1,
        height: 100,
        width: 80,
        marginStart: 5
    },
    contentView: {
        flexDirection: 'column',
        flex: 1,
        marginStart: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtStyle: {
        color: 'white',
        fontFamily: 'cursive',
        fontSize: 18
    }
});

export default filmItem;