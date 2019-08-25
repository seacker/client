import React from 'react'
import { View, Text, ImageBackground, Button, FlatList, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import OneSeat from '../components/OneSeat'
import MeetingRoom from '../components/MeetingRoom'
import Auditorium from '../components/Auditorium'

const Seat = (props) => {
    const [one, setone] = useState(false)
    const [meeting, setmeeting] = useState(false)
    const [auditorium, setauditorium] = useState(false) 

    const change = (value) => {
        console.log('masuk function change')
    }

    return (
        <View style={{backgroundColor: 'black'}}>
            <Text> Ini untuk Seat </Text>
            <SafeAreaView>
                <View>One Seat</View>
                <View>Meeting Room</View>
                <View>Auditorium</View>
            </SafeAreaView>
        </View>
    )
}

export default Seat
