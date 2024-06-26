import React, { useState } from 'react';
import { SafeAreaView, StatusBar, TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLessThan, faBell, faGear } from '@fortawesome/free-solid-svg-icons';
//import AppNavigator from './android/app/navigation/AppNavigator';
//import { NavigationContainer } from '@react-navigation/native';
import Map1Screen from './Screen/Map1Screen.js';
//import Map2Screen from './Screen/Map2Screen.js';
import AppNavigator from './android/app/navigation/AppNavigator.js';
import Ride from './Screen/Ride.js';
import CustomProgressBar from './Screen/CustomProgressBar.js';
import Runners from './Screen/Runners.js';
import Market from'./Screen/Market.js';
import R from './Screen/CircleProgress.js';
import Map2Screen from './Screen/Map2Screen.js';
import Hourglass from './Screen/Hourglass.js';
import BoxStats from './Screen/BoxStats.js';
import AllScreen from './Screen/AllScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Map1Screen" component={Map1Screen} />
      <Stack.Screen name="Map2Screen" component={Map2Screen} />
    </Stack.Navigator>
  </NavigationContainer>
    
  )}

export default App;
