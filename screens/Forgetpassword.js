import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Forgetpassword = (props) => {
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../image/Welcomescreen.png')}
                style={styles.back}>

                <View style={styles.mid}>
                    <TouchableOpacity style={styles.overlayTextContainer} onPress={() => props.navigation.goBack()}>
                        <Image source={require('../image/ARROW7.png')} style={styles.arrow}></Image></TouchableOpacity>
                    <Image source={require('../image/image77.png')} style={styles.mid1}>
                    </Image>
                </View>
                <View style={styles.center}>
                    <Text style={styles.terms}>Forgot Password</Text>
                    <Text style={styles.terms1}>Please enter your Email</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('../image/image22.png')} style={styles.icon} /><TextInput placeholderTextColor={'#FFFFFF'} style={styles.input} placeholder='Email' keyboardType='email-address' />

                </View>
                <View style={styles.log}>
                    <TouchableOpacity style={styles.termsText} onPress={() => props.navigation.navigate("OTPVerification")}>
                        <View style={styles.log1}>
                            <Text style={styles.termsText1}>Send OTP</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Forgetpassword

const styles = StyleSheet.create({
    back: {
        height: 812,
        width: 410,
    },
    title: {
        alignItems: 'center',
    },
    arrow: {
        height: 38,
        width: 38,
        margin: 20,
        marginTop: 39,
    },
    mid1: {
        width: 200,
        height: 111,
        marginTop: 48
    },
    mid: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    center: {
        alignItems: 'center',
        marginRight: 50,
        marginTop: 50,
    },
    terms: {
        fontSize: 20,
        color: "#D9D9D9",
        fontWeight: 'bold',

    },
    terms1: {
        color: "#D9D9D9",
        fontSize: 15,
        marginTop: 20,
    },
    inputContainer: {
        alignSelf: "center",
        flexDirection: 'row',
        alignItems: 'center',
        width: 322,
        height: 50,
        margin: 7,
        borderColor: '#C4C4C480',
        borderBottomWidth: 1,
        borderRadius: 10,
        marginTop: 43,
    },

    icon: {
        marginHorizontal: 10,
        resizeMode: 'center',
        height: 19.06,
        width: 20.86,

    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        color: 'black',
    },
    log: {
        alignItems: "center",
        marginTop: 55

    },
    log1: {
        width: 305,
        height: 47,
        backgroundColor: "#5CD7D0",
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 80,
    },
    termsText1: {
        color: 'black',
        fontSize: 20,
        marginTop: 7,
        fontWeight: 'bold',
    },

})