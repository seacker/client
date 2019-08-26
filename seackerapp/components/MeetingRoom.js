import React, {useState} from 'react'
import {View, Text, Button, Modal} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer';

const MeetingRoom = (props) => {
    // change image, showing or not
    const [change, setchange] = useState(false)
    const changeModal = (value) => {
        console.log('masuk changeModal ', value)
        setchange(value)
    }
    const images = [{
        name: 'Meeting Room',
        props: {
            source: require('../assets/meetingroom.png')
        }
    }]
    return (
        <View>
            <Text style={{ color: 'white'}}> Ini halaman meeting room</Text>
            <Button onPress={() => { changeModal(true)}} title='Display Room'></Button>
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
            <View></View>
        </View>
    )
}

export default MeetingRoom