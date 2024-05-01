import { StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

const Splashscreen = (props) => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate("Welcomescreen")
        }, 3000)
    }, [])


    return (
        <View style={styles.main}>
            <ImageBackground source={require('../image/SpleshScreen.png')} style={styles.back}>
                <View style={styles.mid}>
                    <Image source={require('../image/image1.png')} style={styles.back1}>
                    </Image>
                    <TouchableOpacity>
                        <Image source={require('../image/image2.png')} style={styles.back2}></Image></TouchableOpacity>
                </View>
                <View style={styles.title}>
                    <Text style={styles.title1}>Welcome to</Text>
                    <Text style={styles.title2}>CNBG Loyalty App</Text>
                </View>

            </ImageBackground>
        </View>
    )
}

export default Splashscreen

const styles = StyleSheet.create({
    main: {},
    back: {
        width: 400,
        height: 765,
    },
    mid: {
        alignSelf: "center"
    },
    back1: {
        width: 290,
        height: 162,
        marginTop: 35
    },
    back2: {
        width: 74,
        height: 74,
        marginTop: 359,
        marginLeft: 107


    },
    title: {
        marginLeft: 70

    },
    title1: {
        fontSize: 32,
        color: 'white',

    },
    title2: {
        fontSize: 32,
        color: 'white',
    },

})