import React, {useState, useEffect} from 'react'
import {View, Text, Button, Modal, FlatList, Alert, TouchableOpacity} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer';
import DatePicker from 'react-native-datepicker'
import axios from 'axios'

const MeetingRoom = (props) => {

    checkTime = (time) => {
        let temp = time.split(':')
        let roundingMinutes
        let roundingHours

        if ( Number(temp[1])>0 && Number(temp[1])<30) {
            roundingMinutes = '30'
            roundingHours = temp[0]
        } else if (Number(temp[1])>30 && Number(temp[1])<=60) {
            roundingMinutes = '00'
            if (String(temp[0]).length === 1) {
                roundingHours = `0${temp[0]}`
            } else {
                roundingHours = temp[0]
            }
        } else {
            roundingMinutes = temp[1]
            roundingHours = temp[0]
        }
        return `${roundingHours}:${roundingMinutes}`
    }

    const [startTime, setStart] = useState('')
    const [endTime, setEnd] = useState('')
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
        setchange(value)
    }

    const images = [{
        name: 'Meeting Room',
        props: {
            source: require('../assets/meetingRoom.png')
        }
    }]

    function filteredData(selectedDate) {
        console.log(schedule.date, selectedDate, '<======== cek similarity')
        let filtered = schedules.filter( (schedule) => {
            if (schedule.date === selectedDate) {
                return schedule
            }
        })
        setFiltered(filtered)
    }

    function retrieveSchedules() {
        axios({
            method: 'get',
            url: 'http://13.251.59.155/booking',
            headers: {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjYyNDAzNDA0MGQ4NDI5ZmE4NTEwMSIsIm5payI6IkNOMDM3Njg2IiwiaWF0IjoxNTY2OTc0OTk4fQ.WCd51oks1dXFgmSaK9Uf20eu5FIkpPh8Ds8qYPQrewM'
            }
        })
        .then( ({data}) => {
            console.log('masuk then get schedules', data)
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
        retrieveSchedules()
    }, [])

    useEffect( () => {
        setFiltered(schedules)
    }, [schedules])

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

    function checkStartTime(start) {
        if (date === `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`) {
            let temp = start.split(':')
            if (Number(temp[0])<=new Date().getHours()) {
                Alert.alert(
                    'Are you time traveler?',
                    `It's already ${(new Date().getHours() < 12) ? (`${new Date().getHours()} AM`) : (`${new Date().getHours()-12} PM`)}`
                )
            } else {
                setStart(checkTime(start))
            }
        } else {
            setStart(checkTime(start))
        }
    }
    
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
    
    function bookingFunction(start, end, date, bookRooms) {
        console.log('masuk booking function')
        if (endTime === '' || book.length === 0 || startTime === '') {
            Alert.alert(
                'Bad request',
                'All data must be filled properly',
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
            axios({
                method: 'post',
                url: 'http://13.251.59.155/booking',
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
            .then( ({data}) => {
                console.log('masuk then')
                retrieveSchedules()
                Alert.alert(
                    'Success!',
                    `
    Your book is logged now on server
    Mark this on your calendar 
    Date: ${data.date}
    Time: ${startTime}, Room: ${JSON.stringify(data.arrRooms)}`,
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
        }
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

    checkEndTime = (start, end) => {
        if (start === '') {
            Alert.alert(
                'Can not set end time',
                'Please fill start time first',
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
                {cancelable: false}
            )   
        } else {
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
                    setEnd(end)
                }
            } else {
                setEnd(end)
            }
        }
    }


    return (
        <View style={{heigth: '100%', width: '100%'}}>
            <View>
                <View style={{width: '95%'}}>
                    <Button onPress={() => { changeModal(true)}} title="Tap to view meeting room's floor plan"></Button>
                </View>
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
                                style={{width: '100%'}}
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
                                onDateChange={(date) => {setDate(date); filteredData(date)}}
                            />
                        </View>
                        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <DatePicker
                                style={{width: '50%'}}
                                date={startTime}
                                mode="time"
                                placeholder="Start time"
                                format="HH:mm"
                                showIcon={false}
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
                                onDateChange={(startMeeting) => {checkStartTime(startMeeting)}}
                            />
                            <DatePicker
                                style={{width: '50%'}}
                                date={endTime}
                                mode="time"
                                placeholder="End time"
                                format="HH:mm"
                                showIcon={false}
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
                                onDateChange={(endMeeting) => {checkEndTime(startTime, checkTime(endMeeting)); console.log(endMeeting)}}
                            />
                        </View>
                
                        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
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

                        <View style={{right: '0%', marginTop: '5%'}}>
                            <View style={{padding: 0, height: 50, width: '100%', justifyContent: 'center', flexDirection: 'row',alignContent: 'center', alignItems: 'center', verticalAlign: 'middle'}}>
                                <View style={{width: '45%'}}>
                                    <Button
                                        title='Book'
                                        color='blue'
                                        onPress={ () => {bookingFunction(startTime, endTime, date, book)}}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop: 20, padding: 0, height: 200}}>
                            <FlatList
                                data={filteredSchedules}
                                renderItem={({item}) => (
                                    <View style={{flexDirection: 'column', justifyContent: 'center', marginBottom: 10}}>
                                        {console.log(item.UserBook)}
                                        <Text style={{color: 'white'}}>Date: {item.date}, </Text>
                                        <Text style={{color: 'white'}}>Time: {item.startBook}-{item.endBook}, </Text>
                                        <Text style={{color: 'white'}}>Room: {item.arrRooms.map( (room) => {return (`${room} `)})}</Text>
                                        {(item.UserBook) ? (
                                                <Text style={{color: 'white', fontWeight: 'bold'}}>Booker: {item.UserBook.name}</Text>
                                            ) : (
                                                <Text style={{color: 'white', fontWeight: 'bold'}}>Booker: Unknown</Text>
                                            )
                                        }
                                        
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default MeetingRoom