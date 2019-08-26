import React, {useState} from 'react'
import { View, Text, ImageBackground, Button, FlatList, TouchableOpacity, SafeAreaView, Image, Modal} from 'react-native'
import {connect} from 'react-redux'
import {changeSection} from '../store/action'
import ImageViewer from 'react-native-image-zoom-viewer';



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
    return (
        <ImageBackground source={require('../assets/Seacker.png')} style={{width: '100%', height: '100%'}}>
        <View style={{ margin: 30}}>
            <SafeAreaView>
                <View style={{ justifyContent: 'center', height: '100%', alignItems: 'center'}}>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <View>
                            <Button onPress={() => { changeModal(true)}} title='Display Floor'></Button>
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
