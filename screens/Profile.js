import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, processColor } from 'react-native'
import React, { useState } from 'react';
import Slider from 'react-native-slider';





const Profile = () => {
    const [progress, setProgress] = useState(0);
    return (
        <View style={styles.main}>
            <View style={styles.true}>
                <Text style={styles.profile}>My Profile</Text>
            </View>
            <View style={styles.photo}>
                <Image source={require('../image/photo1.png')} style={styles.plus}>
                </Image>
                <Text style={styles.profile2}>Glenn Wong</Text>
                <Text style={styles.profile3}>Hello@thecompany.com</Text>
            </View>

            <View style={styles.white}>
                <View style={styles.black}>
                    <Text style={styles.profile4}>Address Line 1</Text>
                    <Text style={styles.profile5}>3880 Point</Text>
                </View>
                <View style={styles.black1}>
                    <Text style={styles.profile6}>12345 City, Country</Text>
                    <Text style={styles.profile7}>Gold Member</Text>
                </View>
            </View>

            <View style={styles.pla}>
                <Text style={styles.profile8}>Progress to Platinum Level</Text>
            </View>
            <View style={{ width: 330, height: 17, marginLeft: 30, borderColor: '#5CD7D0', borderRadius: 10, marginTop: 10,borderWidth:2,  }}>
                <Slider
                    style={{ flex:1,height:110,}}
                    value={progress}
                    trackStyle={{height:15,borderRadius:10,}}
                    tint
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor="#5CD7D0"
                    maximumTrackTintColor="#F3FFFE"

                    thumbTintColor="white" 
                    thumbStyle={{
                        borderWidth: 1,
                        height:20,
                        width:20,
                        borderColor: '#5CD7D0', // Set border color to blue
                      }}
                    
                    
                    
                    onValueChange={value => setProgress(value)}
                />
            </View>

            <TouchableOpacity></TouchableOpacity>
            <View style={styles.plati}>
                <Text style={styles.profile9}>Silver 500</Text>
                <Text style={styles.profile10}>Gold 1500</Text>
                <Text style={styles.profile11}>Platinum 2500</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.bar}>

                    <View style={styles.bar1}>
                        <Text style={styles.profile12}>Silver</Text>
                        <Text style={styles.profile13}> &bull; Checkin</Text>
                    </View>
                    <View style={styles.bar2}>
                        <Text style={styles.profile14}>Benefit</Text>
                        <Text style={styles.profile15}> &bull; 5% Discount</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.bar}>

                    <View style={styles.bar1}>
                        <Text style={styles.profile12}>Gold</Text>
                        <Text style={styles.profile13}> Room Upgrade</Text>
                    </View>

                    <View style={styles.bar2}>
                        <Text style={styles.profile14}>Benefit</Text>
                        <Text style={styles.profile15}> &bull; 10% Discount</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.bar}>
                    <View style={styles.bar1}>
                        <Text style={styles.profile12}>Platinum</Text>
                        <Text style={styles.profile17}>Lorem ipsum dolor sit amet.</Text>
                    </View>
                    <View style={styles.bar2}>
                        <Text style={styles.profile14}>Benefit</Text>
                        <Text style={styles.profile18}>Lorem ipsum dolor sit amet.</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({

    main: {
        height: 812,
        width: 391,
        backgroundColor: "#F3FFFE"
    },
    true: {
        height: 140,
        width: 400,
        backgroundColor: "#5CD7D0",
        alignSelf: 'center',
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    profile: {
        alignSelf: 'center',
        marginTop: 43,
        fontSize: 22,
        color: "#132135"
    },
    plus: {
        height: 100,
        width: 100,
        alignSelf: 'center',
        marginTop: -50
    },
    profile2: {
        alignSelf: 'center',
        fontSize: 16,
        color: "#000000",
        marginTop: 7,
    },
    profile3: {
        alignSelf: "center",
        color: "#000000",
        fontSize: 12,
    },
    white: {
        backgroundColor: '#FFFFFF',
        height: 64,
        width: 390,
        marginTop: 30,
    },
    black: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 35,
    },
    black1: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 35,
    },
    profile4: {
        fontSize: 14,
        color: '#000000',
    },
    profile5: {
        fontSize: 14,
        color: '#000000',
        marginLeft: 150,
    },
    profile6: {
        fontSize: 14,
        color: '#000000',
    },
    profile7: {
        fontSize: 14,
        color: '#000000',
        marginLeft: 105,
    },
    pla: {
        alignSelf: 'center',
        marginTop: 35,
    },
    profile8: {
        fontSize: 18,
        color: 'black',
        fontWeight: '400',
    },
    plati: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    profile9: {
        fontSize: 10,
        color: 'black',
        marginLeft: 50,
    },
    profile10: {
        fontSize: 10,
        color: 'black',
        marginLeft: 75,
    },
    profile11: {
        fontSize: 10,
        color: 'black',
        marginLeft: 70,
    },
    bar: {
        height: 62,
        width: 310,
        borderRadius: 12,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginLeft: 10,
        marginTop: 10,
        borderWidth: 2,
        borderColor: "white"
    },
    bar1: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 30,
    },
    bar2: {
        flexDirection: 'row',
        marginLeft: 30,
    },
    profile12: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold',
    },
    profile13: {
        fontSize: 12,
        marginTop: 3,
        marginLeft: 70,
        color: 'black',
    },
    profile14: {
        fontSize: 14,
        color: 'black',
    },
    profile15: {
        marginTop: 3,
        marginLeft: 62,
        fontSize: 12,
        color: 'black',
    },
    profile17: {
        fontSize: 12,
        color: 'black',
        marginLeft: 42,
    },
    profile18: {
        fontSize: 12,
        color: 'black',
        marginLeft: 55,
    }
})
