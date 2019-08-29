import React, {useState, useEffect} from 'react'
import { View, Text, ImageBackground, Button, FlatList, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import {connect} from 'react-redux'
import {changeSection} from '../store/action'

import OneSeat from '../components/OneSeat'
import MeetingRoom from '../components/MeetingRoom'
import Auditorium from '../components/Auditorium'

const Seat = (props) => {
    const [one, setone] = useState(false)
    const [meeting, setmeeting] = useState(false)
    const [auditorium, setauditorium] = useState(false)

    // props.navigation.state.params.type
    useEffect(() => {
        console.log('masuk use effect Seat')
        if(props.navigation.state.params.type === 'One'){
            console.log('set one yg di click')
            setone(true)
            setauditorium(false)
            setmeeting(false)
        }else if(props.navigation.state.params.type === 'Meeting'){
            console.log('set meeting yg di click')
            setone(false)
            setauditorium(false)
            setmeeting(true)
        }else if(props.navigation.state.params.type === 'Auditorium'){
            console.log('set auditorium yg di click')
            setone(false)
            setauditorium(true)
            setmeeting(false)
        }
    }, [one, meeting, auditorium])

    return (
        <View style={{flex: 1}}>
            <ImageBackground source={require('../assets/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1}}></View>
                <View style={{flex: 2, alignItems: 'center'}}>
                    <View style={{display : 'flex', justifyContent:'center', alignItems: 'center'}}>
                            <View style={{}}>
                                <SafeAreaView>
                                    {
                                        one && (
                                            <OneSeat navigation={props.navigation}/>
                                        )
                                    }
                                    {
                                        meeting && (
                                            <MeetingRoom/>
                                        )
                                    }
                                    {
                                        auditorium && (
                                            <Auditorium/>
                                        )
                                    }
                                </SafeAreaView>
                            </View>
                    </View>
                </View>
                <View style={{flex: 1}}></View>
            </ImageBackground>
        </View>
    )
}

// export default Seat
const mapState = (state) => {
    return {
        ...state
    }
}

const mapDispatch = {changeSection}

export default connect(mapState, mapDispatch)(Seat)

