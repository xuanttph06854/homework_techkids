import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    Dimensions
} from 'react-native';

import CakeItemsComponent from './CakeItemsComponent';

class CakeDetailScreen extends Component {
    state = {}

    render() {
        const db = this.props.navigation.getParam('cic');
        return (
            <View style={styles.container}>
                <CakeItemsComponent cic={db} />
                <FlatList
                    style={styles.flatlistStyle}
                    data={db.title}
                    renderItem={({ item }) => <Text style={{
                        fontSize: 14,
                        fontFamily: 'verdana',
                        marginLeft: 20,
                        marginBottom: 5,
                        color: db.color
                    }}>{item}</Text>}
                    keyExtractor={(item) => { item }}
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatlistStyle: {
        backgroundColor: '#F8F8FF',
        marginTop: 5,
        borderRadius: 10,
        width: Dimensions.get('window').width - 20,
    }
});

export default CakeDetailScreen;