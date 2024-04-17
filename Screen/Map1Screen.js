import React from 'react';
import {StyleSheet,View, ImageBackground, Text,Dimensions, TouchableOpacity, StatusBar, SafeAreaView, Image, TextInput,Animated } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faLessThan, faBell, faGear, faEllipsis, faLocationDot, faShuffle, faThumbTack,faLocationArrow, faBars,faSquareUp } from '@fortawesome/free-solid-svg-icons';

const Map1Screen = () => {
    const slide = React.useRef(new Animated.Value(0));

    const slideUp = () =>{
        Animated.timing(slide,{
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start();
    };

    const slideDown = () =>{
        Animated.timing(slide,{
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
        }).start();
    };

    return (
        <ImageBackground
            source={require('../assets/backimage.png')}
            style={styles.background}
        >
            <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
                <StatusBar barStyle="auto" />

                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed!')}>
                        <FontAwesomeIcon icon={faLessThan} size={30} color="#407AFF" />
                    </TouchableOpacity>
                    <Image source={require('../assets/image2.png')} style={styles.image} />
                    <View style={styles.textContainer} >
                        <Text>Profit maker</Text>
                        <Text>Mr.Wheelz</Text>
                    </View>
                    <View style={styles.notificationIconContainer}>
                        <FontAwesomeIcon icon={faBell} size={24} color="#FFFFFF" style={{ marginTop: 10 }} />
                        <View style={styles.notificationBadge}>
                            <Text style={styles.badgeText}>5</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed!')}>
                        <FontAwesomeIcon icon={faGear} size={30} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                <View style={styles.rowContainer}>
                    <Image source={require('../assets/location.png')} />
                    <View style={styles.search}>
                        <TextInput
                            style={styles.input}
                            placeholder="Your current location"
                            placeholderTextColor="#EBEBF5"
                            color="#EBEBF5" />
                    </View>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faEllipsis} size={20} color='#EBEBF5' />
                    </TouchableOpacity>
                </View>

                <View style={styles.rowContainer}>
                    <FontAwesomeIcon icon={faLocationDot} size={20} color='#EBEBF5' />
                    <View style={styles.search}>
                        <TextInput
                            style={styles.input}
                            placeholder="Work"
                            placeholderTextColor="#EBEBF5"
                            color="#EBEBF5" />
                    </View>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faShuffle} size={20} color='#EBEBF5' />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}} >
                    <TouchableOpacity style={styles.buttonIconn} onPress={() => console.log('ThumbTack pressed!')}>
                        <FontAwesomeIcon icon={faBars} size={25} color='#FFFFFF' style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonIcon} onPress={() => console.log('ThumbTack pressed!')}>
                        <View style={{flexDirection:'row' }} >
                            <FontAwesomeIcon icon={faLocationArrow} size={25} color='#FFFFFF' style={styles.icon}/>
                            <Text style={styles.inputa} >Start</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonIconn} onPress={() => console.log('ThumbTack pressed!')}>
                        <FontAwesomeIcon icon={faThumbTack} size={25} color='#FFFFFF' style={styles.icon}/>
                    </TouchableOpacity>
                </View >
                <View style={styles.backDrop}>
                    <View style={styles.bottomSheet}>

                <View style={{flexDirection:'row'}} >
                    <View>
                        {/* <FontAwesomeIcon icon="fa-regular fa-gauge-circle-plus" /> */}
                        <Text style={styles.input}>Km</Text>
                    </View>    
                    <View>
                        {/*<FontAwesomeIcon icon="fa-solid fa-chart-line-up" /> */}
                        <Text style={styles.input}>Following</Text>
                    </View>
                    <View>
                        {/* <FontAwesomeIcon icon="fa-light fa-map" /> */}
                        <Text style={styles.input}>Map</Text>
                    </View>
                    <View>
                        {/*<FontAwesomeIcon icon="fa-light fa-square-up" />*/}
                        <Text style={styles.input} >Saved</Text>
                    </View>
                </View>
                </View>
                </View>


            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#444',
        borderRadius: 30,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10,
    },
    notificationIconContainer: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    notificationBadge: {
        backgroundColor: 'blue',
        borderRadius: 10,
        marginLeft: -5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
    },
    badgeText: {
        color: 'black',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'cover',
        backgroundColor:'black',
    },
    textContainer: {
        alignItems: 'center',
    },
    search: {
        backgroundColor: '#1D222E',
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        flex: 1,
    },
    input: {
        color: '#EBEBF5',
        fontSize: 20,
        padding: 10,
        borderRadius: 5,
    },
    inputa:{
        color: '#FFFFFF',
        fontSize: 20,
        padding: 10,
        borderRadius: 5,
        alignSelf: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonIconn: {
        backgroundColor: '#2D2D2D',
        borderRadius: 30,
        width: 60,
        height: 50,
        marginHorizontal: 5,
    },
    buttonIcon: {
        backgroundColor: '#407AFF',
        borderRadius: 30,
        width: 100,
        height: 50,
        marginHorizontal: 5,
    },
    icon:{
        color: '#FFFFFF',
        fontSize: 20,
        alignSelf: 'center',
    },
    backDrop:{
        position: 'absolute',
        flex:1,
        top: 0,
        left:0,
        marginLeft: 20,
        right: 0,
        marginBottom:20,
        width:'90%',
        height:'100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'flex-end',
        alighnItems: 'center',
    },
    bottomSheet:{
        width:'100%',
        height:'40%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor:'#FFFFFF',
        alignItems: 'center',

    },
});
export default Map1Screen;
