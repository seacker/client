import React, {useState, useEffect} from 'react'
import { View, Text, ImageBackground, Button, FlatList, TouchableOpacity, SafeAreaView, Image, Modal, TextInput} from 'react-native'
import {connect} from 'react-redux'
import {changeSection, login} from '../store/action'
import ImageViewer from 'react-native-image-zoom-viewer';



const LandingPage = (props) => {
    
    
    const [one, setone] = useState(false)
    const [meeting, setmeeting] = useState(false)
    const [auditorium, setauditorium] = useState(false)
    
    let [user, setuser] = useState({})
    const [count, setcount] = useState(0)
    useEffect(() => {
        console.log('landing page ', props.navigation.state)
        console.log('ini user login, ', props.user)
        let c = 1
        props.datas.forEach(element => {
            if(element.taker === null){
                c++
            }
        });
        setcount(c)
        // props.error.status ? (props.navigation.navigate('Login')) : (setuser = props.user.user.name)
    }, [])

    let btns = [
        {
            name: 'One',
            url: 'https://www.pwc.com/ca/en/consulting/women-in-work-2018/p494583-services-consulting-womeninwork2018-main-whatpayattention-illustration.png'
        },{
            name: 'Meeting',
            url: 'https://www.pwc.com/ca/en/consulting/women-in-work-2018/p494583-services-consulting-womeninwork2018-main-whatpayattention-illustration.png'
        },{
            name: 'Auditorium',
            url: 'https://www.pwc.com/ca/en/consulting/women-in-work-2018/p494583-services-consulting-womeninwork2018-main-whatpayattention-illustration.png'
        }
    ]

    const goingOne = (value) => {
        console.log('ini value: ',value)
        if(value === 'One'){
            console.log('masuk di one seat')
            setone(true)
            console.log('ini props: ', props)
            props.changeSection(value)
            props.navigation.navigate('Seat', {type: value})
        }else if(value === 'Meeting'){
            console.log('masuk di meeting')
            setmeeting(true)
            props.changeSection(value)
            props.navigation.navigate('Seat', {type: value})
        }else if(value === 'Auditorium'){
            console.log('masuk di auditorium')
            setauditorium(true)
            props.changeSection(value)
            props.navigation.navigate('Seat', {type: value})
        }
    }
    // change image, showing or not
    const [change, setchange] = useState(false)
    const changeModal = (value) => {
        console.log('masuk changeModal ', value)
        setchange(value)
    }
    const images = [{
        name: 'All',
        props: {
            source: require('../assets/landingPage.png')
        }
    }]


    //logout
    const logout = () => {
        console.log('logout nih')
        props.user = null
        props.navigation.navigate('Login')
    }

    return (
        <View style={{flex: 1}}>
            <ImageBackground source={require('../assets/background.png')} style={{width: '100%', height: '100%'}}>
            <View style={{flex: 1, alignItems: 'center', paddingTop: 20}}>
                {/* <Text>{props.error}</Text> */}
                <View style={{ flex: 1, alignItems: 'center',}}>
                    <View style={{display : 'flex', justifyContent:'center', alignItems: 'center', width: 300, height: 50, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 25}}>
                        <Text style={{ color: '#9d1601', fontSize: 26}}> SEACKER </Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: 'center',}}>
                    <View style={{display : 'flex', justifyContent:'center', alignItems: 'center', width: 300, height: 30, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 25}}>
                        <Button onPress={() => { changeModal(true)}} title='Display Floor' color='#9d1601'></Button>
                        {
                            change ? (
                                <Modal visible={true} transparent={true}>
                                    <Text>{images.name}</Text>
                                    <ImageViewer imageUrls={images}/>
                                    <Button onPress={() => { changeModal(false)}} title='Close' color='white'></Button>
                                </Modal>
                            ) : (
                                <Text></Text>
                            )
                        }
                    </View>
                </View>
            </View>
            <View style={{flex: 2, alignItems: 'center'}}>
                <SafeAreaView>
                    <View style={{ display : 'flex', justifyContent:'center', alignItems: 'center', width: 350, height: 250, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 25}}>
                        <View style={{alignItems: 'center', paddingTop: 60}}>
                            <View>
                                <View style={{margin: 10}}>
                                    <View>
                                        <FlatList
                                            data={btns}
                                            numColumns={3}
                                            keyExtractor={(item, index) => index.toString()}
                                            renderItem = { ({item, index}) => (
                                                <TouchableOpacity onPress={() => { goingOne(item.name)}}>
                                                    <View style={{ margin: 3, borderRadius: 20}}>
                                                        <Image
                                                            style = {{ width: 100, height: 100}}
                                                            source={{uri: item.url}}
                                                        />
                                                        <Text style={{ color: '#9d1601'}}> {item.name} </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            )}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
                <View style={{display : 'flex', justifyContent:'center', alignItems: 'center', width: 100, height: 30, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 25}}>
                    <Button onPress={ () => { logout() }} title='Logout' color='#9d1601' style={{alignItems: 'center'}}></Button>
                </View>
            </View>
            </ImageBackground>
        </View>
    )
}

// export default LandingPage

const mapState = (state) => {
    return {
        ...state
    }
}

const mapDispatch = {
    changeSection, login
}

export default connect(mapState, mapDispatch)(LandingPage)
