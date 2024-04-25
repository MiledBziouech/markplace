import React from "react";
import {View,Image,StyleSheet,Text, SafeAreaView, TouchableOpacity, StatusBar} from 'react-native';
import * as Progress from 'react-native-progress';
import { faLessThan, faBell, faGear ,faGem,faBolt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Ride = () =>{
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
                    <Image source={require('../assets/Ride.png')} style={styles.Stats} />
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Text style={styles.text1}>Rarity</Text>
                            <TouchableOpacity style={styles.IconButton} >
                                <View style={{flexDirection:'row'}}>
                                    <FontAwesomeIcon icon={faGem} style={{color: "#B197FC",}} />
                                    <Text style={styles.textIcon}>Legendary</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.text1} >Energy</Text>
                            <TouchableOpacity style={styles.IconButton}>
                                <View style={{flexDirection:'row'}}>
                                    <FontAwesomeIcon icon={faBolt} style={{color: "#FFD43B",}} />
                                    <Text style={styles.textIcon}>45 mins</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                  </View>


                  <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start',marginTop:10}}>
                        <Text style={styles.textImage}>BLUE WOLF-LR01</Text>
                        <Text style={styles.textMoney}>980 PMT</Text>
                    </View>
                    



                    <View style ={styles.frame2}>
                        <View>
                            <Text style={styles.textStat}>Rarity</Text>
                            <Text style={styles.textStat}>level</Text>
                            <Text style={styles.textStat}>Energy</Text>
                            <Text style={styles.textStat}>Reward Ratio</Text>
                        </View>
                        <View>
                            <Text style={styles.textStat}>Legendary</Text>
                            <Text style={styles.textStat}>01</Text>
                            <Text style={styles.textStat}>45 mins</Text>
                            <Text style={styles.textStat}>1.6</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.textButton1} >Buy</Text>
                    </TouchableOpacity>
                    <View>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.textButton2}>Add to favorites</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
        </ SafeAreaView>
    )
}

const styles = StyleSheet.create({
    IconButton:{
        backgroundColor: '#407AFF',
        borderRadius: 20,
        //paddingHorizontal: 10,
        paddingVertical: 10,
        height: 45,
        marginTop: 20,
        width:120,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
    },
    textIcon:{
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight:5 ,
        alignSelf:'center',
        marginLeft:10,
    },
    text1:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight:45 ,
        marginTop:10,
        marginLeft:35,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
    },
    textStat:{
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        marginRight:85 ,
        alignSelf:'flex-start',
        marginTop:10,
        marginLeft:20,
    },
    textMoney:{
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textImage:{ 
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'flex-start',
        marginRight:120 ,     
    },
    textCircle:{
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf:'auto',
        marginRight:70 ,
    },
    frame2:{
        flexDirection: 'row',
        backgroundColor:'#222834',
        width:'90%',
        height:'22%',
        marginTop:10,
        alignItems: 'baseline',
        borderRadius: 20,
        alignItems: 'flex-start',
        
    },
    frame1:{
        backgroundColor:'#222834',
        width:'90%',
        height:'55%',
        marginTop:25,
        borderRadius:25,
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 20,
    },
    
    Stats:{
        width:'120%',
        height:240,
        position:'relative',
        justifyContent: 'center',
        marginBottom:5,
        
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

export default Ride;