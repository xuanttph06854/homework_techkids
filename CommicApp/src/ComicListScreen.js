import React, { Component } from 'react';
import {
    FlatList,
    ActivityIndicator,
    View
} from 'react-native';
import axios from 'axios';
import Comicitems from './Comicitems';
import ModalSelector from 'react-native-modal-selector';
//import { data } from './database.json';

export default class ComicListSrceen extends Component {
    state = {
        data: [],
        loading: true
    }

    componentDidMount() {
        this.loadList('Tất cả')
    }
    renderItem = ({ item }) => <Comicitems comic={item}
        navigation={this.props.navigation} />
    // renderItem = (data) => {
    //     console.log('data.....')
    //     console.log(data)
    //     return <Comicitems comic={data.item} />
    // }
    loadList(category) {
        //loading tao biểu tượng load
        this.setState({ loading: true })
        category === 'Tất cả'
            ?
            axios.get('https://api.techkids.vn/reactnative/api/comics')
                .then(res => this.setState({ data: res.data.comics, loading: false }))
                .catch(err => console.log(err)
                )
            :
            axios.get(`https://api.techkids.vn/reactnative/api/comics?category=${category}`)
                .then(res => this.setState({ data: res.data.comics.comics, loading: false }))
                .catch(err => console.log(err))
    }
    render() {
        return (
            <View>
                <ModalSelector
                    data={
                        [
                            { key: 0, label: 'Tất cả' },
                            { key: 1, label: 'Kinh tế - Chính trị' },
                            { key: 2, label: 'Con người - Tâm lý học - Hành vi' },
                            { key: 3, label: 'Văn hoá - Lịch sử - Xã hội' },
                            { key: 4, label: 'Sức khoẻ' }
                        ]
                    }
                    initValue='Tất cả'
                    onChange={(option) => this.loadList(option.label)}
                />
                {this.state.loading
                    ? <ActivityIndicator />
                    : <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        numColumns={2}
                        keyExtractor={(item) => item._id.toString()}
                    />
                }

            </View>

        );
    }
}