import React, {useState, useEffect} from 'react'
import { View, Text, ImageBackground, Button, FlatList, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import {connect} from 'react-redux'
import {changeSection, choosenSeat, fetchSeat} from '../store/action'

import OneSeat from '../components/OneSeat'
import MeetingRoom from '../components/MeetingRoom'
import Auditorium from '../components/Auditorium'

const Seat = (props) => {
    const [one, setone] = useState(false)
    const [meeting, setmeeting] = useState(false)
    const [auditorium, setauditorium] = useState(false) 
    const [blok, setblok] = useState('')

    // props.navigation.state.params.type
    useEffect(() => {
        console.log('masuk use effect Seat')
        if(props.navigation.state.params.type === 'one'){
            console.log('set one yg di click')
            setone('one')
            // change('one')
        }else if(props.navigation.state.params.type === 'meeting'){
            console.log('set meeting yg di click')
            setmeeting('meeting')
            // change('meeting')
        }else if(props.navigation.state.params.type === 'auditorium'){
            console.log('set auditorium yg di click')
            setauditorium('auditorium')
            // change('auditorium')
        }
    }, [one, meeting, auditorium])

    // value = {blokname, seat or room}
    // const change = (value) => {
    //     console.log('masuk function change')
    //     if(value == 'one'){
            
    //     }else if(value == 'meeting'){
    //         return blokC()
    //     }
    // }
    const blokB = () => {
        return (
            <View>
                <Text>{props.Seat10}</Text>
                <Text>{props.formulaSeatB}</Text>
            </View>
        )
    }
    const blokC = () => {
        
    }
    const blokD = () => {
        
    }

    return (
        <ImageBackground source={require('../assets/Seacker-2.png')} style={{width: '100%', height: '100%'}}>
            <View style={{ margin: 25}}>
                {/* <Text style={{ color: 'white'}}> Ini untuk Seat </Text> */}
                <SafeAreaView>
                    <View>
                        <View>
                            {/* <Text style={{ color: 'white'}}>{props.Seat10}</Text>
                            <Text style={{ color: 'white'}}>{props.formulaSeatB}</Text> */}
                        </View>
                        <View>
                            <OneSeat/>
                        </View>
                    </View>
                    <View>
                        {/* <Text style={{ color: 'white'}}>Meeting Room</Text> */}
                    </View>
                    <View>
                        {/* <Text style={{ color: 'white'}}>Auditorium</Text> */}
                    </View>
                </SafeAreaView>
            </View>
        </ImageBackground>
    )
}

// export default Seat
const mapState = (state) => {
    return {
        ...state
    }
}

const mapDispatch = {
    choosenSeat, fetchSeat, changeSection
}

export default connect(mapState, mapDispatch)(Seat)

