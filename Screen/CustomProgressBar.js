import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import * as Progress from 'react-native-progress';

const CustomProgressBar = () => {
  return (
    <SafeAreaView>
      <View>
        <Progress.Bar progress={0.3} width={200} color='#407AFF' />
      </View>
    </SafeAreaView>
    
  );
};


export default CustomProgressBar;