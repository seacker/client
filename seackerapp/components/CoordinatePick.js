import React, {useState, useEffect} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList, Modal, Button, ScrollView, ImageBackground} from 'react-native'
import {connect} from 'react-redux'
import {fetchSeat} from '../store/action'
import ImageViewer from 'react-native-image-zoom-viewer';

const CoordinatePick = (props) => {
    return (
        <ImageBackground source={require('../assets/seats.png')} style={{width: '100%', height: '100%'}}>
            <View style={{flex : 1, flexDirection: 'row', justifyContent : 'flex-start' , top : 70}}>
                <View style={{flex : 1, left : 120}}>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'white', width: 30, height: 30, top : 40}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : 40}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                    </View>
                    {/* 2 */}
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'white', width: 30, height: 30, top : 11}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : 11}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'white', width: 30, height: 30, top : -16}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : -16}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'white', width: 30, height: 30, top : -45}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : -45}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'white', width: 30, height: 30, top : -75}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : -75}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                    </View>
                </View>
                <View style={{flex : 1, left : 30}}>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'green', width: 30, height: 30, top : 40}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        {/* <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : 40}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image> */}
                    </View>
                    {/* 2 */}
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'green', width: 30, height: 30, top : 11}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        {/* <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : 40}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image> */}
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'green', width: 30, height: 30, top : -16}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        {/* <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : 40}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image> */}
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'green', width: 30, height: 30, top : -45}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        {/* <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : 40}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image> */}
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'green', width: 30, height: 30, top : -75}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        {/* <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : 40}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image> */}
                    </View>
                </View>
            </View>
            <View style={{flex : 1, flexDirection: 'row', top : 70}}>
                <View style={{flex : 1, left : 120}}>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'white', width: 30, height: 30, top : -80}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : -80}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                    </View>
                    {/* 2 */}
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'white', width: 30, height: 30, top : -110}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : -110}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'white', width: 30, height: 30, top : -140}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : -140}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'white', width: 30, height: 30, top : -170}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : -170}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'white', width: 30, height: 30, top : -200}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : -200}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                    </View>
                </View>
                <View style={{flex : 1, left : 30}}>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'green', width: 30, height: 30, top : -80}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        {/* <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : -50}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image> */}
                    </View>
                    {/* 2 */}
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'green', width: 30, height: 30, top : -110}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        {/* <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : -50}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image> */}
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'green', width: 30, height: 30, top : -140}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        {/* <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : -50}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image> */}
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'green', width: 30, height: 30, top : -170}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        {/* <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : -50}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image> */}
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        <Image 
                            style = {{backgroundColor: 'green', width: 30, height: 30, top : -200}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image>
                        {/* <Image 
                            style = {{backgroundColor: 'pink', width: 30, height: 30, top : 10}}
                            source={{ uri: 'http://pluspng.com/img-png/red-cross-png-red-cross-png-file-2000.png'}}
                        >
                        </Image> */}
                    </View>
                </View>
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
