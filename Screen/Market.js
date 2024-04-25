import React ,{useState}from "react";
import {View,Image,StyleSheet,Text, SafeAreaView, TouchableOpacity, StatusBar} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLessThan, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import AppNavigator from '../android/app/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';




const Market =() =>{
  const [buttonPressed, setButtonPressed] = useState(false);

    const handleButtonPress = () => {
        setButtonPressed(!buttonPressed);
    };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
      <StatusBar barStyle="auto" />
      
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed!')}>
          <FontAwesomeIcon icon={faLessThan} size={30} color="#407AFF" />
        </TouchableOpacity>
        <Image source={require('../assets/Group73.png')} style={styles.image} />
        <TouchableOpacity
          style={[styles.collectionButton, buttonPressed ? styles.collectionButtonPressed : null]}
          onPress={handleButtonPress}>
          <Text style={[styles.collectionButtonText, buttonPressed ? styles.collectionButtonTextPressed : null]}>
            Collections
          </Text>
        </TouchableOpacity>
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
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
     
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#242A36'
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
  collectionButton: {
    backgroundColor: '#2E3649',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 40,
    marginTop: 10,
  },
  collectionButtonPressed: {
    backgroundColor: '#407AFF',
  },
  collectionButtonText: {
    color: '#407AFF',
    fontSize: 16,
  },
  collectionButtonTextPressed: {
    color: '#242A36',
  },
  notificationIconContainer: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
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
});

export default Market;