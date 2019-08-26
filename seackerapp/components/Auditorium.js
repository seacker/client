import React, {useState} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList, Modal, Button} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer';

const Auditorium = (props) => {
    // set seat 
    const Seat = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
        51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
        61, 62, 63, 64, 65, 66, 67
    ]
    // change image, showing or not
    const [change, setchange] = useState(false)
    const changeModal = (value) => {
        console.log('masuk changeModal ', value)
        setchange(value)
    }
    const images = [{
        name: 'Auditorium',
        props: {
            source: require('../assets/auditorium.png')
        }
    }]

    // chooseSeat
    const choosenSeatUs = (value) => {
        setbok(value)
        console.log('choosen seat by user: ', value)

    }

    // showing the receipt
    const [res, setres] = useState(false)
    const [select, setselect] = useState('')
    const [bok, setbok] = useState('')

    const receipt = (value) => {
        setres(true)
        console.log('from receipt : ', value)
        setselect(value)
        setbok('')
    }
    return (
        <View>
            <Button onPress={() => { changeModal(true)}} title='Display Seat'></Button>
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
            <View>
                <FlatList
                    // horizontal='true'
                    numColumns={5}
                    data={Seat}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity onPress={() => {
                            receipt(`auditorium${item}`)
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
            </View>
        </View>
    )
}

export default Auditorium