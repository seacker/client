import React, {useState} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native'
import {connect} from 'react-redux'
import {fetchSeat} from '../store/action'

const OneSeat = (props) => {
    const Seat = {
        Seat10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        Seat5: [1, 2, 3, 4, 5]
    }
    const formulaSeatB = {
        blockName: 'B',
        countSeat: [1, 2, 3, 4, 5, 6, 7]
    }
    const seatB = () => {
        
    }
    const formulaSeatC = {
        blockName: 'C',
        countSeat: [1, 2, 3, 4]
    }
    const formulaSeatD = {
        blockName: 'D',
        countSeat: [1, 2, 3, 4, 5, 6, 7, 8]
    }

    return (
        <View>
            <Text style={{ color: 'white'}}> Ini halaman one seat</Text>
            <Image
                style={{width: 100, height: 100}}
                // source={require('../assets/icon.png')}
                // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
            ></Image>
            <View style={{margin: 5, borderColor: 'pink', width: 400, height: 400}}>
                <Text style={{ color: 'white'}}>Block {formulaSeatB.blockName}</Text>
                <View>
                    <FlatList
                        horizontal='true'
                        // numColumns={2}
                        data={formulaSeatD.countSeat}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item, index}) => (
                            <TouchableOpacity>
                                <View style={{ margin: 3}}>
                                    <Image
                                        style={{ width: 25, height: 25, shadowColor: 'pink', shadowRadius: 10, shadowOpacity: 1.5}}
                                        // source={require('../assets/icon.png')}
                                        source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
                                    />
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}

// export default OneSeat
const mapState = (state) => {
    return {
        ...state
    }
}
const mapDispatch = { 
    fetchSeat
}

export default connect(mapState, mapDispatch)(OneSeat)