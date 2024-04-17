import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import customMapStyle from './customMapStyle';

const GOOGLE_MAPS_APIKEY = 'YOUR_GOOGLE_MAPS_API_KEY_HERE'; // Replace with your actual API key

const Map2Screen = () => {
  const { width, height } = Dimensions.get('window');
  const Aspect_Ratio = width / height;
  const LATTUDE_DELTA = 0.2;
  const LONGITUDE_DELTA = LATTUDE_DELTA * Aspect_Ratio;
  const INITIAL_POSITION = {
    latitude: 43.766764,
    longitude: 11.251349,
    latitudeDelta: LATTUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_POSITION}
        customMapStyle={customMapStyle}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}
        showsCompass={true}
        showsTraffic={true}
        apiKey={GOOGLE_MAPS_APIKEY}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Map2Screen;
