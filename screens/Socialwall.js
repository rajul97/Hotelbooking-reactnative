import { StyleSheet, Text, ImageBackground, Image, TextInput, ScrollView, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Socialwall = (props) => {
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../image/blue.png')}
                style={styles.back}>

                <View style={styles.one}>
                <TouchableOpacity style={styles.overlayTextContainer} onPress={() => props.navigation.goBack()}>
                        <Image source={require('../image/blackarrow.png')} style={styles.two}></Image></TouchableOpacity>
                    <Text style={styles.Text1}>Social Wall</Text>
                </View>
                <View style={styles.social}>
                    <TouchableOpacity>
                        <View style={styles.three}>
                            <View style={styles.one1}>
                                <ImageBackground source={require('../image/soc1.png')} style={styles.col1}>
                                    <Image source={require('../image/soc3.png')} style={styles.col2}></Image>
                                </ImageBackground>
                            </View>
                            <View style={styles.col4}>
                                <Image source={require('../image/soc2.png')} style={styles.col5}>
                                </Image>
                                <Text style={styles.Text2}>Lorem Ipsum</Text>
                            </View>
                            <View style={styles.col7}>
                                <Text style={styles.Text3}>Lorem ipsum dolor sit amet </Text>
                                <Text style={styles.Text4}>consec tetur. Faucibus gravidaorciut </Text>
                                <Text style={styles.Text5}>volutpat mattisodio enim pulvinar.</Text>
                            </View>
                            <View style={styles.col8}>
                                <Image source={require('../image/x.png')} style={styles.col9}></Image>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.instagram}>
                            <View style={styles.one1}>
                                <ImageBackground source={require('../image/rec1.png')} style={styles.dan}>

                                </ImageBackground>
                            </View>
                            <View style={styles.col4}>
                                <Image source={require('../image/rec2.png')} style={styles.col5}>
                                </Image>
                                <Text style={styles.Text2}>Lorem Ipsum</Text>
                            </View>
                            <View style={styles.col7}>
                                <Text style={styles.Text3}>Lorem ipsum dolor sit amet </Text>
                                <Text style={styles.Text4}>consec tetur. Faucibus gravidar. </Text>

                            </View>
                            <View style={styles.col8}>
                                <Image source={require('../image/instagram.png')} style={styles.col9}></Image>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.instagram}>
                            <View style={styles.one1}>
                                <ImageBackground source={require('../image/rec1.png')} style={styles.dan}>

                                </ImageBackground>
                            </View>
                            <View style={styles.col4}>
                                <Image source={require('../image/rec2.png')} style={styles.col5}>
                                </Image>
                                <Text style={styles.Text2}>Lorem Ipsum</Text>
                            </View>
                            <View style={styles.col7}>
                                <Text style={styles.Text3}>Lorem ipsum dolor sit amet </Text>
                                <Text style={styles.Text4}>consec tetur. Faucibus gravidar. </Text>

                            </View>
                            <View style={styles.col8}>
                                <Image source={require('../image/instagram.png')} style={styles.col9}></Image>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={styles.three}>
                            <View style={styles.one1}>
                                <ImageBackground source={require('../image/oo1.png')} style={styles.col1}>
                                    <Image source={require('../image/soc3.png')} style={styles.col2}></Image>
                                </ImageBackground>
                            </View>
                            <View style={styles.col4}>
                                <Image source={require('../image/oo2.png')} style={styles.col5}>
                                </Image>
                                <Text style={styles.Text2}>Lorem Ipsum</Text>
                            </View>
                            <View style={styles.col7}>
                                <Text style={styles.Text3}>Lorem ipsum dolor sit amet </Text>
                                <Text style={styles.Text4}>consec tetur. Faucibus gravidaorciut </Text>
                                <Text style={styles.Text5}>volutpat mattisodio enim pulvinar.</Text>
                            </View>
                            <View style={styles.col8}>
                                <Image source={require('../image/facebook.png')} style={styles.col9}></Image>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={styles.three}>
                            <View style={styles.one1}>
                                <ImageBackground source={require('../image/rr1.png')} style={styles.col1}>
                                    <Image source={require('../image/rr2.png')} style={styles.col2}></Image>
                                </ImageBackground>
                            </View>
                            <View style={styles.col4}>
                                <Image source={require('../image/rr3.png')} style={styles.col5}>
                                </Image>
                                <Text style={styles.Text2}>Lorem Ipsum</Text>
                            </View>
                            <View style={styles.col7}>
                                <Text style={styles.Text3}>Lorem ipsum dolor sit amet </Text>
                                <Text style={styles.Text4}>consec tetur. Faucibus gravidaorciut </Text>
                                <Text style={styles.Text5}>volutpat mattisodio enim pulvinar.</Text>
                            </View>
                            <View style={styles.col8}>
                                <Image source={require('../image/x.png')} style={styles.col9}></Image>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={styles.instagram}>
                            <View style={styles.one1}>
                                <ImageBackground source={require('../image/lo1.png')} style={styles.dan}>
                                    <Image source={require('../image/rr2.png')} style={styles.col2}></Image>
                                </ImageBackground>
                            </View>
                            <View style={styles.col4}>
                                <Image source={require('../image/lo2.png')} style={styles.col5}>
                                </Image>
                                <Text style={styles.Text2}>Lorem Ipsum</Text>
                            </View>
                            <View style={styles.col7}>
                                <Text style={styles.Text3}>Lorem ipsum dolor sit amet </Text>
                                <Text style={styles.Text4}>consec tetur. Faucibus gravidaorciut </Text>

                            </View>
                            <View style={styles.col8}>
                                <Image source={require('../image/instagram.png')} style={styles.col9}></Image>
                            </View>
                        </View>
                    </TouchableOpacity>





                </View>





            </ImageBackground>
        </View>
    )
}

export default Socialwall

const styles = StyleSheet.create({
    back: {
        height: 812,
        width: 410,
    },
    title: {
        alignItems: 'center',

    },
    one: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 35,
    },
    two: {
        width: 20,
        height: 17,
        marginLeft: 40,
    },
    Text1: {
        fontWeight: "bold",
        fontSize: 22,
        color: '#132135',
        marginLeft: 90,
    },
    three: {
        height: 200,
        width: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 11,
        borderWidth: 1,
        borderColor:'white',
        margin: 4,
        marginLeft: 20,

    },
    instagram: {

        height: 180,
        width: 150,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin: 4,
        borderWidth: 1,
        marginLeft: 20,
        borderColor:'white',



    },
    dan: {
        height: 84,
        width: 126,
        marginTop: 10,


    },

    col1: {
        height: 100,
        width: 126,
        marginTop: 10
    },
    col2: {
        height: 25,
        width: 25,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 38,

    },
    one1: {
        alignItems: 'center',

    },
    col4: {
        flexDirection: 'row',
        marginTop: 8,
    },
    col5: {
        height: 25,
        width: 25,
        marginLeft: 10,

    },
    Text2: {
        marginLeft: 3.5,
        color: '#132135',
        fontSize: 10,
        fontWeight: 'bold',
        marginTop: 3,
    },
    Text3: {
        fontSize: 8,
        color: "#848688",
        marginLeft: 39,
        marginTop: -7
    },
    Text4: {
        fontSize: 8,
        color: "#848688",
        marginLeft: 8,
    },
    Text5: {
        fontSize: 8,
        color: "#848688",
        marginLeft: 8,
    },
    col9: {
        height: 25,
        width: 25,
    },
    col8: {
        marginLeft: 110,
        marginTop: 2,
    },
    social: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 25,
        marginLeft: 20,


    },


})