import React, {useState, useEffect} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList, Modal, Button, ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {fetchSeat} from '../store/action'
import ImageViewer from 'react-native-image-zoom-viewer';

const OneSeat = (props) => {
    const [blockB, setblockB] = useState(false)
    const [blockC, setblockC] = useState(false)
    const [blockD, setblockD] = useState(false) 
    const choosenBlock = (value) => {
        console.log('masuk buat ganti ', value)
        if(value === 'B'){
            setblockC(false)
            setblockD(false)
            setblockB(true)
        }else if(value === 'C'){
            setblockB(false)
            setblockD(false)
            setblockC(true)
        }else if(value === 'D'){
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


    //formula for the seat (not seats okay)
    // seat for 5 or 10 (tapi aslinya disusun jadi 5 juga sih)
    const Seat = {
        Seat10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        Seat5: [1, 2, 3, 4, 5]
    }
    const formulaSeatB = {
        blockName: 'B',
        countSeat: {
            set: Seat.Seat10,
            count: [1, 2, 3, 4, 5, 6, 7]
        }
    }
    const formulaSeatC = {
        blockName: 'C',
        countSeat: [
            Seat.Seat5, Seat.Seat5, Seat.Seat10, Seat.Seat5
        ]
    }
    const formulaSeatD = {
        blockName: 'D',
        countSeat: {
            set: Seat.Seat10,
            count: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    }

    //show the seat sesuai panjangnya 
    const Seat10 = (value) => {
        console.log('masuk seat 10', value)
        return(
            <FlatList
                // horizontal='true'
                numColumns={5}
                data={value.set}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                    <TouchableOpacity>
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
    const SeatForC = (value) => {
        console.log('masuk seat 5', value)
        return(
            <View>
                <FlatList
                    // horizontal='true'
                    numColumns={5}
                    data={value}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity>
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
        )
    }

    
    //for image mapping
    const images = [{
        props: {
            source: require('../assets/seat.png')
        }
    }, {
        props: {
            source: require('../assets/Seacker.png')
        }
    }]

    //temporary mapping image use this button
    let btns = [
        {
            name: 'B',
            url: 'https://www.pwc.com/ca/en/consulting/women-in-work-2018/p494583-services-consulting-womeninwork2018-main-whatpayattention-illustration.png'
        },{
            name: 'C',
            url: 'https://www.pwc.com/ca/en/consulting/women-in-work-2018/p494583-services-consulting-womeninwork2018-main-whatpayattention-illustration.png'
        },{
            name: 'D',
            url: 'https://www.pwc.com/ca/en/consulting/women-in-work-2018/p494583-services-consulting-womeninwork2018-main-whatpayattention-illustration.png'
        }
    ]
    return (
        <View>
            {/* <Modal visible={true} transparent={true}>
                <ImageViewer imageUrls={images}/>
                <Button onPress={() => { changeModal(false)}} title='Close Image' color='white'></Button>
            </Modal> */}
            <View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
                                    <Text style={{ color: 'white'}}> {item.name} </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
            <View>
                <View style={{margin: 5, width: 500, height: 400}}>
                    <View style={{ marginTop: 10}}>
                        <ScrollView>
                            {
                                blockB ? (
                                    <View>
                                        <Text style={{ color: 'white'}}>Block {formulaSeatB.blockName}</Text>
                                        {
                                            formulaSeatB.countSeat.count.map( item => {
                                                return Seat10(formulaSeatB.countSeat)
                                            })
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
                                            formulaSeatC.countSeat.map( item => {
                                                return SeatForC(item)
                                            })
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
                                            formulaSeatD.countSeat.count.map( item => {
                                                return Seat10(formulaSeatD.countSeat)
                                            })
                                        }
                                    </View>
                                ) : (
                                    <Text></Text>
                                )
                            }
                        </ScrollView>
                    </View>
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







// import React, {useState} from 'react'
// import {View, Text, Image, TouchableOpacity, FlatList, Button} from 'react-native'
// import {connect} from 'react-redux'
// import {fetchSeat} from '../store/action'
// ​
// const OneSeat = (props) => {
//     const [blockB, setblockB] = useState(false)
//     const [blockC, setblockC] = useState(false)
//     const [blockD, setblockD] = useState(false) 
// ​
//     const [seat, changeseat] = useState('')
// ​
//     const Seat = {
//         Seat10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//         Seat5: [1, 2, 3, 4, 5]
//     }
//     const formulaSeatB = {
//         blockName: 'B',
//         countSeat: [1, 2, 3, 4, 5, 6, 7]
//     }
//     const seat = (choosenseat) => {
//         changeseat(choosenseat)
//     }
//     const formulaSeatC = {
//         blockName: 'C',
//         countSeat: [1, 2, 3, 4]
//     }
//     const formulaSeatD = {
//         blockName: 'D',
//         countSeat: [1, 2, 3, 4, 5, 6, 7, 8]
//     }
// ​
//     return (
//         <View>
//             <Text style={{ color: 'white'}}> Ini halaman one seat</Text>
//             <Image
//                 style={{width: 100, height: 100}}
//                 // source={require('../assets/icon.png')}
//                 // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
//             ></Image>
//             {
//                 //dibawah ini button seat
//             }
//             <Button
//                 onPress=" lupa ini gmn, cuma ini manggil function seat " seat("A")
//             >
//                 Seat A
//             </Button>
//             <Button
//                 onPress=" lupa ini gmn, cuma ini manggil function seat " seat("B")
//             >
//                 Seat B
//             </Button>
//             <Button
//                 onPress=" lupa ini gmn, cuma ini manggil function seat " seat("C")
//             >
//                 Seat C
//             </Button>
//             <View style={{margin: 5, borderColor: 'pink', width: 400, height: 400}}>
//                 <Text style={{ color: 'white'}}>Block {formulaSeatB.blockName}</Text>
//                 <View>
//                     {
//                         seat === "A" && (
//                             <FlatList>flat list A</FlatList>
//                         )
//                         seat === "B" && (
//                             <FlatList>flat list B</FlatList>
//                         )
//                         seat === "C" && (
//                             <FlatList>flat list C</FlatList>
//                         )
//                     }
//                     {/* <FlatList
//                         horizontal='true'
//                         // numColumns={2}
//                         data={formulaSeatB.countSeat}
//                         keyExtractor={(item, index) => index.toString()}
//                         renderItem={({item, index}) => (
//                             <TouchableOpacity>
//                                 <View style={{ margin: 3}}>
//                                     <Image
//                                         style={{ width: 25, height: 25}}
//                                         source={require('../assets/seat.png')}
//                                         // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
//                                     />
//                                 </View>
//                             </TouchableOpacity>
//                         )}
//                     /> */}
//                 </View>
//             </View>
//         </View>
//     )
// }




// {/* <View> */}
                        // <Image
                        //     style={{width: 100, height: 100}}
                        //     // source={require('../assets/icon.png')}
                        //     // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
                        // ></Image>
                        // <View style={{margin: 5, borderColor: 'pink', width: 400, height: 400}}>
                        //     <View>
                        //         {
                        //             (seat === "B") && (
                        //                 <View>
                        //                     <Text style={{ color: 'white'}}>Block {formulaSeatB.blockName}</Text>
                        //                     <FlatList
                        //                         // horizontal='true'
                        //                         numColumns={2}
                        //                         data={formulaSeatB.countSeat.set}
                        //                         keyExtractor={(item, index) => index.toString()}
                        //                         renderItem={({item, index}) => (
                        //                             <TouchableOpacity>
                        //                                 <View style={{ margin: 3}}>
                        //                                     <Image
                        //                                         style={{ width: 25, height: 25}}
                        //                                         source={require('../assets/seat.png')}
                        //                                         // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
                        //                                     />
                        //                                 </View>
                        //                             </TouchableOpacity>
                        //                         )}
                        //                     />
                        //                 </View>
                        //             )
                        //             (seat === "C") && (
                        //                 <View>
                        //                     <Text style={{ color: 'white'}}>Block {formulaSeatB.blockName}</Text>
                        //                     {
                        //                         formulaSeatC.countSeat.map( item => {
                        //                             item.count.map( index => {
                        //                                 <FlatList
                        //                                     // horizontal='true'
                        //                                     numColumns={2}
                        //                                     data={item.set}
                        //                                     keyExtractor={(item, index) => index.toString()}
                        //                                     renderItem={({item, index}) => (
                        //                                         <TouchableOpacity>
                        //                                             <View style={{ margin: 3}}>
                        //                                                 <Image
                        //                                                     style={{ width: 25, height: 25}}
                        //                                                     source={require('../assets/seat.png')}
                        //                                                     // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
                        //                                                 />
                        //                                             </View>
                        //                                         </TouchableOpacity>
                        //                                     )}
                        //                                 />
                        //                             })
                        //                         })
                        //                     }
                        //                 </View>
                        //             )
                        //             (seat === "D") && (
                        //                 <FlatList>flat list C</FlatList>
                        //             )
                        //         }
                        //         {/* <FlatList
                        //             // horizontal='true'
                        //             numColumns={2}
                        //             data={formulaSeatB.countSeat.set}
                        //             keyExtractor={(item, index) => index.toString()}
                        //             renderItem={({item, index}) => (
                        //                 <TouchableOpacity>
                        //                     <View style={{ margin: 3}}>
                        //                         <Image
                        //                             style={{ width: 25, height: 25}}
                        //                             source={require('../assets/seat.png')}
                        //                             // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
                        //                         />
                        //                     </View>
                        //                 </TouchableOpacity>
                        //             )}
                        //         /> */}
                        //     </View>
                        // </View>
                    // {/* </View> */}





// <Button onPress={() => { changeModal(true)}} title='Open Image'></Button>
//             {
//                 change ? (
//                     <Modal visible={true} transparent={true}>
//                         <ImageViewer imageUrls={images}/>
//                         <Button onPress={() => { changeModal(false)}} title='Close Image' color='white'></Button>
//                     </Modal>
//                 ) : (
//                     <View>
//                         <Image
//                             style={{width: 100, height: 100}}
//                             // source={require('../assets/icon.png')}
//                             // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
//                         ></Image>
//                         <View style={{margin: 5, borderColor: 'pink', width: 400, height: 400}}>
//                             <View>
//                                 {
//                                     (seat === "B") && (
//                                         <View>
//                                             <Text style={{ color: 'white'}}>Block {formulaSeatB.blockName}</Text>
//                                             <FlatList
//                                                 // horizontal='true'
//                                                 numColumns={2}
//                                                 data={formulaSeatB.countSeat.set}
//                                                 keyExtractor={(item, index) => index.toString()}
//                                                 renderItem={({item, index}) => (
//                                                     <TouchableOpacity>
//                                                         <View style={{ margin: 3}}>
//                                                             <Image
//                                                                 style={{ width: 25, height: 25}}
//                                                                 source={require('../assets/seat.png')}
//                                                                 // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
//                                                             />
//                                                         </View>
//                                                     </TouchableOpacity>
//                                                 )}
//                                             />
//                                         </View>
//                                     )
//                                     (seat === "C") && (
//                                         <View>
//                                             <Text style={{ color: 'white'}}>Block {formulaSeatB.blockName}</Text>
//                                             {
//                                                 formulaSeatC.countSeat.map( item => {
//                                                     item.count.map( index => {
//                                                         <FlatList
//                                                             // horizontal='true'
//                                                             numColumns={2}
//                                                             data={item.set}
//                                                             keyExtractor={(item, index) => index.toString()}
//                                                             renderItem={({item, index}) => (
//                                                                 <TouchableOpacity>
//                                                                     <View style={{ margin: 3}}>
//                                                                         <Image
//                                                                             style={{ width: 25, height: 25}}
//                                                                             source={require('../assets/seat.png')}
//                                                                             // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
//                                                                         />
//                                                                     </View>
//                                                                 </TouchableOpacity>
//                                                             )}
//                                                         />
//                                                     })
//                                                 })
//                                             }
//                                         </View>
//                                     )
//                                     (seat === "D") && (
//                                         <FlatList>flat list C</FlatList>
//                                     )
//                                 }
//                                 {/* <FlatList
//                                     // horizontal='true'
//                                     numColumns={2}
//                                     data={formulaSeatB.countSeat.set}
//                                     keyExtractor={(item, index) => index.toString()}
//                                     renderItem={({item, index}) => (
//                                         <TouchableOpacity>
//                                             <View style={{ margin: 3}}>
//                                                 <Image
//                                                     style={{ width: 25, height: 25}}
//                                                     source={require('../assets/seat.png')}
//                                                     // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
//                                                 />
//                                             </View>
//                                         </TouchableOpacity>
//                                     )}
//                                 /> */}
//                             </View>
//                         </View>
//                     </View>
//                 )
//             }




// {
//     blockB && (
//         <View>
//             <Text style={{ color: 'white'}}>Block {formulaSeatB.blockName}</Text>
//             {
//                 formulaSeatC.countSeat.map( item => {
//                     item.count.map( index => {
//                         <FlatList
//                             // horizontal='true'
//                             numColumns={2}
//                             data={item.set}
//                             keyExtractor={(item, index) => index.toString()}
//                             renderItem={({item, index}) => (
//                                 <TouchableOpacity>
//                                     <View style={{ margin: 3}}>
//                                         <Image
//                                             style={{ width: 25, height: 25}}
//                                             source={require('../assets/seat.png')}
//                                             // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
//                                         />
//                                     </View>
//                                 </TouchableOpacity>
//                             )}
//                         />
//                     })
//                 })
//             }
//         </View>
//     )
//     blockC && (
//         <View>
//             <Text style={{ color: 'white'}}>Block {formulaSeatB.blockName}</Text>
//             {
//                 formulaSeatC.countSeat.map( item => {
//                     item.count.map( index => {
//                         <FlatList
//                             // horizontal='true'
//                             numColumns={2}
//                             data={item.set}
//                             keyExtractor={(item, index) => index.toString()}
//                             renderItem={({item, index}) => (
//                                 <TouchableOpacity>
//                                     <View style={{ margin: 3}}>
//                                         <Image
//                                             style={{ width: 25, height: 25}}
//                                             source={require('../assets/seat.png')}
//                                             // source={{ uri: 'https://making-the-web.com/sites/default/files/clipart/147743/car-seat-clipart-147743-5874166.png'}}
//                                         />
//                                     </View>
//                                 </TouchableOpacity>
//                             )}
//                         />
//                     })
//                 })
//             }
//         </View>
//     )
//     (seat === "D") && (
//         <Text>ini nanti seat Block D</Text>
//         // <FlatList>flat list D</FlatList>
//     )
// }