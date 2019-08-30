import React, {useEffect, useState} from 'react'
import { View, Text, ImageBackground, Button, FlatList, TouchableOpacity, SafeAreaView, Image, Modal, TextInput, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'
import {login, fetchData} from '../store/action'
import axios from 'axios'

const mapState = (state) => {
    return {
        ...state
    }
}

const mapDispatch = {login, fetchData}

const Login = (props) => {
    useEffect(() => {
        props.fetchData()
        setnik('')
        setpwd('')
        if(props.user === null){
            setnik('')
            setpwd('')
        }
        props.datas = []
    }, [])

    // const [suc, setsuc] = useState(false)
    // const [suc1, setsuc1] = useState(true)
    // data user 
    const [nik, setnik] = useState('')
    const [pwd, setpwd] = useState('')

    //login
    const logindata = (value) => {
        console.log('ini di logindata-login', value)
        if(value.nik != '' && value.password != ''){
            // setsuc1(false)
            axios({
                method: 'post',
                url: 'http://13.229.145.18/users/login',
                data: {
                    nik: value.nik,
                    password: value.password
                }
            })
            .then( async ({data}) => {
                console.log(data)
                await AsyncStorage.setItem('token', data.token)
                await AsyncStorage.setItem('name', data.user.name)
                await AsyncStorage.setItem('nik', data.user.nik)
                await props.login(data.user)
                props.navigation.navigate('LandingPage', { user : props.user})
            })
            .catch( (err) => {
                props.login(null)
            })
        }
    }
    console.log(props.state)
    
    return (
        <View style={{flex: 1}}>
            <ImageBackground source={require('../assets/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1}}></View>
                <View style={{flex: 2, alignItems: 'center'}}>
                    <View style={{display : 'flex', justifyContent:'center', alignItems: 'center', width: 300, height: 200, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 25}}>
                            <View style={{}}>
                                <Text style={{ color: '#9d1601', fontSize: 18, textAlign: 'center'}}> Login First</Text>
                                <Text style={{ color: '#9d1601'}}> Your CN : </Text>
                                <View style={{ margin: 10, borderColor: '#9d1601', width: 250, height: 25, borderWidth: 2, borderRadius: 10 }}>
                                    <TextInput style={{color: '#9d1601', textAlign: 'center'}} onChangeText={(nik) => setnik(nik)} value={nik} placeholder='  your cn . .  '></TextInput>
                                </View>
                                <Text style={{ color: '#9d1601'}}> Your Password : </Text>
                                <View style={{ margin: 10, borderColor: '#9d1601', width: 250, height: 25, borderWidth: 2, borderRadius: 10 }}>
                                    <TextInput style={{color: '#9d1601', textAlign: 'center'}} secureTextEntry={true} onChangeText={(pwd) => setpwd(pwd)} value={pwd} placeholder='  your password  '></TextInput>
                                </View>
                                {/* <View style={{ margin: 10, borderColor: 'white', width: 80, height: 30, borderWidth: 2, borderRadius: 10 }}> */}
                                    <Button onPress={ () => {
                                            logindata({
                                                nik: nik,
                                                password: pwd
                                            })
                                        }}
                                        title='Login'
                                        color='#9d1601'
                                    ></Button>
                                {/* </View> */}
                            </View>
                    </View>
                </View>
                <View style={{flex: 1}}></View>
            </ImageBackground>
        </View>
    )
}


export default connect(mapState, mapDispatch)(Login)
