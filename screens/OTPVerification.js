import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const OTPVerification = (props) => {
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
                    <Text style={styles.terms}>Verification</Text>
                    <Text style={styles.terms1}>Please enter the code we sent you to email</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholderTextColor={'#FFFFFF'} style={styles.inputBox} placeholder="*" keyboardType='phone-pad' />
                    <TextInput placeholderTextColor={'#FFFFFF'} style={styles.inputBox} placeholder="*" keyboardType='phone-pad' />
                    <TextInput placeholderTextColor={'#FFFFFF'} style={styles.inputBox} placeholder="*" keyboardType='phone-pad' />
                    <TextInput placeholderTextColor={'#FFFFFF'} style={styles.inputBox} placeholder="*" keyboardType='phone-pad' />
                </View>
                <View style={styles.code}>
                    <Text style={styles.code1}>Didn’t Receive the Code?</Text>
                    <Text style={styles.code2}>Resend Code</Text>
                </View>
                <View style={styles.log}>

                    <View style={styles.log1}>
                        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Createpassword")}>
                            <Text style={styles.termsText1}>Verify</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default OTPVerification

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
        flexDirection: 'row',
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputBox: {

        borderRadius: 1,
        width: 65,
        height: 50,
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 24,
        borderColor: '#C4C4C480',
        borderBottomWidth: 1,
    },
    code: {
        alignItems: 'center',
        marginTop: 25,
    },
    code1: {
        color: '#D9D9D9',
        fontSize: 15,
    },
    code2: {
        color: '#5CD7D0',
        marginTop: 5,
        fontSize: 15,
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