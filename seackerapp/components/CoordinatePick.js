import React, {useState, useEffect} from 'react'
import {View, Text, Image, TouchableOpacity, FlatList, Modal, Button, ScrollView, ImageBackground} from 'react-native'
import {connect} from 'react-redux'
import {fetchData, oneData} from '../store/action'
import ImageViewer from 'react-native-image-zoom-viewer';

const CoordinatePick = (props) => {
    const [data, setdata] = useState([])
    const [tex, setex] = useState('')
    const [cho, setcho] = useState('')

    useEffect( () => {
        console.log('============', props.user)
        // props.navigation.navigate({token: props.user.token})
        setpick(false)
        setdata(props.datas)
        console.log(props.datas, 'nih')
        // if(props.data === 0){
        //     setex(true)
        // }else{
        //     props.fetchData()
        //     setdata(props.datas)
        // }
        data.forEach( (el, index) => {
            console.log(index)
        })
    }, [])

    const [b1, setb1] = useState(false)
    const [b2, setb2] = useState(false)
    const [b3, setb3] = useState(false)
    const [b4, setb4] = useState(false)
    const [b5, setb5] = useState(false)
    const [b6, setb6] = useState(false)
    const [b7, setb7] = useState(false)
    const [b8, setb8] = useState(false)
    const [b9, setb9] = useState(false)
    const [b10, setb10] = useState(false)

    const [b11, setb11] = useState(false)
    const [b12, setb12] = useState(false)
    const [b13, setb13] = useState(false)
    const [b14, setb14] = useState(false)
    const [b15, setb15] = useState(false)
    const [b16, setb16] = useState(false)
    const [b17, setb17] = useState(false)
    const [b18, setb18] = useState(false)
    const [b19, setb19] = useState(false)
    const [b20, setb20] = useState(false)

    const [b21, setb21] = useState(false)
    const [b22, setb22] = useState(false)
    const [b23, setb23] = useState(false)
    const [b24, setb24] = useState(false)
    const [b25, setb25] = useState(false)
    const [b26, setb26] = useState(false)
    const [b27, setb27] = useState(false)
    const [b28, setb28] = useState(false)
    const [b29, setb29] = useState(false)
    const [b30, setb30] = useState(false)

    const choosenSt = (value) => {
        console.log('masuk choosenst: ', value)
        if(value === '1'){
            setb1(true)
        }else if(value === '2'){
            setb2(true)
        }else if(value === '3'){
            setb3(true)
        }else if(value === '4'){
            setb4(true)
        }else if(value === '5'){
            setb5(true)
        }else if(value === '6'){
            setb6(true)
        }else if(value === '7'){
            setb7(true)
        }else if(value === '8'){
            setb8(true)
        }else if(value === '9'){
            setb9(true)
        }else if(value === '10'){
            setb10(true)
        }else if(value === '11'){
            setb11(true)
        }else if(value === '12'){
            setb12(true)
        }else if(value === '13'){
            setb13(true)
        }else if(value === '14'){
            setb14(true)
        }else if(value === '15'){
            setb15(true)
        }else if(value === '16'){
            setb16(true)
        }else if(value === '17'){
            setb17(true)
        }else if(value === '18'){
            setb18(true)
        }else if(value === '19'){
            setb19(true)
        }else if(value === '20'){
            setb20(true)
        }else if(value === '21'){
            setb21(true)
        }else if(value === '22'){
            setb22(true)
        }else if(value === '23'){
            setb23(true)
        }else if(value === '24'){
            setb24(true)
        }else if(value === '25'){
            setb25(true)
        }else if(value === '26'){
            setb26(true)
        }else if(value === '27'){
            setb27(true)
        }else if(value === '28'){
            setb28(true)
        }else if(value === '29'){
            setb29(true)
        }else if(value === '30'){
            setb30(true)
        }
    }
    const disable = (value) => {
        console.log('masuk choosenst: ', value)
        if(value === '1'){
            setb1(false)
        }else if(value === '2'){
            setb2(false)
        }else if(value === '3'){
            setb3(false)
        }else if(value === '4'){
            setb4(false)
        }else if(value === '5'){
            setb5(false)
        }else if(value === '6'){
            setb6(false)
        }else if(value === '7'){
            setb7(false)
        }else if(value === '8'){
            setb8(false)
        }else if(value === '9'){
            setb9(false)
        }else if(value === '10'){
            setb10(false)
        }else if(value === '11'){
            setb11(false)
        }else if(value === '12'){
            setb12(false)
        }else if(value === '13'){
            setb13(false)
        }else if(value === '14'){
            setb14(false)
        }else if(value === '15'){
            setb15(false)
        }else if(value === '16'){
            setb16(false)
        }else if(value === '17'){
            setb17(false)
        }else if(value === '18'){
            setb18(false)
        }else if(value === '19'){
            setb19(false)
        }else if(value === '20'){
            setb20(false)
        }else if(value === '21'){
            setb21(false)
        }else if(value === '22'){
            setb22(false)
        }else if(value === '23'){
            setb23(false)
        }else if(value === '24'){
            setb24(false)
        }else if(value === '25'){
            setb25(false)
        }else if(value === '26'){
            setb26(false)
        }else if(value === '27'){
            setb27(false)
        }else if(value === '28'){
            setb28(false)
        }else if(value === '29'){
            setb29(false)
        }else if(value === '30'){
            setb30(false)
        }
    }

    const [a1, seta1] = useState(false)
    const [a2, seta2] = useState(false)
    const [a3, seta3] = useState(false)
    const [a4, seta4] = useState(false)
    const [a5, seta5] = useState(false)
    const [a6, seta6] = useState(false)
    const [a7, seta7] = useState(false)
    const [a8, seta8] = useState(false)
    const [a9, seta9] = useState(false)
    const [a10, seta10] = useState(false)

    const [a11, seta11] = useState(false)
    const [a12, seta12] = useState(false)
    const [a13, seta13] = useState(false)
    const [a14, seta14] = useState(false)
    const [a15, seta15] = useState(false)
    const [a16, seta16] = useState(false)
    const [a17, seta17] = useState(false)
    const [a18, seta18] = useState(false)
    const [a19, seta19] = useState(false)
    const [a20, seta20] = useState(false)

    const [a21, seta21] = useState(false)
    const [a22, seta22] = useState(false)
    const [a23, seta23] = useState(false)
    const [a24, seta24] = useState(false)
    const [a25, seta25] = useState(false)
    const [a26, seta26] = useState(false)
    const [a27, seta27] = useState(false)
    const [a28, seta28] = useState(false)
    const [a29, seta29] = useState(false)
    const [a30, seta30] = useState(false)

    const [mo, setmo] = useState(false)
    const [id, setid] = useState('')
    const [one, setone] = useState({})
    // const [idseat, setidseat] = useState('')
    const setmodals = (value) => {
        console.log('ini di setmodal: ', value)
        if(value === 'close'){
            setmo(false)
            setex('')
            setcho('')
            setid('')
        }else{
            setmo(true)
            setex(props.user)
            setcho(value)
            setid(props.user.user._id)
        }

    }

    const [pick, setpick] = useState(false)
    const [cs, setcs] = useState('')
    const startbook = async (id, seatnum) => {
        // await props.oneData(id, props.user.token)
        // checking(id)
        data.forEach(element => {
            if(element._id == id){
                console.log(element, '==========')
                if(element.taker === null){
                    bookforme(id)
                    console.log(element, 'kosong nih')
                    setcs(`seat ${seatnum} : you can seat here`)
                    setcheckout(false)
                    setpick(false)
                    console.log(`checking available seat ${seatnum} : you can seat here`)
                }else{
                    bookforme(id)
                    // checkoutYok(false)
                    setcheckout(false)
                    setcs(`seat ${seatnum} : is not available for now`)
                    setpick(true)
                    console.log(`checking available seat ${seatnum} : not available`)
                }
            }
        });
        console.log('ini di startbook ', props.data)
        console.log('ini tokennya : ',  props.user.token)
        setone(props.data)
    }

    const bookforme = (value) => {
        // console.log('masuk book for me')
        props.oneData(value, props.user.token)
        // sending the booked (one) into choosenSeat
        // console.log('data berhasil found: ', one)
    }

    const [checkout, setcheckout] = useState(true)
    const checkoutYok = (value) => {
        checkout(false)
        if(checkout === false) {
            props.oneData(id, props.user.token)
            
            // setpick(false) 
        }
    }

    return (
        <ImageBackground source={require('../assets/palingbaru.png')} style={{width: '100%', height: '100%'}}>
            <Modal transparent={true} visible={mo} animationType="fade" >
                <View style={{ flex: 1}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', flex:1, paddingTop: 250, backgroundColor: 'rgba(255,255,255,0.5)'}}>
                        {
                            pick ? 
                                checkout ? (
                                    <View>
                                        <Text style={{ color: '#9d1601', fontSize: 24}}>Oops ... {cs}</Text>
                                        <Button onPress={() => { setmodals('close')}} title='close' color='#9d1601'></Button>
                                    </View>
                                ) : (
                                    <View>
                                        <Text style={{ color: '#9d1601', fontSize: 24}}>do you want to checkout ? </Text>
                                        <Button onPress={() => { setmodals('close')}} title='checkout' color='#9d1601'></Button>
                                    </View>
                                )
                            // (
                            //     <View style={{ }}>
                            //         <Text style={{ color: '#9d1601', fontSize: 24}}>Oops ... {cs}</Text>
                            //         <Button onPress={() => { setmodals('close')}} title='close' color='#9d1601'></Button>
                            //         <Text style={{ color: '#9d1601', fontSize: 24}}>do you want to checkout ? </Text>
                            //         <Button onPress={() => { setmodals('close')}} title='close' color='#9d1601'></Button>
                            //     </View>
                            // ) 
                                : (
                                <View style={{ }}>
                                    <Text style={{ color: '#9d1601', fontSize: 24}}>seat: {cho}</Text>
                                    <Text style={{ color: '#9d1601', fontSize: 24}}>are you sure wanna book this seat ?</Text>
                                    <Button onPress={() => { bookforme()}} title='book for me' color='#9d1601'></Button>
                                    <Button onPress={() => { setmodals('close')}} title='close' color='#9d1601'></Button>
                                </View>
                            )
                        }
                        
                    </View>
                </View>
            </Modal>
            <View style={{flex : 1, flexDirection: 'row', justifyContent : 'flex-start' , top : 70}}>
                {/* {
                    tex ? (
                        <Text>{JSON.stringify(data)}</Text>
                    ) : (
                        <Text>Loading . . . .</Text>
                    )
                } */}
                <View style={{flex : 1, left : 120}}>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b21? (
                                <View style={{ backgroundColor: 'red', borderRadius: 10, width: 20, height: 20, top : 40}}>
                                    <Button onPress={() => { 
                                        // setcho('21')
                                        startbook('5d650e555b4ee35f0b7455da', '21')
                                        disable('21')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : 40}}>
                                    <Button onPress={() => { 
                                        setmodals('21')
                                        choosenSt('21')
                                        startbook('5d650e555b4ee35f0b7455da', '21')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                        {
                            b11? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : 40}}>
                                    <Button onPress={() => { 
                                        // setcho('11')
                                        disable('11')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : 40}}>
                                    <Button onPress={() => { 
                                        setmodals('11')
                                        choosenSt('11')
                                        startbook('5d650dea5b4ee35f0b7455d0', '11')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    {/* 2 */}
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b22? (
                                <View style={{ backgroundColor: 'red', borderRadius: 10, width: 20, height: 20, top : 11}}>
                                    <Button onPress={() => { 
                                        // setcho('22')
                                        disable('22')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : 11}}>
                                    <Button onPress={() => { 
                                        setmodals('22')
                                        choosenSt('22')
                                        startbook('5d650e5e5b4ee35f0b7455db', '22')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                        {
                            b12? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : 11}}>
                                    <Button onPress={() => { 
                                        // setcho('12')
                                        disable('12')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : 11}}>
                                    <Button onPress={() => { 
                                        setmodals('12')
                                        choosenSt('12')
                                        startbook('5d650df15b4ee35f0b7455d1', '12')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b23? (
                                <View style={{ backgroundColor: 'red', borderRadius: 10, width: 20, height: 20, top : -16}}>
                                    <Button onPress={() => { 
                                        // setcho('23')
                                        disable('23')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -16}}>
                                    <Button onPress={() => { 
                                        setmodals('23')
                                        choosenSt('23')
                                        startbook('5d650e655b4ee35f0b7455dc', '23')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                        {
                            b13? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -16}}>
                                    <Button onPress={() => { 
                                        // setcho('13')
                                        disable('13')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -16}}>
                                    <Button onPress={() => { 
                                        setmodals('13')
                                        choosenSt('13')
                                        startbook('5d650df95b4ee35f0b7455d2', '13')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b24? (
                                <View style={{ backgroundColor: 'red', borderRadius: 10, width: 20, height: 20, top : -45}}>
                                    <Button onPress={() => { 
                                        // setcho('24')
                                        disable('24')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -45}}>
                                    <Button onPress={() => { 
                                        setmodals('24')
                                        choosenSt('24')
                                        startbook('5d650e765b4ee35f0b7455dd', '24')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                        {
                            b14? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -45}}>
                                    <Button onPress={() => { 
                                        // setcho('14')
                                        disable('14')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -45}}>
                                    <Button onPress={() => { 
                                        setmodals('14')
                                        choosenSt('14')
                                        startbook('5d650e035b4ee35f0b7455d3', '14')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b25? (
                                <View style={{ backgroundColor: 'red', borderRadius: 10, width: 20, height: 20, top : -75}}>
                                    <Button onPress={() => { 
                                        // setcho('25')
                                        disable('25')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -75}}>
                                    <Button onPress={() => { 
                                        setmodals('25')
                                        choosenSt('25')
                                        startbook('5d650e825b4ee35f0b7455de', '25')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                        {
                            b15? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -75}}>
                                    <Button onPress={() => { 
                                        // setcho('15')
                                        disable('15')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -75}}>
                                    <Button onPress={() => { 
                                        setmodals('15')
                                        choosenSt('15')
                                        startbook('5d650e0d5b4ee35f0b7455d4', '15')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                </View>
                <View style={{flex : 1, left : 30}}>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b1 ? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : 40}}>
                                    <Button onPress={() => { 
                                        disable('1')
                                        setmo(false)}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                // disini nanti itenary lagi ok
                                <View style={{ width: 20, height: 20, top : 40}}>
                                    <Button onPress={() => {
                                        choosenSt('1')
                                        setmodals('1')
                                        startbook('5d650d2d5b4ee35f0b7455c6', '1')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    {/* 2 */}
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b2 ? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : 11}}>
                                    <Button onPress={() => { 
                                        // setcho('2')
                                        disable('2')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : 11}}>
                                    <Button onPress={() => { 
                                        setmodals('2')
                                        choosenSt('2')
                                        startbook('5d650d775b4ee35f0b7455c7', '2')
                                    }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b3? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -16}}>
                                    <Button onPress={() => { 
                                        // setcho('3')
                                        disable('3')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -16}}>
                                    <Button onPress={() => { 
                                        setmodals('3')
                                        choosenSt('3')
                                        startbook('5d650d8e5b4ee35f0b7455c8', '3')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b4? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -45}}>
                                    <Button onPress={() => { 
                                        // setcho('4')
                                        disable('4')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -45}}>
                                    <Button onPress={() => { 
                                        setmodals('4')
                                        choosenSt('4')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b5? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -75}}>
                                    <Button onPress={() => { 
                                        // setcho('5')
                                        disable('5')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -75}}>
                                    <Button onPress={() => { 
                                        setmodals('5')
                                        choosenSt('5')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                </View>
            </View>
            <View style={{flex : 1, flexDirection: 'row', top : 70}}>
                <View style={{flex : 1, left : 120}}>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b26? (
                                <View style={{ backgroundColor: 'red', borderRadius: 10, width: 20, height: 20, top : -80}}>
                                    <Button onPress={() => { 
                                        // setcho('26')
                                        disable('26')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -80}}>
                                    <Button onPress={() => { 
                                        setmodals('26')
                                        choosenSt('26')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                        {
                            b16? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -80}}>
                                    <Button onPress={() => { 
                                        // setcho('16')
                                        disable('16')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -80}}>
                                    <Button onPress={() => { 
                                        setmodals('16')
                                        choosenSt('16')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    {/* 2 */}
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b27? (
                                <View style={{ backgroundColor: 'red', borderRadius: 10, width: 20, height: 20, top : -110}}>
                                    <Button onPress={() => { 
                                        // setcho('27')
                                        disable('27')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -110}}>
                                    <Button onPress={() => { 
                                        setmodals('27')
                                        choosenSt('27')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                        {
                            b17? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -110}}>
                                    <Button onPress={() => { 
                                        // setcho('17')
                                        disable('17')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -110}}>
                                    <Button onPress={() => { 
                                        setmodals('17')
                                        choosenSt('17')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b28? (
                                <View style={{ backgroundColor: 'red', borderRadius: 10, width: 20, height: 20, top : -140}}>
                                    <Button onPress={() => { 
                                        // setcho('28')
                                        disable('28')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -140}}>
                                    <Button onPress={() => { 
                                        setmodals('28')
                                        choosenSt('28')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                        {
                            b18? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -140}}>
                                    <Button onPress={() => { 
                                        // setcho('18')
                                        disable('18')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -140}}>
                                    <Button onPress={() => { 
                                        setmodals('18')
                                        choosenSt('18')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b29? (
                                <View style={{ backgroundColor: 'red', borderRadius: 10, width: 20, height: 20, top : -170}}>
                                    <Button onPress={() => { 
                                        // setcho('29')
                                        disable('29')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -170}}>
                                    <Button onPress={() => { 
                                        setmodals('29')
                                        choosenSt('29')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                        {
                            b19? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -170}}>
                                    <Button onPress={() => { 
                                        // setcho('19')
                                        disable('19')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -170}}>
                                    <Button onPress={() => { 
                                        setmodals('19')
                                        choosenSt('19')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b30? (
                                <View style={{ backgroundColor: 'red', borderRadius: 10, width: 20, height: 20, top : -200}}>
                                    <Button onPress={() => { 
                                        // setcho('30')
                                        disable('30')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -200}}>
                                    <Button onPress={() => { 
                                        setmodals('30')
                                        choosenSt('30')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                        {
                            b20? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -200}}>
                                    <Button onPress={() => { 
                                        // setcho('20')
                                        disable('20')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -200}}>
                                    <Button onPress={() => { 
                                        setmodals('20')
                                        choosenSt('20')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                </View>
                <View style={{flex : 1, left : 30}}>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b6? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -80}}>
                                    <Button onPress={() => { 
                                        // setcho('6')
                                        disable('6')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -80}}>
                                    <Button onPress={() => { 
                                        setmodals('6')
                                        choosenSt('6')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    {/* 2 */}
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b7? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -110}}>
                                    <Button onPress={() => { 
                                        // setcho('7')
                                        disable('7')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -110}}>
                                    <Button onPress={() => { 
                                        setmodals('7')
                                        choosenSt('7')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b8? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -140}}>
                                    <Button onPress={() => { 
                                        // setcho('8')
                                        disable('8')}} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -140}}>
                                    <Button onPress={() => { 
                                        setmodals('8')
                                        choosenSt('8')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b9? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -170}}>
                                    <Button onPress={() => { 
                                        // setcho('9')
                                        disable('9')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -170}}>
                                    <Button onPress={() => { 
                                        setmodals('9')
                                        choosenSt('9')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                    <View style={{flex : 1, flexDirection : 'row'}}>
                        {
                            b10? (
                                <View style={{ backgroundColor: 'pink', borderRadius: 10, width: 20, height: 20, top : -200}}>
                                    <Button onPress={() => { 
                                        disable('10')
                                        // setcho('10')
                                        }} title='' color='#9d1601'></Button>
                                </View>
                            ) : (
                                <View style={{ width: 20, height: 20, top : -200}}>
                                    <Button onPress={() => { 
                                        setmodals('10')
                                        choosenSt('10')}} title='' color='#9d1601'></Button>
                                </View>
                            )
                        }
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}

const mapState = (state) => {
    return {
        ...state
    }
}

const mapDispatch = {
    fetchData, oneData
}

export default connect(mapState, mapDispatch)(CoordinatePick)