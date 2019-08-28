import React, {useState, useEffect} from 'react'
import {View, Text, Button, Modal, FlatList, Alert, TouchableOpacity} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer';
import DatePicker from 'react-native-datepicker'

const MeetingRoom = (props) => {
    const [start, setStart] = useState(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`)
    const [end, setEnd] = useState(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`)
    const [schedules, setSchedules] = useState([])
    const [book, setBook] = useState([])
    const [change, setchange] = useState(false)
    const [listRoom, setListRoom] = useState({
        A: {
            index: 'A',
            color: 'gainsboro',
            enabled: true
        },
        B: {
            index: 'B',
            color: 'gainsboro',
            enabled: true
        },
        C: {
            index: 'C',
            color: 'gainsboro',
            enabled: true
        },
        D: {
            index: 'D',
            color: 'gainsboro',
            enabled: true
        }
    })

    const changeModal = (value) => {
        console.log('masuk changeModal ', value)
        setchange(value)
    }
    const images = [{
        name: 'Meeting Room',
        props: {
            source: require('../assets/meetingRoom.png')
        }
    }]

    retrieveToken = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          if (token !== null) {
            // We have token!!
            axios({
                method: 'get',
                url: 'http://localhost:3000/booking',
                headers: {
                    token
                }
            })
            .then( ({data}) => {
                setSchedules(data)
            })
            .catch( (err) => {
                console.log(err)
                Alert.alert(
                    'Error fetch data from server',
                    `Detail: ${err.message}`,
                    [
                        {
                          text: 'Cancel',
                          onPress: () => console.log('Cancel Pressed'),
                          style: 'cancel',
                        },
                        {
                          text: 'OK', 
                          onPress: () => console.log('OK Pressed')
                        },
                    ],
                    {cancelable: false},
                )
            })
          }
        } catch (error) {
          // Error retrieving token
          Alert.alert(
            'Request rejected',
            'Access token is required to access data from server!',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'OK', 
                onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        }
      };

    useEffect( () => {
        retrieveToken()
    }, [])

    useEffect( () => {
        console.log(book, 'dari use effect')
        book.forEach( (room) => {
            for (var key in listRoom) {
                if (room === key) {
                    setListRoom({
                        ...listRoom,
                        [key]: {
                            ...listRoom[key],
                            color: 'red',
                            enabled: false
                        }
                    })
                }
            }
        })
    }, [book])
    
    function bookRoom(oneRoom) {
        if (book.length == 0) {
            setBook([...book, oneRoom])
        } else {
            book.forEach( (room) => {
                if (room === oneRoom ) {
                    console.log(room, oneRoom, 'sama')
                    var newBook = book.filter((rooom) => {
                        console.log(rooom)
                        if (rooom !== oneRoom) {
                            return rooom
                        }
                    })
                    console.log(newBook, 'dari function bookRoom')
                    setListRoom({
                        ...listRoom,
                        [oneRoom]: {
                            ...listRoom[oneRoom],
                            color: 'gainsboro',
                            enabled: true
                        }
                    })

                    setBook(newBook)
                } else {
                    console.log(room, oneRoom, 'ga sama')
                    setBook([...book, oneRoom])
                }
            })
        }
    }
    
    function bookNow(start, end, date, book) {
        async () => {
            try {
                let token = await AsyncStorage.getItem('token')
                if (token) {
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/booking',
                        data: {
                            date: date,
                            startBook: start,
                            endBook: end,
                            arrRooms: book
                        }
                    })
                    .then( (result) => {
                        console.log('masuk then')
                        retrieveToken()
                        Alert.alert(
                            'Success!',
                            `Your book is logged now in server, don't forget to mark this on your calendar. Date: ${result.date}, Time: ${startBook}, Room: ${JSON.stringify(result.arrRooms)}`,
                            [
                                {
                                    text: 'Cancel',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                },
                                {
                                    text: 'OK', 
                                    onPress: () => console.log('OK Pressed')
                                },
                            ],
                            {cancelable: false},
                        )
                    })
                } else {
                    Alert.alert(
                        'Request rejected',
                        'Access token is required for post data to server!',
                        [
                            {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            {
                                text: 'OK', 
                                onPress: () => console.log('OK Pressed')
                            },
                        ],
                        {cancelable: false},
                    )
                }
            } catch(err) {
                console.log(err)
                Alert.alert(
                    'Request rejected',
                    'Access token is required for post data to server!',
                    [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        {
                            text: 'OK', 
                            onPress: () => console.log('OK Pressed')
                        },
                    ],
                    {cancelable: false},
                )
            }
        }
    }

    function nestedFlatlist(rooms) {
        return (
            <View style={{marginLeft: 100}}>
                <FlatList
                    data={rooms}
                    renderItem={({item}) => (
                        <View>
                            <Text>
                                item.name
                            </Text>
                            <Text>
                                item.taker
                            </Text>
                        </View>
                    )}
                />
            </View>
        )
    }

    return (
        <View style={{heigth: '100%', width: '100%'}}>
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
                <View style={{ backgroundColor: '#2C3C50', justifyContent: 'center'}}>
                    <View style={{justifyContent: 'center', width: '95%', marginBottom: 5}}>
                        <Text style={{color: 'white'}}>
                            Choose your time
                        </Text>
                    </View>
                    <View style={{justifyContent: 'center', width: '95%'}}>
                        <View style={{justifyContent: 'center'}}>
                            <DatePicker
                                style={{width: 200}}
                                date={start}
                                mode="datetime"
                                placeholder="Select date"
                                format="YYYY-MM-DD"
                                minDate={`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`}
                                confirmBtnText="Ok"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36,
                                        color: 'white'
                                    },
                                    dateText: {
                                        color: 'white'
                                    }
                                }}
                                onDateChange={(date) => {setStart(date)}}
                            />
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <DatePicker
                                style={{width: 200}}
                                date={start}
                                mode="datetime"
                                placeholder="End time"
                                format="YYYY-MM-DD"
                                minDate={`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`}
                                confirmBtnText="Ok"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36,
                                        color: 'white'
                                    },
                                    dateText: {
                                        color: 'white'
                                    }
                                }}
                                onDateChange={(date) => {setEnd(date)}}
                            />
                        </View>
                        <View>
                            <FlatList
                                data={schedules}
                                renderItem={({item}) => (
                                    <View style={{flexDirection: 'column'}}>
                                        <Text>Date: {item.date}, </Text>
                                        <Text>Start: {item.startBook}, </Text>
                                        <Text>End: {item.endBook}, </Text>
                                        <Text>Booker: {userBook}</Text>
                                        {nestedFlatlist(item.arrRooms)}
                                    </View>
                                )}
                            />
                        </View>
                        <View style={{marginTop: 50, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TouchableOpacity onPress={() => {bookRoom('A')}}>
                                <View style={{height: 50, width: 50, backgroundColor: listRoom.A.color, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', verticalAlign: 'middle'}}>
                                    <Text>
                                        A    
                                    </Text>                            
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {bookRoom('B')}}>
                                <View style={{height: 50, width: 50, backgroundColor: listRoom.B.color, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', verticalAlign: 'middle'}}>
                                    <Text>
                                        B
                                    </Text>                            
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {bookRoom('C')}}>
                                <View style={{height: 50, width: 50, backgroundColor: listRoom.C.color, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', verticalAlign: 'middle'}}>
                                    <Text>
                                        C 
                                    </Text>                          
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {bookRoom('D')}}>
                                <View style={{height: 50, width: 50, backgroundColor: listRoom.D.color, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', verticalAlign: 'middle'}}>
                                    <Text style={{margin: 'auto'}}>
                                        D    
                                    </Text>                            
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
            </View>
            <View style={{marginTop: '80%', right: '1%', position: 'absolute'}}>
                <TouchableOpacity onPress={ () => {bookNow(start, end, book)}}>
                    <View style={{padding: 0, height: 50, width: 100, justifyContent: 'flex-end', flexDirection: 'row',alignContent: 'center', alignItems: 'center', verticalAlign: 'middle'}}>
                        <View style={{marginRight: '15%'}}>
                            <Button
                                title='Book'
                                color='blue'
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MeetingRoom