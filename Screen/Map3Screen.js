import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import customMapStyle from './customMapStyle';
import GetLocation from 'react-native-get-location';

const GOOGLE_MAPS_APIKEY =  'AIzaSyArDHKxkI_wPzZB71m3HUjZgIuiZrGfg-k'; // Replace with your actual API key

const Map3Screen = () => {
  const [currentLocation, setCurrentLocation] = useState(null); // State to hold the current location

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

  const { width, height } = Dimensions.get('window');
  const Aspect_Ratio = width / height;
  const LATTITUDE_DELTA = 0.2; // Corrected spelling
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
        {/* Show marker if current location is available */}
        {currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Your Location"
            description="This is your current location"
          />
        )}
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map3Screen;
