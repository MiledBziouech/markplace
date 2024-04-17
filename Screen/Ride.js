import React from "react";
import {View,Image,StyleSheet,Text,StatusBar, SafeAreaView, TouchableOpacity} from 'react-native';
import { faLessThan, faBell, faGear, faBolt,faGem } from '@fortawesome/free-solid-svg-icons';
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
                <View>
                    <Image source={require('../assets/Ride.png')} />
                    <View>
                        <View>
                            <Text>Rarity</Text>
                            
                            <TouchableOpacity>
                                <View style={{flexDirection:'row'}}>
                                <FontAwesomeIcon icon={faGem} color='purple' />
                                <Text>Legendary</Text>
                                </ View>
                            </TouchableOpacity>
                            
                        </View>
                        <View>
                            <Text>Energy</Text>
                            <TouchableOpacity>
                                <FontAwesomeIcon icon={faBolt} color='yellow'/>
                                <Text>45 mins</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                            <Text>BLUE WOLF-LR01</Text>
                            <Text>980 PMT</Text>
                        </View>
                    <View style = {styles.frame1}>
                        <View>
                            <Text>Rarity</Text>
                            <Text>Legendary</Text>
                        </View>
                        <View>
                            <Text>Level</Text>
                            <Text>01</Text>
                        </View>
                        <View>
                            <Text>Energy</Text>
                            <Text>45 mins</Text>
                        </View>
                        <View>
                            <Text>Rewaed ratio</Text>
                            <Text>1.6</Text>
                        </View>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <Text>
                            Buy
                        </Text>
                    </TouchableOpacity>
                    <View>
                    <TouchableOpacity>
                        <Text>Add to favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>
                            Buy & equip
                        </Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
        </ SafeAreaView>
    )
}

const styles = StyleSheet.create({
    buttonn:{
        backgroundColor: '#407AFF',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 35,
        marginTop: 10,
        width:175,
    },
    textButtonn:{
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
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