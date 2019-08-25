import React, {useState} from 'react'
import { View, Text, ImageBackground, Button, FlatList, TouchableOpacity, SafeAreaView, Image} from 'react-native'
import {connect} from 'react-redux'
import {changeSection} from '../store/action'



const LandingPage = (props) => {
    const [one, setone] = useState(false)
    const [meeting, setmeeting] = useState(false)
    const [auditorium, setauditorium] = useState(false)

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
            props.changeSection(value)
            props.navigation.navigate('Seat', {type: value})
        }else if(value === 'Meeting'){
            console.log('masuk di meeting')
            setmeeting(true)
            props.changeSection(value)
        }else if(value === 'Auditorium'){
            console.log('masuk di auditorium')
            setauditorium(true)
            props.changeSection(value)
        }
    }
    return (
        <ImageBackground source={require('../assets/Seacker.png')} style={{width: '100%', height: '100%'}}>
        <View style={{}}>
            <SafeAreaView>
                <View style={{ justifyContent: 'center', height: '100%', alignItems: 'center'}}>
                    <View style={{ height: 250, opacity: 0.65, borderRadius: 10}}>
                        <Text style={{ color: 'white'}}> disini nanti list book seacker ...</Text>
                            {
                                one ? <Text style={{ color: 'white'}}> lagi open one seat</Text> : <Text style={{ color: 'white'}}>Nothing to open</Text>
                            }
                            {
                                meeting ? <Text style={{ color: 'white'}}> lagi open meeting room</Text> : <Text style={{ color: 'white'}}>Nothing to open</Text>

                            }
                            {
                                auditorium ? <Text style={{ color: 'white'}}> lagi open auditorium</Text> : <Text style={{ color: 'white'}}>Nothing to open</Text>

                            }
                        
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
                                        <Text style={{ color: 'white'}}> {item.name} </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </View>
        </ImageBackground>
    )
}

// export default LandingPage

const mapState = (state) => {
    return {
        ...state
    }
}

const mapDispatch = {
    changeSection
}

export default connect(mapState, mapDispatch)(LandingPage)
