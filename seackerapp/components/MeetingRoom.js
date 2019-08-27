import React, {useState} from 'react'
import {View, Text, Button, Modal, TouchableOpacity, FlatList} from 'react-native'
// import ImageViewer from 'react-native-image-zoom-viewer';
import DatePicker from 'react-native-datepicker'

const MeetingRoom = (props) => {
    // change image, showing or not

    const [date, setDate] = useState(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`)
    const [minMinutes, setMinutes] = useState(new Date().getHours())
    const [minHours, setHours] = useState(new Date().getMinutes())
    const [change, setchange] = useState(false)
    const changeModal = (value) => {
        console.log('masuk changeModal ', value)
        setchange(value)
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
                        <TouchableOpacity>
                            <View style={{height: 50, width: 50, background: 'gainsboro'}}>
                                <Text>
                                    A    
                                </Text>                            
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{height: 50, width: 50, background: 'gainsboro'}}>
                                <Text>
                                    B
                                </Text>                            
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{height: 50, width: 50, background: 'grey'}}>
                                <Text>
                                    C 
                                </Text>                          
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{height: 50, width: 50, background: 'grey'}}>
                                <Text>
                                    D    
                                </Text>                            
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <FlatList
                            data={[
                                {
                                    number: 1, start: '09.30', end: '10.30', 
                                    rooms: [{name: 'A', taker: 'Andi'}, {name: 'B', taker: 'Andi'}, {name: 'C', taker: null}, {name: 'D', taker: null}]
                                },
                                {
                                    number: 2, start: '10.31', end: '12.30', 
                                    rooms: [{name: 'A', taker: null}, {name: 'B', taker: 'Mike'}, {name: 'C', taker: 'Mike'}, {name: 'D', taker: null}]
                                },
                                {
                                    number: 1, start: '14.30', end: '16.30', 
                                    rooms: [{name: 'A', taker: null}, {name: 'B', taker: null}, {name: 'C', taker: 'Novita'}, {name: 'D', taker: 'Novita'}]
                                }
                            ]}
                            renderItem={({item}) => (
                                <View style={{flexDirection: 'column'}}>
                                    <Text>{item.number}</Text>
                                    <Text>{item.start}</Text>
                                    <Text>{item.end}</Text>
                                    <View style={{marginLeft: 100}}>
                                        <FlatList
                                            data={item.rooms}
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
                                </View>
                            )}
                        />
                    </View>
                    <View>
                        <TouchableOpacity>
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