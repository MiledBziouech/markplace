
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, PermissionsAndroid ,Text} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import customMapStyle from './customMapStyle';
import MapViewDirections from 'react-native-maps-directions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationArrow} from '@fortawesome/free-solid-svg-icons';

const GOOGLE_MAPS_APIKEY =  'AIzaSyArDHKxkI_wPzZB71m3HUjZgIuiZrGfg-k'; // Replace with your actual API key

import GetLocation from 'react-native-get-location';
import axios from 'axios';

const Map2Screen = () => {
  const [currentLocation, setCurrentLocation] = useState({ latitude: 0, longitude: 0 });
  const [endLocation, setEndLocation] = useState({ latitude: 0, longitude: 0 });
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Permission granted, get current location
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission(); // Request location permission when the component mounts
  }, []);

  useEffect(() => {
    if (endLocation.latitude !== 0 && endLocation.longitude !== 0) {
      const origin = `${currentLocation.latitude},${currentLocation.longitude}`;
      const dest = `${endLocation.latitude},${endLocation.longitude}`;
      const API_KEY = GOOGLE_MAPS_APIKEY;
      axios
        .get(
          `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin}&destinations=${dest}&mode=bicycling&key=${API_KEY}`
        )
        .then((response) => {
          console.log('Distance Matrix API Response:', response.data); // Log the entire response for debugging
          const elements = response.data.rows[0].elements;
          if (elements && elements.length > 0 && elements[0].distance && elements[0].duration) {
            const distance = elements[0].distance.text;
            const duration = elements[0].duration.text;
            setDistance(distance);
            setDuration(duration);
            console.log('Distance:', distance, 'Duration:', duration);
          } else {
            console.error('Invalid response data structure');
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [currentLocation, endLocation]);

  const getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
      maximumAge: 10000,
    })
      .then(location => {
        setCurrentLocation(location); // Set the current location
      })
      .catch(error => {
        console.warn(error.message);
      });
  };

  const handleStart = () => {
    // Add your logic here
    console.log('Start button pressed');
  };
  
  const { width, height } = Dimensions.get('window');
  const Aspect_Ratio = width / height;
  const LATTITUDE_DELTA = 0.2;
  const LONGITUDE_DELTA = LATTITUDE_DELTA * Aspect_Ratio;
  const INITIAL_POSITION = {
    latitude: 43.766764,
    longitude: 11.251349,
    latitudeDelta: LATTITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
        customMapStyle={customMapStyle}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}
        showsCompass={true}
        showsTraffic={false}
        apiKey={GOOGLE_MAPS_APIKEY}
      >
        <MapViewDirections
              origin={currentLocation}
              destination={endLocation}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={4}
              strokeColors="#004DFF"
              optimizeWaypoints={true}
              strokeColor="#004DFF"
            />
            
              
      </MapView>
      <View style={styles.bottomSheetContainer}>
        <View style={styles.Content} >
          <View style={styles.Line1}/>
          <View style={styles.Data} >
              <Text style={styles.dataText}>4554</Text>
              <Text style={styles.dataText}>7897</Text>
              <Text style={styles.dataText}>3546</Text>
          </View>
          <TouchableOpacity style={styles.buttonIcon} onPress={handleStart}>
              <View style={{flexDirection:'row' }} >
                  <FontAwesomeIcon icon={faLocationArrow} size={25} color='#FFFFFF' style={styles.icon}/>
                  <Text style={styles.inputa} >End</Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  dataText:{
    color:'#FFFFFF',
    textAlign:'center',
    alignSelf:'center',
    fontSize:20,
    fontWeight:'bold',
    marginRight:20,
    marginLeft:20,
    marginTop:30,
  },
  Data:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
  },
  Content: {
    resizeMode: 'cover',
    backgroundColor: 'transparent',
  },
  bottomSheetContainer:{
    position: 'absolute',
      bottom: 25,
      alignSelf: 'center',
      width: '90%',
      height: '30%',
      backgroundColor: 'rgba(255,255,255,.2)', // Adjust the transparency here
      borderTopLeftRadius: 45,
      borderTopRightRadius: 45,
      borderBottomLeftRadius: 45,
      borderBottomRightRadius: 45,
      zIndex: 1,
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
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map2Screen;
