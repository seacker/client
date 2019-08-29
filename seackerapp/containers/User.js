import React, {useState, useEffect} from 'react'
import {View, Text, Button} from 'react-native'
import {connect} from 'react-redux'
import {} from '../store/action'

import Login from './Login'

const User = (props) => {

    // useEffect(() => {
    //     setsection('')
    //     return () => {
    //         cleanup
    //     };
    // }, [section])

    // this state for change the section (login or register)
    const [section, setsection] = useState('')
    const [login, setlogin] = useState(false)
    const [btn, setbtn] = useState(false)
    const changeSection = (value) => {
        if(value === 'Login'){
            console.log('masuk changeSection, ', value)
            setsection('Login')
            setlogin(true)
            setbtn(true)
        }
    }

    return (
        <View>
            {
                btn ? (
                    <Text> Welcome . . . . </Text>
                ) : (
                    <View>
                        <Button onPress={() => { changeSection('Login')}} title='Login'></Button>
                    </View>
                )
            }
            {
                login && (
                    <View>
                        <Login></Login>
                    </View>
                )
            }
        </View>
    )

}

const mapState = (state) => {
    return {
        ...state
    }
}

const mapDispatch = {}

export default connect(mapState, mapDispatch)(User)
