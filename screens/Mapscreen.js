import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React from 'react'

const Mapscreen = (props) => {
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../image/blue.png')}
                style={styles.back}>

                <View style={styles.one}>
                    <TouchableOpacity style={styles.overlayTextContainer} onPress={() => props.navigation.goBack()}>
                        <Image source={require('../image/blackarrow.png')} style={styles.two}></Image></TouchableOpacity>
                    <Text style={styles.Text1}>Search Map</Text>
                </View>
                <View style={styles.three}>
                    <ImageBackground source={require('../image/Map.png')} style={styles.back1}>
                        <View style={styles.back3}></View>
                    </ImageBackground>
                </View>
                <View style={styles.four}>
                    <Text style={styles.Text2}>Recent Location</Text>
                </View>
                <ScrollView>
                    <TouchableOpacity>
                        <View style={styles.five}>
                            <View style={styles.six}>
                                <Text style={styles.Text3}>28</Text>
                                <Text style={styles.Text4}>JAN</Text>
                            </View>
                            <View style={styles.seven}>
                                <Text style={styles.Text5}>Lorem ipsum dolor sitamet consectetur.</Text>
                                <Text style={styles.Text6}>Tempormi auctor commodo amet sed.</Text>
                                <Text style={styles.Text7}>Read more</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.five}>
                            <View style={styles.six}>
                                <Text style={styles.Text3}>28</Text>
                                <Text style={styles.Text4}>JAN</Text>
                            </View>
                            <View style={styles.seven}>
                                <Text style={styles.Text5}>Lorem ipsum dolor sitamet consectetur.</Text>
                                <Text style={styles.Text6}>Tempormi auctor commodo amet sed.</Text>
                                <Text style={styles.Text7}>Read more</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.five}>
                            <View style={styles.six}>
                                <Text style={styles.Text3}>28</Text>
                                <Text style={styles.Text4}>JAN</Text>
                            </View>
                            <View style={styles.seven}>
                                <Text style={styles.Text5}>Lorem ipsum dolor sitamet consectetur.</Text>
                                <Text style={styles.Text6}>Tempormi auctor commodo amet sed.</Text>
                                <Text style={styles.Text7}>Read more</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.five}>
                            <View style={styles.six}>
                                <Text style={styles.Text3}>28</Text>
                                <Text style={styles.Text4}>JAN</Text>
                            </View>
                            <View style={styles.seven}>
                                <Text style={styles.Text5}>Lorem ipsum dolor sitamet consectetur.</Text>
                                <Text style={styles.Text6}>Tempormi auctor commodo amet sed.</Text>
                                <Text style={styles.Text7}>Read more</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.five}>
                            <View style={styles.six}>
                                <Text style={styles.Text3}>28</Text>
                                <Text style={styles.Text4}>JAN</Text>
                            </View>
                            <View style={styles.seven}>
                                <Text style={styles.Text5}>Lorem ipsum dolor sitamet consectetur.</Text>
                                <Text style={styles.Text6}>Tempormi auctor commodo amet sed.</Text>
                                <Text style={styles.Text7}>Read more</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.five}>
                            <View style={styles.six}>
                                <Text style={styles.Text3}>28</Text>
                                <Text style={styles.Text4}>JAN</Text>
                            </View>
                            <View style={styles.seven}>
                                <Text style={styles.Text5}>Lorem ipsum dolor sitamet consectetur.</Text>
                                <Text style={styles.Text6}>Tempormi auctor commodo amet sed.</Text>
                                <Text style={styles.Text7}>Read more</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.five}>
                            <View style={styles.six}>
                                <Text style={styles.Text3}>28</Text>
                                <Text style={styles.Text4}>JAN</Text>
                            </View>
                            <View style={styles.seven}>
                                <Text style={styles.Text5}>Lorem ipsum dolor sitamet consectetur.</Text>
                                <Text style={styles.Text6}>Tempormi auctor commodo amet sed.</Text>
                                <Text style={styles.Text7}>Read more</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.five}>
                            <View style={styles.six}>
                                <Text style={styles.Text3}>28</Text>
                                <Text style={styles.Text4}>JAN</Text>
                            </View>
                            <View style={styles.seven}>
                                <Text style={styles.Text5}>Lorem ipsum dolor sitamet consectetur.</Text>
                                <Text style={styles.Text6}>Tempormi auctor commodo amet sed.</Text>
                                <Text style={styles.Text7}>Read more</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.five}>
                            <View style={styles.six}>
                                <Text style={styles.Text3}>28</Text>
                                <Text style={styles.Text4}>JAN</Text>
                            </View>
                            <View style={styles.seven}>
                                <Text style={styles.Text5}>Lorem ipsum dolor sitamet consectetur.</Text>
                                <Text style={styles.Text6}>Tempormi auctor commodo amet sed.</Text>
                                <Text style={styles.Text7}>Read more</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

export default Mapscreen

const styles = StyleSheet.create({
    back: {
        height: 812,
        width: 410,
    },
    title: {
        alignItems: 'center',

    },
    one: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 35,
    },
    two: {
        width: 20,
        height: 17,
        marginLeft: 40,
    },
    Text1: {

        fontSize: 22,
        color: '#132135',
        marginLeft: 90,
    },
    three: {
        marginTop: 10,
    },
    back1: {
        height: 287,
        width: 393,
    },
    back3: {

    },
    four: {
        marginLeft: 30,
        marginTop: 11,
    },
    Text2: {

        color: '#132135'
    },
    five: {
        height: 90,
        width: 340,
        backgroundColor: 'white',
        marginLeft: 30,
        marginTop: 9,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 11

    },
    six: {
        height: 55,
        width: 55,
        borderWidth: 1,
        borderColor: '#5CD7D0',
        borderRadius: 5,
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 10,


    },
    Text3: {
        color: '#5CD7D0',
        fontSize: 21,
    },
    Text4: {

        color: '#5CD7D0',
        fontSize: 17,

    },
    Text5: {
        fontSize: 13,
        color: "#C4C4C4",
    },
    Text6: {
        fontSize: 13,
        color: "#C4C4C4",
    },
    Text7: {
        color: '#5CD7D0',
        fontSize: 13,
        marginTop: 4,
    },
    seven: {
        margin: 8,
    },

})