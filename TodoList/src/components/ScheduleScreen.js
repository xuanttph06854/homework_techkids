import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    SectionList
} from 'react-native';
import { connect } from 'react-redux';
import CalendarStrip from 'react-native-calendar-strip';
import { calendarBackground, calendarHighlight } from '../styles';
import ItemDate from '../components/ItemDate'
import ItemTask from './ItemTask';
import { data } from '../database.json';


class ScheduleScreen extends Component {
    state = {}
    renderItem = ({ item, section }) => <ItemTask item={item} dayId={section.id} />

    renderSectionHeader = ({ section: { date, data } }) => (
        data.length !== 0 && <ItemDate date={date} />
    )
    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <CalendarStrip
                    style={styles.calendar}
                    highlightDateNumberStyle={{ color: calendarHighlight }}
                    highlightDateNameStyle={{ color: calendarHighlight }}
                />
                {/* <ItemDate />
                <ItemTask /> */}
                <SectionList
                    renderItem={this.renderItem}
                    renderSectionHeader={this.renderSectionHeader}
                    sections={this.props.tasks}
                    keyExtractor={(item) => item.id}
                />
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
    }
});
const mapStateToProps = ({ tasks }) => ({ tasks })
export default connect(mapStateToProps)(ScheduleScreen);

