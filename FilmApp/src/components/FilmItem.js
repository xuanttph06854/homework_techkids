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
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ height: 24, width: 24 }}
                            source={require('../image/iconstart.png')}
                        />
                        <Text style={styles.txtStyle}>{this.props.film.vote_average}</Text>
                    </View>
                    <Text style={styles.txtStyle}>Release date {this.props.film.release_date}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginStart: 5,
        height: 300,
        width: Dimensions.get('window').width / 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgStyle: {
        //   flex: 1,
        height: 250,
        width: 190,
        marginStart: 5
    },
    contentView: {
        // flexDirection: 'column',
        // flex: 1,
        marginTop: 10,
        marginStart: 10,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtStyle: {
        color: 'white',
        fontFamily: 'cursive',
        fontSize: 14,
        marginTop: 5
    }
});

export default filmItem;