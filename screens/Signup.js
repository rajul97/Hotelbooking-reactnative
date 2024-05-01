import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Signup = (props) => {
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../image/Welcomescreen.png')}
                style={styles.back}>
                <View style={styles.mid}>
                    <Image source={require('../image/image77.png')} style={styles.mid1}>
                    </Image>

                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('../image/user.png')} style={styles.icon} />
                    <TextInput placeholderTextColor={'white'} style={styles.input} placeholder='Full Name' keyboardType='name-phone-pad' />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('../image/image22.png')} style={styles.icon} />
                    <TextInput placeholderTextColor={'white'} style={styles.input} placeholder='Email' keyboardType='email-address' />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('../image/image23.png')} style={styles.icon} />
                    <TextInput placeholderTextColor={'white'} style={styles.input} placeholder='Password' secureTextEntry={true} />
                    <TouchableOpacity>
                        <Image source={require('../image/eye23.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('../image/image23.png')} style={styles.icon} />
                    <TextInput placeholderTextColor={'white'} style={styles.input} placeholder='Confirm Password' secureTextEntry={true} />
                    <TouchableOpacity>
                        <Image source={require('../image/eyeopen.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.log}>
                    <View style={styles.log1}>
                        <TouchableOpacity>
                            <Text style={styles.termsText1}>Sign Up</Text></TouchableOpacity>
                    </View>
                    <View style={styles.pink}>
                        <Text style={styles.termsText2}>Already have an account?</Text>
                        <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Login")}>
                            <Text style={styles.termsText3}>  Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.oh}>
                        <Text style={styles.termsText4}>OR</Text>

                    </View>
                </View>
                <View style={styles.google}>
                    <TouchableOpacity>
                        <Image source={require('../image/google.png')} style={styles.icon1}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../image/meta.png')} style={styles.icon1}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../image/insta.png')} style={styles.icon1}>
                        </Image>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>

    )
}

export default Signup

const styles = StyleSheet.create({
    back: {
        height: 812,
        width: 410,
    },
    title: {
        alignItems: 'center',

    },
    mid: {
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 40,

    },
    mid1: {
        width: 290,
        height: 162,
    },
    inputContainer: {
        alignSelf: "center",
        flexDirection: 'row',
        alignItems: 'center',
        width: 322,
        height: 50,
        margin: 7,
        borderColor: 'white',
        borderBottomWidth: 1,
        borderRadius: 10,
        color: 'white'



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
        color: 'white',

    },
    log: {
        alignItems: "center",


    },
    log1: {
        width: 305,
        height: 47,
        backgroundColor: "#5CD7D0",
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 50,
    },
    termsText1: {
        color: 'black',
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold',
    },
    pink: {
        flexDirection: 'row',
        marginTop: 7,
    },
    termsText2: {
        fontSize: 16,
        color: '#C4C4C4'
    },
    termsText3: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',

    },
    termsText4: {
        fontSize: 16,
        color: '#C4C4C4'
    },

    oh: {
        marginTop: 5
    },
    google: {
        flexDirection: 'row',
        alignSelf: 'center',


    },
    icon1: {
        height: 35,
        width: 35,
        margin: 20

    },
})
