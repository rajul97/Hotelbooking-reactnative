import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = (props) => {
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../image/Welcomescreen.png')}
                style={styles.back}>
                <View style={styles.mid}>
                    <Image source={require('../image/image77.png')} style={styles.mid1}>
                    </Image>

                </View>

                <View style={styles.inputContainer}>
                    <Image source={require('../image/image22.png')} style={styles.icon} />
                    <TextInput placeholderTextColor={'#969594'} style={styles.input} placeholder='Email' keyboardType='email-address' />
                </View>
                <View style={styles.inputContainer}>
                    <Image source={require('../image/image23.png')} style={styles.icon} />
                    <TextInput placeholderTextColor={'#969594'} style={styles.input} placeholder='Password' secureTextEntry={true} />
                    <TouchableOpacity>
                        <Image source={require('../image/eye23.png')} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.extra}>
                    <TouchableOpacity style={styles.termsText} onPress={() => props.navigation.navigate("Forgetpassword")}>
                        <Text style={styles.termsText}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.log}>
                    <View style={styles.log1}>
                    <TouchableOpacity style={styles.termsText} onPress={() => props.navigation.navigate("Homepage")}>
                        <Text style={styles.termsText1}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.pink}>
                        <Text style={styles.termsText2}>Don’t have account?</Text>
                        <TouchableOpacity style={styles.termsText} onPress={() => props.navigation.navigate("Signup")}>
                            <Text style={styles.termsText3}>  Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.oh}>
                        <Text style={styles.termsText4}>OR</Text>

                    </View>
                </View>
                <View style={styles.google}>
                    <Image source={require('../image/google.png')} style={styles.icon1}>
                    </Image>
                    <Image source={require('../image/meta.png')} style={styles.icon1}>
                    </Image>
                    <Image source={require('../image/insta.png')} style={styles.icon1}>
                    </Image>

                </View>
            </ImageBackground>
        </View>
    )
}
export default Login

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
        marginTop: 40,
        marginBottom: 110

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
    extra: {
        marginLeft: 250,

    },
    termsText: {
        color: 'white',
        fontSize: 14
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
        marginTop: 80,
    },
    termsText1: {
        color: 'black',
        fontSize: 20,
        marginTop: 5,
        fontWeight: 'bold',
    },
    pink: {
        flexDirection: 'row',
        marginTop: 7
    },
    termsText2: {
        fontSize: 16,
        color: '#C4C4C4'
    },
    termsText3: {
        fontSize: 16,
        color: 'white'


    },
    termsText4: {
        fontSize: 16,
        color: '#C4C4C4'
    },
    marginTop: 5,
    oh: {
        marginTop: 10
    },
    google: {
        flexDirection: 'row',
        alignSelf: 'center',
        margin: 1

    },
    icon1: {
        height: 35,
        width: 35,
        margin: 20,

    },
})