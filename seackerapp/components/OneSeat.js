import React, {useState, useEffect} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList, Modal, Button, ScrollView, ImageBackground} from 'react-native'
import {connect} from 'react-redux'
import {fetchSeat} from '../store/action'
import ImageViewer from 'react-native-image-zoom-viewer';

const OneSeat = (props) => {
    const [blockB, setblockB] = useState(false) //1
    const [blockC, setblockC] = useState(false) //2
    const [blockD, setblockD] = useState(false) //3

    //logic for the selected Block and refresh some useState
    const choosenBlock = (value) => {
        console.log('masuk buat ganti ', value)
        if(value === '1'){
            setbok('')
            setres(false)
            setselect('')
            setblockC(false)
            setblockD(false)
            setblockB(true)
        }else if(value === '2'){
            setbok('')
            setres(false)
            setselect('')
            setblockB(false)
            setblockD(false)
            setblockC(true)
        }else if(value === '3'){
            setbok('')
            setres(false)
            setselect('')
            setblockC(false)
            setblockB(false)
            setblockD(true)
        }
        // changeseat(value)
    }

    // change image, showing or not
    const [change, setchange] = useState(false)
    const changeModal = (value) => {
        console.log('masuk changeModal ', value)
        setchange(value)
    }

    // chooseSeat and this function for sending a value to db
    const choosenSeatUs = (value) => {
        setbok(value)
        console.log('choosen seat by user: ', value)
    }
    const formulaSeatB = {
        blockName: '1',
        countSeat: {
            count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
                51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                61, 62, 63, 64, 65, 66, 67, 68, 69, 70
            ]
        }
    }
    const formulaSeatC = {
        blockName: '2',
        countSeat: {
            count: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
            ]
        }
    }
    const formulaSeatD = {
        blockName: '3',
        countSeat: {
            count: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
                51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
                61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
                71, 72, 73, 74, 75, 76, 77, 78, 79, 80
            ]
        }
    }

    //show the seat sesuai panjangnya 
    const Seat10 = (value, block) => {
        console.log('masuk seat 10', block+value)
        return(
            <FlatList
                // horizontal='true'
                numColumns={10}
                data={value.count}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <TouchableOpacity onPress={() => {
                        receipt(`${block} ${item}`)
                        }}>
                        <View style={{ margin: 3}}>
                            {/* <View style={{ borderColor: 'white', border:2, width: 15, height: 10}}>
                                <Text>{index}</Text>
                            </View> */}
                            <Image
                                style={{ width: 25, height: 25}}
                                source={require('../assets/seat.png')}
                                // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
        )
    }

    // showing the receipt
    const [res, setres] = useState(false)
    const [select, setselect] = useState('')
    const [bok, setbok] = useState('')
    const receipt = (value) => {
        setres(true)
        console.log('from receipt', value)
        setselect(value)
        setbok('')
    }

    //for image mapping
    const images = [
        //     {
        //     name: 'Block B',
        //     props: {
        //         source: require('../assets/areatengahatas.png')
        //     }
        // }, 
        {
            name: 'Block C',
            props: {
                source: require('../assets/tengahbawah.png')
            }
        },
        // {
        //     name: 'Block D',
        //     props: {
        //         source: require('../assets/areakiri.png')
        //     }
        // }
    ]

    //temporary mapping image use this button
    let btns = [
        {
            name: '1',
            url: 'https://www.pwc.com/ca/en/consulting/women-in-work-2018/p494583-services-consulting-womeninwork2018-main-whatpayattention-illustration.png'
        },{
            name: '2',
            url: 'https://www.pwc.com/ca/en/consulting/women-in-work-2018/p494583-services-consulting-womeninwork2018-main-whatpayattention-illustration.png'
        },{
            name: '3',
            url: 'https://www.pwc.com/ca/en/consulting/women-in-work-2018/p494583-services-consulting-womeninwork2018-main-whatpayattention-illustration.png'
        }
    ]

    //with coordinate
    const changePage = (value) => {
        // console.log('ini .... : ', props.navigation)
        // dont forget sending the user
        props.navigation.navigate(value)
        // props.navigation.navigate('Seat')
    }

    return (
        <View style={{ flex: 1}}>
                <View style={{flex: 3, alignItems: 'center'}}>
                    <View style={{display : 'flex', justifyContent:'center', alignItems: 'center', width: 300, height: 200, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 25}}>
                            <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                                <Image
                                    onPress={() => { changePage('Coordinate')}}
                                    style = {{ width: 100, height: 100}}
                                    source={{uri:'https://www.pwc.com/ca/en/consulting/women-in-work-2018/p494583-services-consulting-womeninwork2018-main-whatpayattention-illustration.png'}}
                                />
                                <Button onPress={() => { changePage('Coordinate')}} title='Choose Your Seat 💺' color='#9d1601'></Button>
                            </View>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{display : 'flex', justifyContent:'center', alignItems: 'center', width: 150, height: 30, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 25}}>
                        <Button onPress={() => { changeModal(true)}} title='Display Seat' color='#9d1601'></Button>
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
                {/* <View style={{flex: 1, alignItems: 'center'}}>
                    <View style={{display : 'flex', justifyContent:'center', alignItems: 'center', width: 300, height: 200, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 25}}>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{ color: 'white', textAlign: 'center'}}>Block : </Text>
                            <FlatList
                                data={btns}
                                numColumns={3}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem = { ({item, index}) => (
                                    <TouchableOpacity onPress={() => { choosenBlock(item.name)}}>
                                        <View style={{ margin: 3, borderRadius: 20}}>
                                            <Image
                                                style = {{ width: 100, height: 100}}
                                                source={{uri: item.url}}
                                            />
                                            <Text style={{ color: 'white', textAlign: '#9d1601'}}> {item.name} </Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                </View> */}
                <View style={{flex: 1}}>
                    <View >
                        {/* <ScrollView>
                            {
                                blockB ? (
                                    <View>
                                        <Text style={{ color: 'white'}}>Block {formulaSeatB.blockName}</Text>
                                        {
                                            Seat10(formulaSeatB.countSeat, 'B')
                                        }
                                    </View>
                                ) : (
                                    <Text></Text>
                                )
                            }
                            {
                                blockC ? (
                                    <View>
                                        <Text style={{ color: 'white'}}>Block {formulaSeatC.blockName}</Text>
                                        {
                                            Seat10(formulaSeatC.countSeat, 'C')
                                        }
                                    </View>
                                ) : (
                                    <Text></Text>
                                )
                            }
                            {
                                blockD ? (
                                    <View>
                                        <Text style={{ color: 'white'}}>Block {formulaSeatD.blockName}</Text>
                                        {
                                            Seat10(formulaSeatD.countSeat, 'D')
                                        }
                                    </View>
                                ) : (
                                    <Text></Text>
                                )
                            }
                        </ScrollView> */}
                        {/* <View style={{display : 'flex', justifyContent:'center', alignItems: 'center', width: 300, height: 200, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 25}}>
                                <View style={{ alignItems: 'center', justifyContent: 'center'}}>
                                    <Image
                                        style = {{ width: 100, height: 100}}
                                        source={{uri:'https://www.pwc.com/ca/en/consulting/women-in-work-2018/p494583-services-consulting-womeninwork2018-main-whatpayattention-illustration.png'}}
                                    />
                                    <Button onPress={() => { changePage('Coordinate')}} title='Choose Your Seat 💺' color='#9d1601'></Button>
                                </View>
                        </View>
                        <View>
                            {
                                res ? (
                                    <Text style={{ color: 'white', textAlign: 'center'}}> Your selected seat: {select} (Only One)</Text>
                                ) : (
                                    <Text style={{ color: 'white', textAlign: 'center'}}> You Can Choose your seat 😍 </Text>
                                )
                            }
                        </View>
                        <Button onPress={() => { choosenSeatUs(select)}} title='book for me'></Button>
                        <View>
                            {
                                bok ? (
                                    <Text style={{ color: 'white', textAlign: 'center'}}> Okay, this seat {select} is yours . .</Text>
                                ) : (
                                    <Text></Text>
                                )
                            }
                        </View> */}
                    </View>
                </View>
        </View>
    )
}

// export default OneSeat
const mapState = (state) => {
    return {
        ...state
    }
}
const mapDispatch = { 
    fetchSeat
}

export default connect(mapState, mapDispatch)(OneSeat)