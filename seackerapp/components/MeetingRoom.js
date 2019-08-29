import React, {useState, useEffect} from 'react'
import {View, Text, Button, Modal, FlatList, Alert, TouchableOpacity, ImageBackground, AsyncStorage} from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer';
import DatePicker from 'react-native-datepicker'
import axios from 'axios'

const MeetingRoom = (props) => {

    useEffect( () => {
        console.log(listRoom)
    }, [listRoom])

    checkTime = (time) => {
        let temp = time.split(':')
        let roundingMinutes
        let roundingHours
        console.log(temp[0], temp[1])
        if (Number(temp[0]) < 9 || (Number(temp[0] > 18))) {
            Alert.alert(
                'Not at office hours',
                'Meeting room can only booked at office hours'
            )
        } else if (temp[0] == '18') {
            if (Number(temp[1] == 0)) {
                roundingHours = temp[0]
                roundingMinutes = temp[1]
                return `${roundingHours}:${roundingMinutes}`
            } else {
                Alert.alert(
                    'Not at office hours',
                    'Meeting room can only booked at office hours'
                )
            }
        } else {
            if ( Number(temp[1])>0 && Number(temp[1])<30) {
                roundingMinutes = '30'
                roundingHours = temp[0]
            } else if (Number(temp[1])>30 && Number(temp[1])<=60) {
                roundingMinutes = '00'
                if (String(temp[0]).length === 1) {
                    roundingHours = `0${temp[0]+1}`
                } else {
                    roundingHours = String(Number(temp[0])+1)
                }
            } else {
                roundingMinutes = temp[1]
                roundingHours = temp[0]
            }
            return `${roundingHours}:${roundingMinutes}`
        }
    }

    const [startTime, setStart] = useState('')
    const [endTime, setEnd] = useState('')
    const [date, setDate] = useState(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`)
    const [schedules, setSchedules] = useState([
        {
            date: '2019-08-29',
            arrRooms: ['A', 'B'],
            startBook: '09:00',
            endBook: '12:00',
            UserBook: {
                name: 'Stephen'
            }
        },
        {
            date: '2019-08-29',
            arrRooms: ['C'],
            startBook: '09:00',
            endBook: '12:00',
            UserBook: {
                name: 'Indi'
            }
        },
        {
            date: '2019-08-30',
            arrRooms: ['A', 'B'],
            startBook: '10:30',
            endBook: '12:00',
            UserBook: {
                name: 'Mikel'
            }
        },
        {
            date: '2019-08-31',
            arrRooms: ['C', 'D'],
            startBook: '13:00',
            endBook: '15:00',
            UserBook: {
                name: 'Novita'
            }
        },
        {
            date: '2019-09-01',
            arrRooms: ['A', 'B', 'C'],
            startBook: '09:00',
            endBook: '12:00',
            UserBook: {
                name: 'Friska'
            }
        },
        {
            date: '2019-09-01',
            arrRooms: ['A', 'B','C','D'],
            startBook: '13:00',
            endBook: '16:00',
            UserBook: {
                name: 'Mikel'
            }
        },
        {
            date: '2019-08-29',
            arrRooms: ['A', 'B'],
            startBook: '12:30',
            endBook: '15:00',
            UserBook: {
                name: 'Indi'
            }
        },
        {
            date: '2019-08-29',
            arrRooms: ['A', 'B'],
            startBook: '15:30',
            endBook: '18:00',
            UserBook: {
                name: 'Novita'
            }
        }
    ])
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
            source: require('../assets/background.png')
        }
    }]

    function filteredData(selectedDate, selectedStartTime) {
        

        let filtered = []

        if (selectedStartTime) {
            let dateNow = selectedDate.split('-')

            if (dateNow[0].length === 1) {
                dateNow[0] = `0${dateNow[0]}`
            }
            if (dateNow[1].length === 1) {
                dateNow[1] = `0${dateNow[1]}`
            }

            let dateFormatted = dateNow.join('-')
            let temp = selectedStartTime.split(':')
            schedules.forEach( (schedule) => {
                let temp2 = schedule.startBook.split(':')
                
                if (schedule.date === dateFormatted) {
                    if (`${temp[0]}:${temp[1]}` === `${temp2[0]}:${temp2[1]}`) {
                        console.log('masuk ke kondisi jam book dengan schedule sama')
                        filtered.push(schedule)
                        schedule.arrRooms.forEach( (room) => {
                            for (var key in listRoom) {
                                if (room === key) {
                                    console.log('masuk sama lagi nih', room, key)
                                    listRoom[room].color = 'red'
                                    listRoom[room].enabled = false
                                    console.log(listRoom[room])
                                    setListRoom({
                                        ...listRoom,
                                        [room]: {
                                            ...listRoom[room],
                                            color: 'red',
                                            enabled: false
                                        }
                                    })
                                    console.log(listRoom)
                                }
                            }
                        })
                        setFiltered(filtered)
                    } else {
                        console.log(temp, temp2, 'ga sama jam nya')
                    }
                } else {
                    console.log(schedule.date, dateFormatted, 'ga sama')
                }
            })
        } else {
            schedules.forEach( (schedule) => {
                console.log(schedule.date, selectedDate, '<= cek similarity')
                if (schedule.date === selectedDate) {
                    console.log(schedule.date, selectedDate, '<= samaaa')
                    filtered.push(schedule)
                }
            })
            setFiltered(filtered)
        }
    }

    retrieveSchedules = () => {
        AsyncStorage.getItem('token', (err, token)=> {
            if (err) {
                console.log(err, 'ini dari asyncstorage')
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
                )
            } else {
                console.log(token, 'ini dari asyncstorage')
                axios({
                    method: 'get',
                    url: 'http://13.229.145.18/booking',
                    headers: {
                        token: token
                    }
                })
                .then( ({data}) => {
                    console.log('masuk then get schedules', data)
                    // setSchedules(data)
                    let arrTemp = []
                    data.forEach( (datum) => {
                        datum.date = datum.date.substring(0, 10)
                        console.log(datum.date)
                        arrTemp.push(datum)
                    })
                    setSchedules(arrTemp)
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
        })
      };

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
                            color: 'red'
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
                            color: 'gainsboro'
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
            AsyncStorage.getItem('token', (err, token) => {
                if (err) {
                    console.log(err, 'ini dari asyncstorage')
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
                    )
                } else {
                    axios({
                        method: 'post',
                        url: 'http://13.229.145.18/booking',
                        headers: {
                            token: token
                        },
                        data: {
                            date: date,
                            arrRooms: bookRooms,
                            startBook: start,
                            endBook: end,
                        }
                    })
                    .then( ({data}) => {
                        console.log(data)
                        setSchedules([
                            ...schedules,
                            {
                                date: data.date.substring(0, 10),
                                startBook: data.startBook,
                                endBook: data.endBook,
                                arrRooms: data.arrRooms,
                                UserBook: {
                                    name: data.UserBook.name
                                }
                            }
                        ])
                        filteredData(date, start)
                        Alert.alert(
                            'Success!',
                            `
            Your book is logged now on server
            Mark this on your calendar 
            Date: ${date}
            Time: ${startTime}, Room: ${JSON.stringify(bookRooms)}`,
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
            })
        }
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
    
    let maximum
    switch (new Date().getMonth()+1) {
        case 1:
            if (new Date().getDate() + 7 > 31) {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate() + 7 - 31}`
            } else {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            }
        case 2:
            if (new Date().getDate() + 7 > 28) {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate() + 7 - 28}`
            } else {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            }
        case 3:
            if (new Date().getDate() + 7 > 31) {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate() + 7 - 31}`
            } else {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            }
        case 4:
            if (new Date().getDate() + 7 > 30) {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate() + 7 - 30}`
            } else {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            }
        case 5:
            if (new Date().getDate() + 7 > 31) {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate() + 7 - 31}`
            } else {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            }
        case 6:
            if (new Date().getDate() + 7 > 30) {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate() + 7 - 30}`
            } else {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            }
        case 7:
            if (new Date().getDate() + 7 > 30) {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate() + 7 - 30}`
            } else {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            }
        case 8:
            if (new Date().getDate() + 7 > 31) {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate() + 7 - 31}`
            } else {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            }
        case 9:
            if (new Date().getDate() + 7 > 30) {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate() + 7 - 30}`
            } else {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            }
        case 10:
            if (new Date().getDate() + 7 > 31) {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate() + 7 - 31}`
            } else {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            }
        case 11:
            if (new Date().getDate() + 7 > 30) {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate() + 7 - 30}`
            } else {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            }
        case 12:
            if (new Date().getDate() + 7 > 31) {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+2}-${new Date().getDate() + 7 - 31}`
            } else {
                maximum = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
            }
        default:
            break;
    }

    console.log(maximum)

    return (
        <View>
        <View>
            <View style={{margin: '1%'}}>
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
            <View style={{backgroundColor: 'rgba(255,255,255,0.5)', justifyContent: 'center', flexDirection: 'column'}}>
                <View style={{justifyContent: 'center', marginBottom: 5}}>
                    <Text style={{color: '#9d1601'}}>
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
                            maxDate={maximum}
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
                                    color: '#9d1601'
                                },
                                dateText: {
                                    color: '#9d1601'
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
                                    color: '#9d1601'
                                },
                                dateText: {
                                    color: '#9d1601'
                                }
                            }}
                            onDateChange={(startMeeting) => {checkStartTime(startMeeting); filteredData(date, startMeeting)}}
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
                                    color: '#9d1601'
                                },
                                dateText: {
                                    color: '#9d1601'
                                }
                            }}
                            onDateChange={(endMeeting) => {checkEndTime(startTime, checkTime(endMeeting)); console.log(endMeeting)}}
                        />
                    </View>
            
                    <View style={{marginTop: '1%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity disabled={!listRoom.A.enabled} onPress={() => {bookRoom('A')}}>
                            <View style={{height: 50, width: 50, backgroundColor: listRoom.A.color, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', verticalAlign: 'middle'}}>
                                <Text>
                                    A    
                                </Text>                            
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={!listRoom.B.enabled} onPress={() => {bookRoom('B')}}>
                            <View style={{height: 50, width: 50, backgroundColor: listRoom.B.color, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', verticalAlign: 'middle'}}>
                                <Text>
                                    B
                                </Text>                            
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={!listRoom.C.enabled} onPress={() => {bookRoom('C')}}>
                            <View style={{height: 50, width: 50, backgroundColor: listRoom.C.color, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', verticalAlign: 'middle'}}>
                                <Text>
                                    C 
                                </Text>                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity disabled={!listRoom.D.enabled} onPress={() => {bookRoom('D')}}>
                            <View style={{height: 50, width: 50, backgroundColor: listRoom.D.color, flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center', verticalAlign: 'middle'}}>
                                <Text style={{margin: 'auto'}}>
                                    D    
                                </Text>                            
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{right: '0%', marginTop: '1%'}}>
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

                    <View style={{marginTop: '1%', padding: 0, height: 200}}>
                        <FlatList
                            data={filteredSchedules}
                            renderItem={({item}) => (
                                <View style={{flexDirection: 'column', justifyContent: 'center', marginBottom: 10}}>
                                    {console.log(item.UserBook)}
                                    <Text style={{color: '#9d1601'}}>Date: {item.date}, </Text>
                                    <Text style={{color: '#9d1601'}}>Time: {item.startBook}-{item.endBook}, </Text>
                                    <Text style={{color: '#9d1601'}}>Room: {item.arrRooms.map( (room) => {return (`${room} `)})}</Text>
                                    {(item.UserBook) ? (
                                            <Text style={{color: '#9d1601', fontWeight: 'bold'}}>Booker: {item.UserBook.name}</Text>
                                        ) : (
                                            <Text style={{color: '#9d1601', fontWeight: 'bold'}}>Booker: Unknown</Text>
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