import { StyleSheet, Text, TextInput,Animated, TouchableWithoutFeedback, Image, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Homepage = (props) => {
    return (



        <View style={styles.main}>
            <View style={styles.one}>
                <ImageBackground source={require('../image/Halfback.png')} style={styles.back} >
                    <View style={styles.two}>
                        <Image source={require('../image/pie.png')} style={styles.three}></Image>
                    </View>
                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Searchpage")}>
                        <View style={styles.four}>
                            <Image source={require('../image/search.png')} style={styles.five}></Image>
                            <TextInput placeholderTextColor={'#979797'} style={styles.input} placeholder='Where do you want to go today?' keyboardType='web-search' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.your}>
                        <Image source={require('../image/Next.png')} style={styles.angle}>
                        </Image>
                    </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <ScrollView>

                <View style={styles.six}>
                    <View style={styles.will}>
                        <Text style={styles.letter}>Recently Viewed</Text></View>

                    <View style={styles.list}>
                        <ScrollView horizontal>

                            <View style={styles.list1}>
                                <ImageBackground source={require('../image/buil.png')} style={styles.blow}>
                                    <View style={styles.tax}>
                                        <Text style={styles.roy}>Royal Residence</Text>
                                        <View style={styles.mon}>
                                            <Text style={styles.roy1}>$1,399</Text>
                                            <View style={styles.wow}>
                                                <Text style={styles.roy2}>/month</Text></View>
                                            <TouchableOpacity>
                                                <View style={styles.circle}>
                                                    <ImageBackground source={require('../image/cir.png')} style={styles.col}>
                                                        <Image source={require('../image/ar.png')} style={styles.arrow}></Image>
                                                    </ImageBackground>
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </ImageBackground>
                            </View>

                            <View style={styles.list1}>
                                <ImageBackground source={require('../image/cc22.png')} style={styles.blow}>
                                    <View style={styles.tax}>
                                        <Text style={styles.roy}>Royal Residence</Text>
                                        <View style={styles.mon}>
                                            <Text style={styles.roy1}>$1,399</Text>
                                            <View style={styles.wow}>
                                                <Text style={styles.roy2}>/month</Text></View>
                                            <TouchableOpacity>
                                                <View style={styles.circle}>
                                                    <ImageBackground source={require('../image/cir.png')} style={styles.col}>
                                                        <Image source={require('../image/ar.png')} style={styles.arrow}></Image>
                                                    </ImageBackground>
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </ImageBackground>
                            </View>


                            <View style={styles.list1}>
                                <ImageBackground source={require('../image/buil.png')} style={styles.blow}>
                                    <View style={styles.tax}>
                                        <Text style={styles.roy}>Royal Residence</Text>
                                        <View style={styles.mon}>
                                            <Text style={styles.roy1}>$1,399</Text>
                                            <View style={styles.wow}>
                                                <Text style={styles.roy2}>/month</Text></View>
                                            <TouchableOpacity>
                                                <View style={styles.circle}>
                                                    <ImageBackground source={require('../image/cir.png')} style={styles.col}>
                                                        <Image source={require('../image/ar.png')} style={styles.arrow}></Image>
                                                    </ImageBackground>
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </ImageBackground>
                            </View>

                            <View style={styles.list1}>
                                <ImageBackground source={require('../image/cc22.png')} style={styles.blow}>
                                    <View style={styles.tax}>
                                        <Text style={styles.roy}>Royal Residence</Text>
                                        <View style={styles.mon}>
                                            <Text style={styles.roy1}>$1,399</Text>
                                            <View style={styles.wow}>
                                                <Text style={styles.roy2}>/month</Text></View>
                                            <TouchableOpacity>
                                                <View style={styles.circle}>
                                                    <ImageBackground source={require('../image/cir.png')} style={styles.col}>
                                                        <Image source={require('../image/ar.png')} style={styles.arrow}></Image>
                                                    </ImageBackground>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.flo}>
                    <Text style={styles.fo1}>World Trip</Text>
                </View>


                <ScrollView>
                    <View style={styles.pop}>
                        <View style={styles.pass}>
                            <ImageBackground source={require('../image/no1.png')} style={styles.pa1}>
                                <View style={styles.container}>
                                    <ImageBackground source={require('../image/14.png')} style={styles.lore}>
                                        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Mapscreen")}>
                                            <View style={styles.qq}>
                                                <Image source={require('../image/location.png')} style={styles.beach}></Image>
                                                <Text style={styles.gg}>Lorem Ipsum</Text>
                                                <Image source={require('../image/like.png')} style={styles.beach1}></Image>
                                            </View>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={styles.pass}>
                            <ImageBackground source={require('../image/no2.png')} style={styles.pa2}>
                                <View style={styles.container}>
                                    <ImageBackground source={require('../image/14.png')} style={styles.lore1}>
                                        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Mapscreen")}>
                                            <View style={styles.qq1}>
                                                <Image source={require('../image/location.png')} style={styles.beach2}></Image>
                                                <Text style={styles.gg1}>Lorem Ipsum</Text>
                                                <Image source={require('../image/like.png')} style={styles.beach3}></Image>
                                            </View>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                            </ImageBackground>
                        </View>



                        <View style={styles.pass}>
                            <ImageBackground source={require('../image/no3.png')} style={styles.pa2}>
                                <View style={styles.container}>
                                    <ImageBackground source={require('../image/14.png')} style={styles.lore1}>
                                        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Mapscreen")}>
                                            <View style={styles.qq1}>
                                                <Image source={require('../image/location.png')} style={styles.beach2}></Image>
                                                <Text style={styles.gg1}>Lorem Ipsum</Text>
                                                <Image source={require('../image/like.png')} style={styles.beach3}></Image>
                                            </View>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                            </ImageBackground>
                        </View>


                        <View style={styles.pass}>
                            <ImageBackground source={require('../image/no4.png')} style={styles.pa1}>
                                <View style={styles.container}>
                                    <ImageBackground source={require('../image/14.png')} style={styles.lore}>
                                        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Mapscreen")}>
                                            <View style={styles.qq}>
                                                <Image source={require('../image/location.png')} style={styles.beach}></Image>
                                                <Text style={styles.gg}>Lorem Ipsum</Text>
                                                <Image source={require('../image/like.png')} style={styles.beach1}></Image>
                                            </View>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                            </ImageBackground>
                        </View>




                        <View style={styles.pass}>
                            <ImageBackground source={require('../image/no5.png')} style={styles.pa1}>
                                <View style={styles.container}>
                                    <ImageBackground source={require('../image/14.png')} style={styles.lore}>
                                        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Mapscreen")}>
                                            <View style={styles.qq}>
                                                <Image source={require('../image/location.png')} style={styles.beach}></Image>
                                                <Text style={styles.gg}>Lorem Ipsum</Text>
                                                <Image source={require('../image/like.png')} style={styles.beach1}></Image>
                                            </View>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                            </ImageBackground>
                        </View>




                        <View style={styles.pass}>
                            <ImageBackground source={require('../image/no6.png')} style={styles.pa2}>
                                <View style={styles.container}>
                                    <ImageBackground source={require('../image/14.png')} style={styles.lore1}>
                                        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Mapscreen")}>
                                            <View style={styles.qq1}>
                                                <Image source={require('../image/location.png')} style={styles.beach2}></Image>
                                                <Text style={styles.gg1}>Lorem Ipsum</Text>
                                                <Image source={require('../image/like.png')} style={styles.beach3}></Image>
                                            </View>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                </ScrollView>

            </ScrollView>
        </View>
    )
}

