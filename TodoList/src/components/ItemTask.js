import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
import { connect } from 'react-redux';
import { toggleTask, delTask } from '../actions'
import {
    categoryShopping, categoryTodo, categoryPersonal,
    categoryBirthday, categoryEvent, calendarHighlight
} from '../styles'
class ItemTask extends Component {
    state = {
        selectedDate: new Date(),
        taskDone: this.props.item.isDone
    }
    chooseColor = () => {
        switch (this.props.item.category) {
            case 'To do': return categoryTodo
            case 'Personal': return categoryPersonal
            case 'Shopping': return categoryShopping
            case 'Birthday': return categoryEvent
            case 'Event': return categoryBirthday
        }
    }
    deleteTask = () => {
        this.props.delTask({
            dayId: this.props.dayId,
            taskId: this.props.item.id
        })
    }
    render() {
        return (
            <View style={styles.cbStyle}>
                <RoundCheckbox
                    checked={this.state.taskDone}
                    onValueChange={(newValue) => {
                        this.setState({ taskDone: newValue })
                        this.props.toggleTask(
                            {
                                dayId: this.props.dayId,
                                taskId: this.props.item.id
                            }
                        )
                        console.log(this.props.dayId)
                        console.log(this.props.item.id)
                    }}
                    backgroundColor={calendarHighlight}
                />
                <Text style={styles.timeStyle}>{this.props.item.time}</Text>
                <TouchableOpacity style={[styles.taskStyle, { backgroundColor: this.props.item.isDone ? 'gray' : this.chooseColor() }]}
                    onLongPress={this.deleteTask}
                >
                    <Text style={styles.doTextStyle}>{this.props.item.content}</Text>
                    <Text style={styles.tasktextStyle}>{this.props.item.category}</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    cbStyle: {
        marginLeft: 10,
        flexDirection: 'row',
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    timeStyle: {
        marginLeft: 25,
        flex: 2
    },
    taskStyle: {
        height: 60,
        width: Dimensions.get('window').width * 0.6,
        borderRadius: 10,
        justifyContent: 'center',
        flex: 5,
    },
    doTextStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 15
    },
    tasktextStyle: {
        fontSize: 12,
        color: 'white',
        marginLeft: 15
    }
});
export default connect(null, { toggleTask, delTask })(ItemTask);