import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'

const Livingroom = () => {
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
                    <View style={styles.search}>
                        <Image source={require('../image/Action.png')} style={styles.three}></Image>
                        <TextInput placeholderTextColor={'#979797'} style={styles.input} placeholder='Search Products...' keyboardType='web-search' />
                    </View>
                    <View style={styles.seat}>
                        <TouchableOpacity>
                            <View style={styles.sofa}>
                                <Image source={require('../image/sofa1.png')} style={styles.pillow1}></Image>
                                <Text style={styles.text2}>Gray Sofa</Text>
                                <Text style={styles.text3}>Two-seat sofa</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.sofa1}>
                                <Image source={require('../image/rok1.png')} style={styles.pillow2}></Image>
                                <Text style={styles.text2}>Gray Sofa</Text>
                                <Text style={styles.text3}>Two-seat sofa</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.sofa1}>
                                <Image source={require('../image/rok2.png')} style={styles.pillow2}></Image>
                                <Text style={styles.text2}>Gray Sofa</Text>
                                <Text style={styles.text3}>Two-seat sofa</Text>
                            </View>
                        </TouchableOpacity>



                        <TouchableOpacity>
                            <View style={styles.sofa}>
                                <Image source={require('../image/rok3.png')} style={styles.pillow1}></Image>
                                <Text style={styles.text2}>Gray Sofa</Text>
                                <Text style={styles.text3}>Two-seat sofa</Text>
                            </View>
                        </TouchableOpacity>





                        <TouchableOpacity>
                            <View style={styles.sofa}>
                                <Image source={require('../image/rok4.png')} style={styles.pillow1}></Image>
                                <Text style={styles.text2}>Gray Sofa</Text>
                                <Text style={styles.text3}>Two-seat sofa</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.sofa}>
                                <Image source={require('../image/rok5.png')} style={styles.pillow1}></Image>
                                <Text style={styles.text2}>Gray Sofa</Text>
                                <Text style={styles.text3}>Two-seat sofa</Text>
                            </View>
                        </TouchableOpacity>

                    </View>



                </ScrollView>



            </ImageBackground>
        </View>
    )
}
export default Livingroom

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
        marginBottom: 50,

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

    search: {

        flexDirection: 'row',
        width: 340,
        height: 44,
        backgroundColor: 'white',
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: -18,
    },


    three: {
        height: 22,
        width: 22,
        marginTop: 10,
        margin: 13

    },
    six: {
        height: 100,
        width: 320,
        borderRadius: 11,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginTop: 20,

        alignSelf: 'center',
    },
    sofa: {
        height: 234,
        width: 150,
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        margin:5,


    },
    sofa1: {
        height: 214,
        width: 150,
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        margin:5,


    },

    pillow1: {
        height: 200,
        width: 149,
        borderRadius: 10,

    },
    pillow2: {
        height: 180,
        width: 150,
        borderRadius: 10,

    },
    text2: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#132135",
        marginLeft: 7,
    },
    text3: {
        fontSize: 10,
        color: "#132135",
        marginLeft: 7,
    },

})