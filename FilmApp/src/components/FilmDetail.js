import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux'
class FilmDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* film img */}
                <Image
                    style={{
                        height: 200,
                        width: Dimensions.get('window').width
                    }}
                    source={{ uri: `https://image.tmdb.org/t/p/w500${this.props.navigation.getParam('film').backdrop_path}` }}
                />

                {/* title */}
                <View style={{ justifyContent: 'center', alignItems: 'center', marginStart: 10 }}>
                    <Text style={{ color: 'yellow', fontFamily: 'cursive', fontWeight: 'bold', fontSize: 35 }}>
                        {this.props.navigation.getParam('film').title}</Text>
                </View>

                {/* content */}
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    marginStart: 20
                }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.txtStyle}>{this.props.navigation.getParam('film').overview}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', marginStart: 20 }}>
                        <View style={styles.viewIcon}>
                            <Image
                                style={{ height: 24, width: 24 }}
                                source={require('../image/calendaricon.jpg')}
                            />
                            <Text style={styles.txtStyle}>{this.props.navigation.getParam('film').release_date}</Text>
                        </View>

                        <View style={styles.viewIcon}>
                            <Image
                                style={{ height: 30, width: 30 }}
                                source={require('../image/iconstart.png')}
                            />
                            <Text style={styles.txtStyle}>{this.props.navigation.getParam('film').vote_average}</Text>
                        </View>
                        <View style={styles.viewIcon}>
                            <Image
                                style={{ height: 30, width: 30 }}
                                source={require('../image/votecount.png')}
                            />
                            <Text style={styles.txtStyle}>{this.props.navigation.getParam('film').vote_count}</Text>
                        </View>


                        <View style={styles.viewIcon}>
                            <Image
                                style={{ height: 30, width: 30 }}
                                source={require('../image/popularity.png')}
                            />
                            <Text style={styles.txtStyle}>{this.props.navigation.getParam('film').popularity}</Text>
                        </View>
                    </View>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderTopColor: '#D7D7D7',
    },
    viewIcon: {
        flexDirection: 'row',
        marginTop: 10,
        marginStart: 10
    },
    txtStyle: {
        color: 'white',
        marginStart: 20,
        fontFamily: 'cursive',
        marginTop: 5
    }
});

const mapStateToProps = ({ film }) => ({ film })
export default connect(mapStateToProps)(FilmDetail);