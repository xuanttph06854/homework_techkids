import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import {
    categoryShopping, categoryTodo, categoryPersonal,
    categoryBirthday, categoryEvent, calendarHighlight
} from '../styles'
import { connect } from 'react-redux';
import { pickCategory } from '../actions';
const category = [
    'To do', 'Personal', 'Shopping', 'Birthday', 'Event'
]

class PickCategory extends Component {
    renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.categoryStyle, { backgroundColor: this.chooseColor(item) }]}
            onPress={() => this.props.pickCategory(item)}
        // onPress={() => this.props.onPickCategory(item)}
        >
            <Text style={styles.textCategory}>{item}</Text>
        </TouchableOpacity>
    )
    chooseColor = (item) => {
        switch (item) {
            case 'To do': return categoryTodo
            case 'Personal': return categoryPersonal
            case 'Shopping': return categoryShopping
            case 'Birthday': return categoryBirthday
            case 'Event': return categoryEvent
        }
    }
    render() {
        return (
            <View style={{ marginStart: 20 }}>
                <FlatList
                    data={category}
                    renderItem={this.renderItem}
                    horizontal={true}
                    keyExtractor={(index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    categoryStyle: {
        height: 90,
        width: 90,
        borderRadius: 8,
        marginTop: 5,
        marginEnd: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCategory: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});
export default connect(null, { pickCategory })(PickCategory);