import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Trippage = (props) => {
    return (
        <View style={styles.pol}>
            <ImageBackground source={require('../image/blue.png')}
                style={styles.back}>
                <View style={styles.main}>

                    <View style={styles.one}>
                        <TouchableOpacity style={styles.overlayTextContainer} onPress={() => props.navigation.goBack()}>
                            <Image source={require('../image/blackarrow.png')} style={styles.two}></Image></TouchableOpacity>
                        <Text style={styles.Text1}>My Trip</Text>
                    </View>
                    <ScrollView>
                        <TouchableOpacity>
                            <View style={styles.main}>
                                <View style={styles.one2}>
                                    <Image source={require('../image/leno1.png')} style={styles.one1}>
                                    </Image>
                                    <View style={styles.expo}>
                                        <Text style={styles.Text2}>Eiffel Tower</Text>
                                        <Text style={styles.Text3}>Lorem ipsum dolor sitamet consectetur.</Text>
                                        <Text style={styles.Text3}>Tempor mi auctor lectus commodo</Text>
                                        <Text style={styles.Text3}>amet sed.</Text>
                                        <View style={styles.expo1}>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Text style={styles.Text4}>4 (5.0)
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>

                            <View style={styles.main}>
                                <View style={styles.one2}>
                                    <Image source={require('../image/leno2.png')} style={styles.one1}>
                                    </Image>
                                    <View style={styles.expo}>
                                        <Text style={styles.Text2}>Maiden Voyage</Text>
                                        <Text style={styles.Text3}>Lorem ipsum dolor sitamet consectetur.</Text>
                                        <Text style={styles.Text3}>Tempor mi auctor lectus commodo</Text>
                                        <Text style={styles.Text3}>amet sed.</Text>
                                        <View style={styles.expo1}>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Text style={styles.Text4}>4 (5.0)
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.main}>
                                <View style={styles.one2}>
                                    <Image source={require('../image/leno3.png')} style={styles.one1}>
                                    </Image>
                                    <View style={styles.expo}>
                                        <Text style={styles.Text2}>Beten Path, japan</Text>
                                        <Text style={styles.Text3}>Lorem ipsum dolor sitamet consectetur.</Text>
                                        <Text style={styles.Text3}>Tempor mi auctor lectus commodo</Text>
                                        <Text style={styles.Text3}>amet sed.</Text>
                                        <View style={styles.expo1}>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Text style={styles.Text4}>4 (5.0)
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.main}>
                                <View style={styles.one2}>
                                    <Image source={require('../image/leno1.png')} style={styles.one1}>
                                    </Image>
                                    <View style={styles.expo}>
                                        <Text style={styles.Text2}>Eiffel Tower</Text>
                                        <Text style={styles.Text3}>Lorem ipsum dolor sitamet consectetur.</Text>
                                        <Text style={styles.Text3}>Tempor mi auctor lectus commodo</Text>
                                        <Text style={styles.Text3}>amet sed.</Text>
                                        <View style={styles.expo1}>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Text style={styles.Text4}>4 (5.0)
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.main}>
                                <View style={styles.one2}>
                                    <Image source={require('../image/leno2.png')} style={styles.one1}>
                                    </Image>
                                    <View style={styles.expo}>
                                        <Text style={styles.Text2}>Maiden Voyage</Text>
                                        <Text style={styles.Text3}>Lorem ipsum dolor sitamet consectetur.</Text>
                                        <Text style={styles.Text3}>Tempor mi auctor lectus commodo</Text>
                                        <Text style={styles.Text3}>amet sed.</Text>
                                        <View style={styles.expo1}>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Text style={styles.Text4}>4 (5.0)
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={styles.main}>
                                <View style={styles.one2}>
                                    <Image source={require('../image/leno3.png')} style={styles.one1}>
                                    </Image>
                                    <View style={styles.expo}>
                                        <Text style={styles.Text2}>Beten Path, japan</Text>
                                        <Text style={styles.Text3}>Lorem ipsum dolor sitamet consectetur.</Text>
                                        <Text style={styles.Text3}>Tempor mi auctor lectus commodo</Text>
                                        <Text style={styles.Text3}>amet sed.</Text>
                                        <View style={styles.expo1}>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Text style={styles.Text4}>4 (5.0)
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.main}>
                                <View style={styles.one2}>
                                    <Image source={require('../image/leno2.png')} style={styles.one1}>
                                    </Image>
                                    <View style={styles.expo}>
                                        <Text style={styles.Text2}>Maiden Voyage</Text>
                                        <Text style={styles.Text3}>Lorem ipsum dolor sitamet consectetur.</Text>
                                        <Text style={styles.Text3}>Tempor mi auctor lectus commodo</Text>
                                        <Text style={styles.Text3}>amet sed.</Text>
                                        <View style={styles.expo1}>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Text style={styles.Text4}>4 (5.0)
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>

                            <View style={styles.main}>
                                <View style={styles.one2}>
                                    <Image source={require('../image/leno3.png')} style={styles.one1}>
                                    </Image>
                                    <View style={styles.expo}>
                                        <Text style={styles.Text2}>Beten Path, japan</Text>
                                        <Text style={styles.Text3}>Lorem ipsum dolor sitamet consectetur.</Text>
                                        <Text style={styles.Text3}>Tempor mi auctor lectus commodo</Text>
                                        <Text style={styles.Text3}>amet sed.</Text>
                                        <View style={styles.expo1}>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Image source={require('../image/STARR.png')} style={styles.star1}>
                                            </Image>
                                            <Text style={styles.Text4}>4 (5.0)
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>


                    </ScrollView>

                </View>
            </ImageBackground>
        </View>
    )
}

export default Trippage

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
        marginTop: 30,
        marginBottom: 20,
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
    one2: {
        height: 110,
        width: 314,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        alignSelf: 'center',
        flexDirection: "row",
    },
    one1: {
        height: 85,
        width: 67,
        borderRadius: 5,
        margin: 10,
    },
    Text2: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 7,
        marginBottom: 4,
    },
    Text3: {
        fontSize: 12,
        color: "#C4C4C4",


    },
    star1: {
        height: 12.21,
        width: 12.79,
    },
    expo1: {
        flexDirection: "row",
        marginTop: 5,
    },
    Text4: {
        marginLeft: 5,
        marginTop: -1.7,
        fontSize: 11,
        color: '#666666'
    },
    main: {
        marginTop: 10,
    },



})