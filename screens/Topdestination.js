import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React from 'react'

const Topdestination = () => {
    return (
        <View style={styles.main}>
            <ImageBackground source={require('../image/blue.png')}
                style={styles.back}>
                <View style={styles.one}>
                <TouchableOpacity style={styles.overlayTextContainer} onPress={() => props.navigation.goBack()}>
                        <Image source={require('../image/blackarrow.png')} style={styles.two}></Image></TouchableOpacity>
                    <Text style={styles.Text1}>Kuala Lumpur</Text>
                </View>
                <View style={styles.search}>
                    <Image source={require('../image/Action.png')} style={styles.three}></Image>
                    <TextInput placeholderTextColor={'#979797'} style={styles.input} placeholder='Search...' keyboardType='web-search' />
                </View>
                <ScrollView>

                    <TouchableOpacity>
                        <View style={styles.six}>
                            <Image source={require('../image/arte.png')} style={styles.bui}></Image>
                            <View style={styles.seven}>
                                <Text style={styles.Text2}>Arte Plus</Text>
                                <View style={styles.star1}>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Text style={styles.Text3}>4 (5.0)</Text>
                                </View>
                                <View style={styles.doller}>
                                    <Text style={styles.Text4}>$175</Text>
                                    <Text style={styles.Text5}>$150</Text>
                                </View>
                            </View>
                            <View style={styles.blue}>

                                <Text style={styles.Text6}>15 %</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.six}>
                            <Image source={require('../image/im5.png')} style={styles.bui}></Image>
                            <View style={styles.seven}>
                                <Text style={styles.Text2}>Arte Plus</Text>
                                <View style={styles.star1}>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Text style={styles.Text3}>4 (5.0)</Text>
                                </View>
                                <View style={styles.doller}>
                                    <Text style={styles.Text4}>$175</Text>
                                    <Text style={styles.Text5}>$150</Text>
                                </View>
                            </View>
                            <View style={styles.blue}>

                                <Text style={styles.Text6}>15 %</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.six}>
                            <Image source={require('../image/im1.png')} style={styles.bui}></Image>
                            <View style={styles.seven}>
                                <Text style={styles.Text2}>Arte Plus</Text>
                                <View style={styles.star1}>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Text style={styles.Text3}>4 (5.0)</Text>
                                </View>
                                <View style={styles.doller}>
                                    <Text style={styles.Text4}>$175</Text>
                                    <Text style={styles.Text5}>$150</Text>
                                </View>
                            </View>
                            <View style={styles.blue}>

                                <Text style={styles.Text6}>15 %</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={styles.six}>
                            <Image source={require('../image/im2.png')} style={styles.bui}></Image>
                            <View style={styles.seven}>
                                <Text style={styles.Text2}>Arte Plus</Text>
                                <View style={styles.star1}>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Text style={styles.Text3}>4 (5.0)</Text>
                                </View>
                                <View style={styles.doller}>
                                    <Text style={styles.Text4}>$175</Text>
                                    <Text style={styles.Text5}>$150</Text>
                                </View>
                            </View>
                            <View style={styles.blue}>

                                <Text style={styles.Text6}>15 %</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity>
                        <View style={styles.six}>
                            <Image source={require('../image/im3.png')} style={styles.bui}></Image>
                            <View style={styles.seven}>
                                <Text style={styles.Text2}>Arte Plus</Text>
                                <View style={styles.star1}>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Text style={styles.Text3}>4 (5.0)</Text>
                                </View>
                                <View style={styles.doller}>
                                    <Text style={styles.Text4}>$175</Text>
                                    <Text style={styles.Text5}>$150</Text>
                                </View>
                            </View>
                            <View style={styles.blue}>

                                <Text style={styles.Text6}>15 %</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.six}>
                            <Image source={require('../image/im4.png')} style={styles.bui}></Image>
                            <View style={styles.seven}>
                                <Text style={styles.Text2}>Arte Plus</Text>
                                <View style={styles.star1}>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Text style={styles.Text3}>4 (5.0)</Text>
                                </View>
                                <View style={styles.doller}>
                                    <Text style={styles.Text4}>$175</Text>
                                    <Text style={styles.Text5}>$150</Text>
                                </View>
                            </View>
                            <View style={styles.blue}>

                                <Text style={styles.Text6}>15 %</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.six}>
                            <Image source={require('../image/im5.png')} style={styles.bui}></Image>
                            <View style={styles.seven}>
                                <Text style={styles.Text2}>Arte Plus</Text>
                                <View style={styles.star1}>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Text style={styles.Text3}>4 (5.0)</Text>
                                </View>
                                <View style={styles.doller}>
                                    <Text style={styles.Text4}>$175</Text>
                                    <Text style={styles.Text5}>$150</Text>
                                </View>
                            </View>
                            <View style={styles.blue}>

                                <Text style={styles.Text6}>15 %</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.six}>
                            <Image source={require('../image/arte.png')} style={styles.bui}></Image>
                            <View style={styles.seven}>
                                <Text style={styles.Text2}>im1 Plus</Text>
                                <View style={styles.star1}>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Text style={styles.Text3}>4 (5.0)</Text>
                                </View>
                                <View style={styles.doller}>
                                    <Text style={styles.Text4}>$175</Text>
                                    <Text style={styles.Text5}>$150</Text>
                                </View>
                            </View>
                            <View style={styles.blue}>

                                <Text style={styles.Text6}>15 %</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.six}>
                            <Image source={require('../image/im2.png')} style={styles.bui}></Image>
                            <View style={styles.seven}>
                                <Text style={styles.Text2}>Arte Plus</Text>
                                <View style={styles.star1}>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Text style={styles.Text3}>4 (5.0)</Text>
                                </View>
                                <View style={styles.doller}>
                                    <Text style={styles.Text4}>$175</Text>
                                    <Text style={styles.Text5}>$150</Text>
                                </View>
                            </View>
                            <View style={styles.blue}>
                                <Text style={styles.Text6}>15 %</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.six}>
                            <Image source={require('../image/im3.png')} style={styles.bui}></Image>
                            <View style={styles.seven}>
                                <Text style={styles.Text2}>Arte Plus</Text>
                                <View style={styles.star1}>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Image source={require('../image/star.png')} style={styles.star}></Image>
                                    <Text style={styles.Text3}>4 (5.0)</Text>
                                </View>
                                <View style={styles.doller}>
                                    <Text style={styles.Text4}>$175</Text>
                                    <Text style={styles.Text5}>$150</Text>
                                </View>
                            </View>
                            <View style={styles.blue}>
                                <Text style={styles.Text6}>15 %</Text>
                            </View>
                        </View>
                    </TouchableOpacity>


                </ScrollView>

            </ImageBackground>
        </View>
    )
}

