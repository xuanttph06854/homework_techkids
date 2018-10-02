import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Button
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import TimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';

import ItemDate from './ItemDate';
import PickCategory from './PickCategory';
import {
    categoryShopping, categoryTodo, categoryPersonal,
    categoryBirthday, categoryEvent, calendarHighlight, calendarBackground
} from '../styles';
import { addTask } from '../actions'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const category = [
    'To do', 'Personal', 'Shopping', 'Birthday', 'Event'
]
class AddTaskScreen extends Component {
    state = {
        selectedDate: this.exportDate(new Date()),
        isTimePickerVisible: false,
        selectedTime: new Date().toTimeString().substring(0, 5),
        currentCategory: 'To do',

        //number of day from 1/1/1970 to now
        dayId: Math.floor(new Date().getTime() / (24 * 60 * 60 * 1000)),

        //number of day from 1/1/1970 to now
        taksId: new Date().getTime(),

        textip: ''
    }
    exportDate(date) {
        return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    }

    onDateSelected = (date) => {
        this.setState({
            selectedDate: this.exportDate(date._d),
            dayId: Math.floor(date._d.getTime() / (24 * 60 * 60 * 1000))
        })


    }
    chooseColor = (item) => {
        switch (item) {
            case 'To do': return categoryTodo
            case 'Personal': return categoryPersonal
            case 'Shopping': return categoryShopping
            case 'Birthday': return categoryBirthday
            case 'Event': return categoryEvent
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({ addTask: this._handleAddTask });
    }

    _handleAddTask = () => {
        this.props.addTask({
            id: this.state.dayId,
            date: this.state.selectedDate,
            task: {
                id: this.state.taksId,
                category: this.props.currentCategory,
                content: this.state.textip,
                time: this.state.selectedTime,
                isDone: false
            }
        })
        this.props.navigation.navigate('Schedule')
    }
    render() {
        return (
            <View style={styles.container}>
                <CalendarStrip
                    style={styles.calendar}
                    highlightDateNumberStyle={{ color: calendarHighlight }}
                    highlightDateNameStyle={{ color: calendarHighlight }}
                    onDateSelected={this.onDateSelected}
                />
                <ItemDate date={this.state.selectedDate} />
                <Text style={styles.title}>Content</Text>
                <TextInput
                    style={{
                        width: Dimensions.get('window').width * 0.8,
                        borderRadius: 8,
                        // for ios
                        // shadowOpacity: 0.2,
                        // shadowRadius: 10,
                        // shadowColor: 'gray'

                        // for android
                        elevation: 5,
                        marginStart: 20,
                        marginTop: 10,
                        padding: 10
                    }}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    onChangeText={(textip) => this.setState({ textip })}
                />

                <Text style={styles.title}>Time</Text>
                <TouchableOpacity
                    onPress={() => this.setState({ isTimePickerVisible: true })}
                >
                    <Text style={styles.timestyle}>{this.state.selectedTime}</Text>
                </TouchableOpacity>
                <TimePicker
                    mode='time'
                    isVisible={this.state.isTimePickerVisible}
                    onConfirm={(time) => {
                        this.setState({
                            isTimePickerVisible: false,
                            selectedTime: time.toTimeString().substring(0, 5),
                            taskId: time.getTime()
                        })
                    }}
                    onCancel={() => this.setState({ isTimePickerVisible: false })}
                />
                <Text style={styles.title}>Category</Text>
                <PickCategory
                    onPickCategory={(currentCategory) => this.setState({
                        currentCategory
                    })}
                />
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginHorizontal: 20,
                    color: this.chooseColor(this.props.currentCategory)
                }}>{`this task belongs to ${this.props.currentCategory} category`}</Text>
                {/* <Button
                    title="press"
                    onPress={() => this.props.addTask({
                        id: 1,
                        date: "Friday 22 June 2018",
                        task: {
                            id: 1234,
                            category: "Personal",
                            content: "Go home",
                            time: "09:00"
                        }
                    })}
                /> */}
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    calendar: {
        height: 100,
        backgroundColor: calendarBackground,
        paddingTop: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
        marginStart: 20,
        marginTop: 15

    },
    timestyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: calendarHighlight,
        marginStart: 20,
        marginTop: 8
    },
    categoryStyle: {
        height: 90,
        width: 90,
        backgroundColor: 'red',
        borderRadius: 8,
        marginStart: 20,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCategory: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});
// connect state vao component
// tao 1 props cho AddTaskScreen co ten la category
// gia tri = store.currentCategory
// const mapStateToProps = (store) => ({ category: store.currentCategory })

// cach viet rut gon
const mapStateToProps = ({ currentCategory }) => ({ currentCategory })
export default connect(mapStateToProps, { addTask })(AddTaskScreen);