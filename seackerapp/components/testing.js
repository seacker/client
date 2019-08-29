{/* <View style={{flex: 1}}>
            <ImageBackground source={require('../assets/background.png')} style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1}}>
                    <Button onPress={() => { changeModal(true)}} title='Display Seat' color='#9d1601'></Button>
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
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <View style={{display : 'flex', justifyContent:'center', alignItems: 'center', width: 300, height: 200, backgroundColor: 'rgba(255,255,255,0.5)', borderRadius: 25}}>
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{ color: 'white', textAlign: 'center'}}>Block : </Text>
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
                                            <Text style={{ color: 'white', textAlign: '#9d1601'}}> {item.name} </Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                            <Button onPress={() => { changePage('Coordinate')}} title='coordinate' color='#9d1601'></Button>
                        </View>
                    </View>
                <View style={{flex: 2}}>
                    <View >
                        <ScrollView>
                            {
                                blockB ? (
                                    <View>
                                        <Text style={{ color: 'white'}}>Block {formulaSeatB.blockName}</Text>
                                        {
                                            Seat10(formulaSeatB.countSeat, 'B')
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
                                            Seat10(formulaSeatC.countSeat, 'C')
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
                                            Seat10(formulaSeatD.countSeat, 'D')
                                        }
                                    </View>
                                ) : (
                                    <Text></Text>
                                )
                            }
                        </ScrollView>
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
                </View>
            </ImageBackground>
        </View>





        <View style={{ paddingTop: 30}}>
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
            <View style={{ display: "flex"}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{ color: 'white', textAlign: 'center'}}>Block : </Text>
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
                                    <Text style={{ color: 'white', textAlign: 'center'}}> {item.name} </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                    <Button onPress={() => { changePage('Coordinate')}} title='coordinate'></Button>
                </View>
                <View style={{margin: 5, width: 500, height: 400}}>
                    <View style={{ marginTop: 10}}>
                        <ScrollView>
                            {
                                blockB ? (
                                    <View>
                                        <Text style={{ color: 'white'}}>Block {formulaSeatB.blockName}</Text>
                                        {
                                            Seat10(formulaSeatB.countSeat, 'B')
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
                                            Seat10(formulaSeatC.countSeat, 'C')
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
                                            Seat10(formulaSeatD.countSeat, 'D')
                                        }
                                    </View>
                                ) : (
                                    <Text></Text>
                                )
                            }
                        </ScrollView>
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
                </View>
            </View>
            <View>
            </View>
        </View> */}