export default Topdestination

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
        marginBottom: 50,
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

    search: {

        flexDirection: 'row',
        width: 340,
        height: 44,
        backgroundColor: 'white',
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: -18,



    },
    three: {
        height: 22,
        width: 22,
        marginTop: 10,
        margin: 13

    },
    six: {
        height: 100,
        width: 320,
        borderRadius: 11,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center',
    },
    bui: {
        height: 90,
        width: 90,
    },
    star: {
        height: 12,
        width: 12,
    },
    star1: {
        flexDirection: 'row',
        marginLeft: 7,
        marginTop: 2,
    },
    Text3: {
        fontSize: 11,
        color: '#666666',
        marginLeft: 4,

    },
    doller: {
        flexDirection: 'row',

    }, Text4: {
        fontSize: 14,
        color: '#132135',
        fontWeight: 'bold',
        marginTop: 32,
        marginLeft: 11


    },
    Text5: {
        fontSize: 20,
        color: '#132135',
        fontWeight: 'bold',
        marginTop: 21,
        marginLeft: 9,

    },
    Text2: {
        fontSize: 14,
        color: '#132135',
        marginLeft: 9,
        marginTop: 2

    },
    blue: {
        height: 39,
        width: 39,
        backgroundColor: '#5CD7D0',
        marginLeft: 88,
        borderTopRightRadius: 11,
        borderBottomLeftRadius: 11,

    },
    Text6: {
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: "bold",
        margin: 2,
        marginTop: 7,
    },
    will: {

    },

})