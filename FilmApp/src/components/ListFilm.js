import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import axios from 'axios';
import FilmItem from './FilmItem';
class ListFilm extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=4a11357a51f3f1a0095e513df59b6f40')
            //.then(res => console.log(res))
            .then(res => this.setState({ data: res.data.results }))
    }
    renderItem = ({ item }) =>
        <FilmItem film={item}
            navigation={this.props.navigation}
        />
    render() {
        return (
            <View style={{ backgroundColor: 'black' }}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        );
    }
}

export default ListFilm;