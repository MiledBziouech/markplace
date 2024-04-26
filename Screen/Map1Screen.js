import React,{useState,useEffect} from 'react';
import {StyleSheet,View, ImageBackground, Text,Dimensions, TouchableOpacity, StatusBar, SafeAreaView, Image, TextInput,Animated } from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faLessThan, faBell, faGear, faEllipsis, faLocationDot, faShuffle,faThumbtack,faLocationArrow,faGreaterThan ,faBars,faChartLine, faMap, faUpload, faGaugeSimple } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const Map1Screen = () => {

    const [startLocation, setStartLocation] = useState('');
    const [endLocation, setEndLocation] = useState('');
    const navigation = useNavigation();

    const handleStart = () => {
        // Navigate to Map2Screen and pass startLocation and endLocation as params
        navigation.navigate('Map2Screen', { startLocation:startLocation, endLocation:endLocation });
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
                    <Image source={require('../assets/location.png')} style={styles.locate}/>
                    <View style={styles.search}>
                        <TextInput
                            style={styles.input}
                            placeholder="Your current location"
                            placeholderTextColor="#EBEBF5"
                            color="#EBEBF5"
                            onChangeText={text => setStartLocation(text)}
                            value={startLocation} 
                            />
                    </View>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faEllipsis} size={20} color='grey' style={{marginRight:3}}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.rowContainer}>
                    <FontAwesomeIcon icon={faLocationDot} size={20} color='grey' />
                    <View style={styles.search}>
                        <TextInput
                            style={styles.input}
                            placeholder="Work"
                            placeholderTextColor="#EBEBF5"
                            color="#EBEBF5"
                            onChangeText={text => setEndLocation(text)}
                            value={endLocation} 
                            />
                    </View>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faShuffle} size={20} color='grey' />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:20}} >
                    <TouchableOpacity style={styles.buttonIconn1} onPress={() => console.log('ThumbTack pressed!')}>
                        <FontAwesomeIcon icon={faBars} size={25} color='#FFFFFF' style={styles.icon1} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonIcon} onPress={handleStart}>
                        <View style={{flexDirection:'row' }} >
                            <FontAwesomeIcon icon={faLocationArrow} size={25} color='#FFFFFF' style={styles.icon}/>
                            <Text style={styles.inputa} >Start</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonIconn2} onPress={() => console.log('ThumbTack pressed!')}>
                        <FontAwesomeIcon icon={faThumbtack} color="#fcfcfc" style={styles.icon2} size={25}/>
                    </TouchableOpacity>
                </View >





            <View style={styles.bottomSheetContainer}>
                <View style={styles.Content} >
                <View style={styles.Line1}/>
                <View style={{flexDirection:'row'}} >
                    <FontAwesomeIcon icon={faLessThan} size={20} color="#EBEBF5" style={styles.Less} />
                    <FontAwesomeIcon icon={faGreaterThan} size={20} color='#EBEBF5' style={styles.Greater}/>
                </View>
                <View style={styles.Line2}/>
                <View style={{flexDirection:'row'}} >
                    <TouchableOpacity>
                    <View>
                        <FontAwesomeIcon icon={faGaugeSimple} color='white' style={styles.iicon} size={20}/>
                        <Text style={styles.input}>Km</Text>
                    </View>   
                    </TouchableOpacity> 
                    <TouchableOpacity>
                    <View>
                        <FontAwesomeIcon icon={faChartLine} color='white' style={styles.iicon} size={20}/> 
                        <Text style={styles.input}>Following</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View>
                        <FontAwesomeIcon icon={faMap} color='white' style={styles.iicon} size={20}/>
                        <Text style={styles.input}>Map</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View>
                    <FontAwesomeIcon icon={faUpload} color='white' style={styles.iicon} size={20}/>
                        <Text style={styles.input} >Saved</Text>
                    </View>
                    </TouchableOpacity>
                </View>
                </View>
            </View>
                
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    Content: {
        resizeMode: 'cover',
        backgroundColor: 'transparent',
      },
    Greater:{
        marginLeft: 100,
    },
    Less:{
        marginRight: 100,
    },
    icon2:{
        color: '#FFFFFF',
        fontSize: 20,
        alignSelf: 'center',
        marginTop:13,
        
    },
    icon1:{
        color: '#FFFFFF',
        fontSize: 20,
        alignSelf: 'center',
        marginTop:13,
    },
    locate:{
        marginLeft: -10,
        marginRight:-12,
    },
    iicon:{
        color:'white',
        alignSelf: 'center',
        marginTop:85,
        
    },
    bottomSheetContainer:{
        alignSelf:'center',
        height:'40%',
        width:'90%',
        backgroundColor: 'rgba(0,0,0,0.3)', // Adjust the transparency here
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        zIndex: 1,
        position:'absolute',
        bottom:20,
        alignItems: 'center',
        blurRadius:25,
    },
    Line1:{
        width:75,
        height:4,
        backgroundColor:'grey',
        alignSelf:'center',
        marginVertical:15,
        borderRadius:2,
    },
    Line2:{
        width:'100%',
        height:1,
        backgroundColor:'grey',
        alignSelf:'center',
        marginVertical:15,
        borderRadius:2,
    },
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
        alignSelf: 'center',
        
    },
    inputa:{
        color: '#EBEBF5',
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
    buttonIconn1: {
        backgroundColor: '#2D2D2D',
        borderRadius: 30,
        width: 60,
        height: 50,
        marginHorizontal: 5,
        marginRight:40,
        
    },
    buttonIconn2: {
        backgroundColor: '#2D2D2D',
        borderRadius: 30,
        width: 60,
        height: 50,
        marginHorizontal: 5,
        marginLeft:40,
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
