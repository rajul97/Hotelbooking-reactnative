import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'

const Livingroom1 = () => {
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../image/blue.png')}
                style={styles.back}>
                <ScrollView>

                    <View style={styles.one}>
                        <TouchableOpacity>
                            <Image source={require('../image/Vector.png')} style={styles.two}></Image></TouchableOpacity>
                        <Text style={styles.Text1}>Living Room</Text>
                    </View>

                    <View style={styles.proto}>
                        <View style={styles.png}>
                            <Image source={require('../image/rrrrr1.png')} style={styles.photo}></Image>
                        </View>
                        <View style={styles.col1}>
                            <View style={styles.xol1}>
                                <Image source={require('../image/heart.png')} style={styles.raw}>
                                </Image>
                                <Text style={styles.seven}>1347</Text>
                            </View>

                            <View style={styles.xol2}>
                                <Image source={require('../image/thirdeye.png')} style={styles.raw}>
                                </Image>
                                <Text style={styles.seven}>19789</Text>
                            </View>

                            <View style={styles.xol3}>
                                <Image source={require('../image/Group.png')} style={styles.raw}>
                                </Image>
                                <Text style={styles.seven}>An hour ago</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.proto}>
                    <View style={styles.png}>
                        <Image source={require('../image/sofa23.png')} style={styles.photo}></Image>
                    </View>
                    <View style={styles.col1}>
                        <View style={styles.xol1}>
                            <Image source={require('../image/heart.png')} style={styles.raw}>
                            </Image>
                            <Text style={styles.seven}>1347</Text>
                        </View>

                        <View style={styles.xol2}>
                            <Image source={require('../image/thirdeye.png')} style={styles.raw}>
                            </Image>
                            <Text style={styles.seven}>19789</Text>
                        </View>

                        <View style={styles.xol3}>
                            <Image source={require('../image/Group.png')} style={styles.raw}>
                            </Image>
                            <Text style={styles.seven}>An hour ago</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.proto}>
                <View style={styles.png}>
                    <Image source={require('../image/sofa78.png')} style={styles.photo}></Image>
                </View>
                <View style={styles.col1}>
                    <View style={styles.xol1}>
                        <Image source={require('../image/heart.png')} style={styles.raw}>
                        </Image>
                        <Text style={styles.seven}>1347</Text>
                    </View>

                    <View style={styles.xol2}>
                        <Image source={require('../image/thirdeye.png')} style={styles.raw}>
                        </Image>
                        <Text style={styles.seven}>19789</Text>
                    </View>

                    <View style={styles.xol3}>
                        <Image source={require('../image/Group.png')} style={styles.raw}>
                        </Image>
                        <Text style={styles.seven}>An hour ago</Text>
                    </View>
                </View>

            </View>

             

           

                    
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default Livingroom1

const styles = StyleSheet.create({
    back: {
        height: 812,
        width: 410,
    },
    seat: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15,
        marginLeft: 35,
        alignItems: 'center',

    },
    title: {
        alignItems: 'center',

    },
    one: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 20,

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
    proto: {
        height: 234,
        width: 315,
        borderRadius: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        margin: 10

    },
    photo: {
        height: 200,
        width: 314,
        borderRadius: 10,
    },
    raw: {
        height: 12,
        width: 12,

    },
    seven: {
        fontSize: 12,
        color: "#848688",
        margintop: 4,
        marginLeft: 7,
        marginTop: -3,
    },
    xol1: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 19,
    },
    xol2: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 42,
    },
    xol3: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 42,
    },
    col1: {
        flexDirection: 'row',

    },



})