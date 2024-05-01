import { StyleSheet, Text, View, ImageBackground, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Searchpage = (props) => {
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../image/blue.png')}
                style={styles.back}>
                <View style={styles.mid}>
                    <Text style={styles.Text1}>Search</Text>
                    <TouchableOpacity style={styles.overlayTextContainer} onPress={() => props.navigation.goBack()}>
                    <Image source={require('../image/xxxxx.png')}
                        style={styles.back1}></Image>
                        </TouchableOpacity>
                </View>
                <View style={styles.search}>

                    <Image source={require('../image/Action.png')} style={styles.one}></Image>
                    <TextInput placeholderTextColor={'#979797'} style={styles.input} placeholder='Where do you want to go today?' keyboardType='web-search' />

                </View>
                <View style={styles.last}>
                    <Text style={styles.Text2}>Last Searchs</Text>
                    <View style={styles.two}>
                    <TouchableOpacity>
                        <Text style={styles.Text3}>Clear all</Text>
                        </TouchableOpacity></View>
                        
                </View>
                <ScrollView>
                    <View style={styles.maine}>
                        <TouchableOpacity>
                            <View style={styles.lon}>
                                <View style={styles.lon1}>
                                    <Image source={require('../image/lon.png')} style={styles.lon2}></Image>
                                    <View style={styles.lon7}>
                                        <Text style={styles.lon3}>London</Text>
                                        <Text style={styles.lon4}>1 Room + 2 Adults</Text>
                                        <Text style={styles.lon5}>12-22 December</Text>
                                        <Text style={styles.lon8}>Details &gt;&gt; </Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.lon}>
                            <TouchableOpacity>
                                <View style={styles.lon1}>
                                    <Image source={require('../image/paris.png')} style={styles.lon2}></Image>
                                    <View style={styles.lon7}>
                                        <Text style={styles.lon3}>Paris</Text>
                                        <Text style={styles.lon4}>1 Room + 2 Adults</Text>
                                        <Text style={styles.lon5}>12-22 December</Text>
                                        <Text style={styles.lon8}>Details &gt;&gt; </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.lon}>
                            <TouchableOpacity>
                                <View style={styles.lon1}>
                                    <Image source={require('../image/newyork.png')} style={styles.lon2}></Image>
                                    <View style={styles.lon7}>
                                        <Text style={styles.lon3}>New York</Text>
                                        <Text style={styles.lon4}>1 Room + 2 Adults</Text>
                                        <Text style={styles.lon5}>12-22 December</Text>
                                        <Text style={styles.lon8}>Details &gt;&gt; </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.lon}>
                            <TouchableOpacity>
                                <View style={styles.lon1}>
                                    <Image source={require('../image/tokyo.png')} style={styles.lon2}></Image>
                                    <View style={styles.lon7}>
                                        <Text style={styles.lon3}>Tokyo</Text>
                                        <Text style={styles.lon4}>1 Room + 2 Adults</Text>
                                        <Text style={styles.lon5}>12-22 December</Text>
                                        <Text style={styles.lon8}>Details &gt;&gt; </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.lon}>
                            <TouchableOpacity>
                                <View style={styles.lon1}>
                                    <Image source={require('../image/switzerland.png')} style={styles.lon2}></Image>
                                    <View style={styles.lon7}>
                                        <Text style={styles.lon3}>Switzerland</Text>
                                        <Text style={styles.lon4}>1 Room + 2 Adults</Text>
                                        <Text style={styles.lon5}>12-22 December</Text>
                                        <Text style={styles.lon8}>Details &gt;&gt; </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>


            </ImageBackground>

        </View>
    )
}

export default Searchpage

const styles = StyleSheet.create({
    back: {
        height: 812,
        width: 410,
    },
    title: {
        alignItems: 'center',

    },
    Text1: {
        fontSize: 25,
        color: "#132135",
        fontWeight: 'bold',
    },
    back1: {
        width: 19,
        height: 19,
        marginTop: 8,
    },
    mid: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 35,
        margin: -70,
        alignItems: 'center',

    },
    search: {


        marginTop: 99,
        flexDirection: 'row',
        width: 340,
        height: 44,
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 1,
        alignSelf: 'center'


    },

    one: {
        height: 22,
        width: 22,
        marginTop: 10,
        margin: 13

    },
    last: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        margin: 25,
        marginBottom: 1

    },
    Text2: {
        fontSize: 16,
        color: '#132135',
        fontWeight: 'bold',

    },
    Text3: {
        fontSize: 12,
        color: '#5CD7D0'
    },
    two: {
        marginLeft: 200,
    },
    lon: {
        alignSelf: 'center',
    },
    lon1: {
        height: 100,
        width: 320,
        borderRadius: 11,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginTop: 10,
    },
    lon2: {
        width: 214,
        height: 100,
        borderRadius: 12,
    },
    lon7: {
        flexDirection: 'column',
    },
    lon3: {
        color: '#132135',
        fontSize: 16,
        marginTop: 9,
        marginLeft: 7,
        fontWeight: 'bold',

    },
    lon4: {
        fontSize: 10,
        marginLeft: 7,
        marginTop: 2
    },
    lon5: {
        fontSize: 10,
        marginLeft: 7,
        marginTop: 2,
    },
    lon8: {
        fontSize: 12,
        color: '#132135',
        marginTop: 9,
        marginLeft: 45,
        fontWeight: 'bold',
    },
    maine: {

    },

})