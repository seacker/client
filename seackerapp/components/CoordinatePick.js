import React, {useState, useEffect} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList, Modal, Button, ScrollView, ImageBackground} from 'react-native'
import {connect} from 'react-redux'
import {fetchSeat} from '../store/action'
import ImageViewer from 'react-native-image-zoom-viewer';

const CoordinatePick = (props) => {
    return (
        <ImageBackground source={require('../assets/seats.png')} style={{width: '100%', height: '100%'}}>
            <View>
                {/* <Text style={{ color: 'white', top: 110, left: 268}}> A </Text> */}
                {/* 1 */}
                <Image 
                    style = {{ width: 40, height: 40, top: 97, left: 260}}
                    source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                >
                </Image>
                {/* 2 */}
                <Image 
                    style = {{ width: 40, height: 40, top: 110, left: 260}}
                    source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                >
                </Image>
                <Image 
                    style = {{ width: 40, height: 40, top: 132, left: 260}}
                    source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                >
                </Image>
                <Image 
                    style = {{ width: 40, height: 40, top: 146, left: 260}}
                    source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                >
                </Image>
                <Image 
                    style = {{ width: 40, height: 40, top: 167, left: 260}}
                    source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                >
                </Image>
                <Image 
                    style = {{ width: 40, height: 40, top: 230, left: 260}}
                    source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                >
                </Image>
                <Image 
                    style = {{ width: 40, height: 40, top: 243, left: 260}}
                    source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                >
                </Image>
                <Image 
                    style = {{ width: 40, height: 40, top: 265, left: 260}}
                    source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                >
                </Image>
                <Image 
                    style = {{ width: 40, height: 40, top: 280, left: 260}}
                    source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                >
                </Image>
                <Image 
                    style = {{ width: 40, height: 40, top: 301, left: 260}}
                    source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                >
                </Image>
            </View>
        </ImageBackground>
    )
}

const mapState = (state) => {
    return {
        ...state
    }
}

const mapDispatch = {
    fetchSeat
}

export default connect(mapState, mapDispatch)(CoordinatePick)