export default Homepage

const styles = StyleSheet.create({


    pa2: {
        height: 171,
        width: 155,

    },


    pass: {

        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 5,

    },

    pop: {
        flexWrap: 'wrap',
        marginTop: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,


    },

    qq: {
        flexDirection: 'row',
    },

    qq1: {
        flexDirection: 'row',
    },
    beach1: {
        height: 20,
        width: 20,
        marginLeft: 37,
    },

    beach3: {
        height: 20,
        width: 20,
        marginLeft: 37,
    },
    beach2: {
        height: 13.13,
        width: 9.38,
        marginTop: 3,
        marginLeft: 5,
        marginTop: 5,

    },
    beach: {
        height: 13.13,
        width: 9.38,
        marginTop: 3,
        marginLeft: 5,
        marginTop: 5,
    },
    gg: {
        fontSize: 10,
        color: 'white',
        marginLeft: 5,
        marginTop: 4,
    },
    gg1: {
        fontSize: 10,
        color: 'white',
        marginLeft: 5,
        marginTop: 4,
    },

    lore: {
        height: 24,
        width: 100,
        marginTop: 160,
        marginLeft: 10,
    },

    lore1: {
        height: 24,
        width: 100,
        marginTop: 137,
        marginLeft: 10,
    },
    pa1: {
        height: 194,
        width: 155,

    },

    fo1: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black'
    },

    flo: {
        marginTop: 7,
        marginLeft: 20,
    },

    circle: {
        marginLeft: 13,
        marginTop: -4
    },

    wow: {
        marginTop: 2,
    },
    will: {
        marginLeft: 21,
        marginTop: 9,
    },
    letter: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    mon: {
        flexDirection: 'row',
        marginTop: 5,
    },

    tax: {
        flexDirection: 'column',
        marginTop: 144,
        marginLeft: 2,
    },
    roy2: {
        fontSize: 8,
        color: 'white',
    },
    roy: {
        fontSize: 11,
        color: 'white',
        fontWeight: 'bold',
    },
    roy1: {
        fontSize: 11,
        color: 'white',
        fontWeight: 'bold',
    },
    col: {
        height: 23,
        width: 23,

    },
    arrow: {
        height: 8.45,
        width: 11.13,
        marginTop: 7,
        marginLeft: 5,
    },
    main: {
        height: 812,
        width: 391,
        backgroundColor: "#F3FFFE"
    },

    one: {
    },
    back: {

        height: 392,
        width: 404,
        alignSelf: 'center',
    },
    three: {
        height: 112,
        width: 250,
        marginTop: 19,
        marginLeft: 23,
    },
    four: {
        marginTop: 30,
        flexDirection: 'row',
        width: 340,
        height: 44,
        backgroundColor: 'white',
        borderRadius: 30,
        alignSelf: 'center'
    },
    five: {
        height: 22,
        width: 22,
        marginTop: 10,
        margin: 13

    },
    angle: {
        height: 117.5,
        width: 240,
        marginTop: 45,
        marginLeft: 35,
    },
    blow: {
        height: 190,
        width: 112,
    },
    list1: {
        width: 112,
        height: 191,
        marginLeft: 9,
    },
    list: {
        marginLeft: 15,
        marginTop: 7,
        flexDirection: 'row',
    },
})