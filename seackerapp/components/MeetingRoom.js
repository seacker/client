import React, {useState, useEffect} from 'react'
import {View, Text, Button, Modal, FlatList, Alert, TouchableOpacity} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer';
import DatePicker from 'react-native-datepicker'
import axios from 'axios'

const MeetingRoom = (props) => {

    checkTime = (time) => {
        let temp = time.split(':')
        let hours = Number(temp[0])
        let minutes = Number(temp[1])
        let roundingMinutes
        let roundingHours

        if ( minutes>0 && minutes<30) {
            roundingMinutes = 30
            roundingHours = hours
        } else if (minutes>30 && minutes<=60) {
            roundingMinutes = 0
            roundingHours = hours+1
        } else {
            roundingMinutes = minutes
            roundingHours = hours
        }
        return `${roundingHours}:${roundingMinutes}`
    }

    const [startTime, setStart] = useState(checkTime(`${new Date().getHours()}:${new Date().getMinutes()}`))
    const [endTime, setEnd] = useState(``)
    const [date, setDate] = useState(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`)
    const [schedules, setSchedules] = useState([])
    const [book, setBook] = useState([])
    const [change, setchange] = useState(false)
    const [filteredSchedules, setFiltered] = useState([])
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

    function filteredData(selectedDate) {
        let filtered = schedules.filter( (schedule) => {
            if (schedule.date === selectedDate) {
                return schedule
            }
        })

        setFiltered(filtered)

    }

    // retrieveData = async () => {
    //     try {
    //       const token = await AsyncStorage.getItem('token');
    //       if (token !== null) {
    //         // We have token!!
            
    //       }
    //     } catch (error) {
    //       // Error retrieving token
    //       Alert.alert(
    //         'Request rejected',
    //         'Access token is required to access data from server!',
    //         [
    //           {
    //             text: 'Cancel',
    //             onPress: () => console.log('Cancel Pressed'),
    //             style: 'cancel',
    //           },
    //           {
    //             text: 'OK', 
    //             onPress: () => console.log('OK Pressed')},
    //         ],
    //         {cancelable: false},
    //       );
    //     }
    //   };

    useEffect( () => {
        axios({
            method: 'get',
            url: 'http://localhost:3001/booking',
            headers: {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjYyNDAzNDA0MGQ4NDI5ZmE4NTEwMSIsIm5payI6IkNOMDM3Njg2IiwiaWF0IjoxNTY2OTc0OTk4fQ.WCd51oks1dXFgmSaK9Uf20eu5FIkpPh8Ds8qYPQrewM'
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
    
    bookingFunction = (start, end, date, bookRooms) => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:19000/booking',
            headers: {
                'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjYyNDAzNDA0MGQ4NDI5ZmE4NTEwMSIsIm5payI6IkNOMDM3Njg2IiwiaWF0IjoxNTY2OTc0OTk4fQ.WCd51oks1dXFgmSaK9Uf20eu5FIkpPh8Ds8qYPQrewM'
            },
            data: {
                date: date,
                startBook: start,
                endBook: end,
                arrRooms: bookRooms
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
        .catch( (err) => {
            console.log(err)
            Alert.alert(
                'Failed!',
                'Internal server error',
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
        // try {
        //     let token = await AsyncStorage.getItem('token')
        //     if (token) {
        //         console.log(token)
        //     } else {
        //         Alert.alert(
        //             'Request rejected',
        //             'Access token is required for post data to server!',
        //             [
        //                 {
        //                     text: 'Cancel',
        //                     onPress: () => console.log('Cancel Pressed'),
        //                     style: 'cancel',
        //                 },
        //                 {
        //                     text: 'OK', 
        //                     onPress: () => console.log('OK Pressed')
        //                 },
        //             ],
        //             {cancelable: false},
        //         )
        //     }
        // } catch(err) {
        //     console.log(err)
        //     Alert.alert(
        //         'Request rejected',
        //         'Access token is required for post data to server!',
        //         [
        //             {
        //                 text: 'Cancel',
        //                 onPress: () => console.log('Cancel Pressed'),
        //                 style: 'cancel',
        //             },
        //             {
        //                 text: 'OK', 
        //                 onPress: () => console.log('OK Pressed')
        //             },
        //         ],
        //         {cancelable: false},
        //     )
        // }
    }

    function bookNow(start, end, date, book) {
        bookingFunction(start, end, date, book)
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

    checkEndTime = (start, end) => {
        console.log(start, end)
        let endBook = end.split(':')
        let startBook = start.split(':')
        if (Number(endBook[0] < Number(startBook[0]))) {
            console.log('masuk earlier')
            Alert.alert(
                'Failed',
                'Can not set end time earlier than start time!',
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
        } else if (Number(endBook[0])===Number(startBook[0])) {
            if (Number(endBook[1]) <= Number(startBook[1])) {
                console.log('masuk earlier minutes')
                Alert.alert(
                    'Failed',
                    'Can not set end time earlier or same as start time!',
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
            } else {
                console.log(end, 'ini endTime')
                setEnd(end)
            }
        } else {
            console.log(end, 'ini endTime else doang')
            setEnd(end)
        }
    }

    useEffect( () => {
        console.log(endTime, 'ini dari state endTime')
    }, [endTime])

    return (
        <View style={{heigth: '100%', width: '100%'}}>
            <View>
                <Button onPress={() => { changeModal(true)}} title="Tap to view meeting room's floor plan"></Button>
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
                <View style={{ backgroundColor: '#2C3C50', justifyContent: 'center', flexDirecttion: 'column'}}>
                    <View style={{justifyContent: 'center', width: '95%', marginBottom: 5}}>
                        <Text style={{color: 'white'}}>
                            Choose your time: 
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
                                onDateChange={(date) => {setDate(date); filteredData(date); console.log(date)}}
                            />
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <DatePicker
                                style={{width: 200}}
                                date={startTime}
                                mode="time"
                                placeholder="Start time"
                                format="HH:mm"
                                minuteInterval={30}
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
                                onDateChange={(startMeeting) => {setStart(checkTime(startMeeting))}}
                            />
                        </View>
                        <View style={{justifyContent: 'center'}}>
                            <DatePicker
                                style={{width: 200}}
                                date={endTime}
                                mode="time"
                                placeholder="End time"
                                format="HH:mm"
                                minuteInterval={30}
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
                                onDateChange={(endMeeting) => {checkEndTime(startTime, checkTime(endMeeting))}}
                            />
                        </View>
                        <View>
                            <FlatList
                                data={filteredSchedules}
                                renderItem={({item}) => (
                                    <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                                        <Text>Date: {item.date}, </Text>
                                        <Text>Start: {item.startBook}, </Text>
                                        <Text>End: {item.endBook}, </Text>
                                        <Text>Booker: {item.UserBook.name}</Text>
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
                <View style={{marginTop: '100%', right: '0%', position: 'absolute'}}>
                    <TouchableOpacity onPress={ () => {bookNow(startTime, endTime, date, book)}}>
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
        </View>
    )
}

export default MeetingRoom