import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { componentStyle, primaryColorGreen } from '../styles'
import HistoryItem from '../components/HistoryItem';
class TabHistory extends Component {
    state = {}
    renderTitle = () => <Text style={componentStyle.titleStyle}>History</Text>
    renderGo_On = () => <Text style={styles.statusSty}>On-Going</Text>
    renderFinished = () => <Text style={styles.statusSty}>Finished</Text>
    render() {
        return (
            <View>
                {this.renderTitle()}
                {this.renderGo_On()}
                <HistoryItem />
                {this.renderFinished()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    statusSty: {
        fontSize: 18,
        fontWeight: 'bold',
        color: primaryColorGreen,
        marginHorizontal: 7,
        marginVertical: 10
    }
});
export default TabHistory;