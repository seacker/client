import React, {useState, useEffect} from 'react'
import {View, Text, Button, Modal, TouchableOpacity, FlatList, AsyncStorage, Alert} from 'react-native'
// import ImageViewer from 'react-native-image-zoom-viewer';
import DatePicker from 'react-native-datepicker'
import axios from 'axios'

const MeetingRoom = (props) => {
    // change image, showing or not
    const [date, setDate] = useState(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`)
    const [minMinutes, setMinutes] = useState(new Date().getHours())
    const [minHours, setHours] = useState(new Date().getMinutes())
    const [schedules, setSchedules] = useState([])
    const [change, setchange] = useState(false)
    const [book, setBook] = useState({})
    let listRoom = {
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
    }

    const changeModal = (value) => {
        console.log('masuk changeModal ', value)
        setchange(value)
    }

    retrieveToken = async () => {
        try {
          const token = await AsyncStorage.getItem('TASKS');
          if (value !== null) {
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
        book.forEach( (room) => {
            for (var key in listRoom) {
                if (room == key) {
                    listRoom[key].color = 'red'
                    listRoom[key].enabled = false
                }
            }
        })
    }, [book])
    
    useEffect( () => {
        console.log(schedules)
    }, [schedules])

    function bookRoom(oneRoom) {
        book.forEach( (room) => {
            if (room !== oneRoom ) {
                setBook([...book, oneRoom])
            } else {
                var newBook = book.filter((rooom) => {
                    if (rooom !== oneRoom) {
                        return rooom
                    }
                })
                setBook(newBook)
            }
        })
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
        <View>
            <Text style={{ color: 'white'}}> Ini halaman meeting room</Text>
            <Button onPress={() => { changeModal(true)}} title='Display Room'></Button>
            {
                change ? (
                    <Modal visible={true} transparent={true}>
                        <Button onPress={() => { changeModal(false)}} title='Close' color='white'></Button>
                    </Modal>
                ) : (
                    <Text></Text>
                )
            }
            <View style={{ backgroundColor: '#2C3C50', justifyContent: 'center'}}>
                <View style={{justifyContent: 'center', width: '95%', marginBottom: 5}}>
                    <Text>
                        Meeting Room's schedule
                    </Text>
                </View>
                <View style={{justifyContent: 'center', width: '95%'}}>
                    <View style={{justifyContent: 'center'}}>
                        <DatePicker
                            style={{width: 200}}
                            date={date}
                            mode="date"
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
                            onDateChange={(date) => {setDate(date)}}
                        />
                    </View>
                    <View style={{justifyContent: 'center'}}>
                        <DatePicker
                            style={{width: 200}}
                            date={date}
                            mode="time"
                            placeholder="Select time"
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
                            onDateChange={(date) => {console.log(date)}}
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
                    <View style={{marginTop: 10, flexDirection: 'column'}}>
                        <TouchableOpacity disabled={listRoom.A.enabled} onPress={() => {bookRoom('A')}}>
                            <View style={{height: 50, width: 50, background: listRoom.A.color}}>
                                <Text>
                                    A    
                                </Text>                            
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={listRoom.B.enabled} onPress={() => {bookRoom('B')}}>
                            <View style={{height: 50, width: 50, background: listRoom.B.color}}>
                                <Text>
                                    B
                                </Text>                            
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={listRoom.C.enabled} onPress={() => {bookRoom('C')}}>
                            <View style={{height: 50, width: 50, background: listRoom.C.color}}>
                                <Text>
                                    C 
                                </Text>                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={listRoom.D.enabled} onPress={() => {bookRoom('D')}}>
                            <View style={{height: 50, width: 50, background: listRoom.D.color}}>
                                <Text>
                                    D    
                                </Text>                            
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {sendRequest(book, userId, )}}>
                            <View style={{background: 'blue', height: 50, width: 100, position: 'absolute', bottom: 10, right: 10}}>
                                <Text>
                                    Book
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MeetingRoom