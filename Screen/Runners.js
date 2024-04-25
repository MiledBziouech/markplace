import React from "react";
import {View,Image,StyleSheet,Text, SafeAreaView, TouchableOpacity, StatusBar} from 'react-native';
import * as Progress from 'react-native-progress';
import { faLessThan, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Runners = () =>{
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: '#131720' }}>
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
                <View style={{alignItems:'center'}}>
                    <View style={styles.frame1} >
                    <Image source={require('../assets/boost1.png')} style={styles.Stats} />
                    </View>
                    <Text style={styles.textImage}>Runners</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View styles={{justifyContent:'center',}}>
                            
                                <Image style ={styles.Iconn1} source={require('../assets/Generic.png')}  />
                                <Text style={styles.textIcon} >Generic item</Text>
                        </View>
                        <View styles={{justifyContent:'center',}}>
                                <Image style ={styles.Iconn2} source={require('../assets/fist.png')}/>
                                <Text style={styles.textIcon} >Hard Worker</Text>
                        </View>
                    </View>
                    <View style={styles.frame2}>
                    <View style={styles.frameProgress}>
                            <Text style={styles.textProgress}>XP ratio</Text>
                            
                            <Progress.Bar style={styles.progres} progress={0.6} width={170} height={10}  borderRadius={20} borderColor='rgba(217, 217, 217, 1)' color='rgba(64, 122, 255, 1)' borderWidth={0.5} unfilledColor='rgba(217, 217, 217, 1)'/>
                            
                        </View>
                    <View>
                        <View style={styles.frameProgress}>
                            <Text style={styles.textProgress}>Energy</Text>
                            
                            <Progress.Bar style={styles.progres} progress={0} width={170} height={10}  borderRadius={20} borderColor='rgba(217, 217, 217, 1)' color='rgba(64, 122, 255, 1)' borderWidth={0.5} unfilledColor='rgba(217, 217, 217, 1)'/>
                            
                        </View>
                        <View style={styles.frameProgress}>
                            <Text style={styles.textProgress}>Reward ratio</Text>
                            
                            <Progress.Bar style={styles.progres} progress={0} width={170} height={10}  borderRadius={20} borderColor='rgba(217, 217, 217, 1)' color='rgba(64, 122, 255, 1)' borderWidth={0.5} unfilledColor='rgba(217, 217, 217, 1)'/>
                            
                        </View>
                        </View>
                        
                    </View>
                    
                    <Text style={styles.textMoney} >160 PMT</Text>
                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.textButtonn} >Buy</Text>
                    </TouchableOpacity>
                    <View>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.textButtonn}>Add to favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.textButtonn}>Buy & equip</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
        </ SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Iconn1:{
        left: 0,
    },
    Iconn2:{
        right: 0,marginRight: 40,
    },
    textMoney:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    frame2:{
        backgroundColor:'#222834',
        width:'90%',
        height:'17%',
        marginTop:15,
        borderRadius:25,
        justifyContent: 'center',
        alignItems: 'flex-start', 
        marginLeft: 10,
        paddingLeft: 20,
    },
    textIcon:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 5,
    },
    frameProgress:{
        
        flexDirection: 'row',
        
    },
    textProgress:{
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop:10,
        marginLeft:5,
        alignSelf: 'flex-start',
    },
    progres:{
        marginRight:5,
        alignSelf:'flex-end',
        

    },
    frame1:{
        backgroundColor:'#222834',
        width:250,
        height:250,
        marginTop:25,
        borderRadius:25,
        justifyContent: 'center',
        alignItems: 'center', 
    },
    textImage:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 45,
    },
    Stats:{
        width:200,
        height:150,
    },
    button1:{
        backgroundColor: '#407AFF',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 40,
        marginTop: 10,
        width:175,
    },
    button2:{
        backgroundColor: '#2D2D2D',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 40,
        marginTop: 10,
        width:175,
        borderColor:'#407AFF',
        borderWidth:1,
    },
    textButtonn:{
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
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
        height: 40,
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
});

export default Runners;