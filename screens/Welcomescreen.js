import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default Welcomescreen = (props) => {
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../image/Welcomescreen.png')}
                style={styles.back}>

                <View style={styles.title}>
                    <Text style={styles.title1}>Welcome</Text>
                    <Image source={require('../image/image1.png')}
                        style={styles.title2}></Image>
                    <View style={styles.tt}>
                        <Text style={styles.title3}>Lorem ipsum dolor sit amet consectetur. Feugiat in</Text>
                        <Text style={styles.title4}>quam tortor nec commodo blandit massa. Velit </Text>
                        <Text style={styles.title5}>volutpat quis cras nisl sagittis sed</Text>
                    </View>
                </View>
                <View style={styles.title6}>
                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Login")}>
                        <View style={styles.title7}>
                            <Text style={styles.title8}>Log In</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.middle} onPress={() => props.navigation.navigate("Signup")}>
                        <View style={styles.title9}>
                            <Text style={styles.title10}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}



const styles = StyleSheet.create({
    back: {
        height: 812,
        width: 410,
    },
    title: {
        alignItems: 'center',
    },
    title1: {
        fontSize: 35,
        color: 'white',
        marginTop: 150,
        fontWeight: 'bold',
    },
    title2: {
        marginTop: 70,
        width: 290,
        height: 162
    },
    tt: {
        alignItems: 'center',
        marginTop: 30,

    },
    title4: {
        color: 'white'
    },
    title3: {
        color: 'white'
    },
    title5: {
        color: 'white'
    },
    title6: {
        flexDirection: 'row',
        marginTop: 95,
        marginLeft: 40,
        borderWidth: 1,
        alignSelf: 'center',
        marginRight: 50,
        borderColor: "#5CD7D0",
        borderRadius: 10


    },
    title7: {
        width: 152,
        height: 43,
        backgroundColor: '#5CD7D0',
        borderRadius: 10,
        alignItems: "center",


    },

    title8: {
        color: "black",
        fontSize: 20,
        margin: 5,
        fontWeight: 'bold',
    },
    title9: {
        width: 152,
        height: 43,
        fontWeight: 'bold',


    },
    title10: {
        color: "#5CD7D0",
        fontSize: 20,
        marginLeft: 40,
        marginTop: 5

    },
})