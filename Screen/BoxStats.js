import React from "react";
import {View,Image,StyleSheet,Text, SafeAreaView, TouchableOpacity, StatusBar} from 'react-native';
import * as Progress from 'react-native-progress';
import { faLessThan, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import CircularProgress from "./CircleProgress";

const BoxStats = () =>{
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
                    <Image source={require('../assets/box6.png')} style={styles.Stats} />
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',marginTop:10}}>
                        <Text style={styles.textImage}>Common Box</Text>
                        <Text style={styles.textMoney}>350 PMT</Text>
                    </View>



                    <View style ={styles.frame2}>
                        <CircularProgress style={{alignSelf:'center'}} fill={60} text={'Common NFT'} />
                        <CircularProgress style={{alignSelf:'center'}} fill={30} text={'Rare NFT'} />
                        <CircularProgress style={{alignSelf:'center'}} fill={10} text={'Epic NFT'} />
                    </View>



                    
                <View style={styles.frame4}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.textButton1} >Buy</Text>
                    </TouchableOpacity>
                    <View>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.textButton2}>Add to favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.textButton2}>Buy & equip</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
        </ SafeAreaView>
    )
}

const styles = StyleSheet.create({
    frame4:{
        flexDirection:'row',
        marginTop:100,
    },
    textMoney:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    frame2:{
        flexDirection: 'row',
        backgroundColor:'transparent',
        width:'100%',
        height:'10%',
        marginTop:50,
        justifyContent: 'center',
        alignItems: 'baseline',
        alignSelf: 'center',
    },
    textCircle:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf:'auto',
        marginRight:70 ,
    },
    frame3:{
        backgroundColor:'#222834',
        width:'90%',
        height:'10%',
        marginTop:30,
        borderRadius:25,
        justifyContent: 'center',
        alignItems: 'flex-start', // Aligning items to start
        marginLeft: 10,
        paddingLeft: 20,
        marginBottom: 20,
    },
    textProgress:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        fontSize: 15, 
        alignSelf:'center',
        marginRight:25 ,
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
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'flex-start',
        marginRight:110 ,
    },
    progress:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Stats:{
        width:200,
        height:200,
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
    textButton1:{
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textButton2:{
        color: '#407AFF',
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
});

export default BoxStats;