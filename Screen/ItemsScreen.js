import React from 'react';
import { View, ScrollView, Image,StyleSheet, Text,SafeAreaView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const ItemsScreen = () => {
  console.log('items is rendered');
  return (
    <SafeAreaView style ={styles.container}>
      <ScrollView>
      <View style={{flexDirection:'row',justifyContent: 'center',}} >
      <View style={styles.frame}>
        <Image source={require('../assets/boost1.png')} style={styles.image} />
        <View style={styles.overlay}>
          <FontAwesomeIcon icon={faHeart} size={24} color='white' />
        </View>
        <Text style={styles.price}>$10</Text>
        <Text style={styles.additionalText}>Additional Text 1</Text>
      </View>
      <View style={styles.frame}>
        <Image source={require('../assets/boost2.png')} style={styles.image} />
        <View style={styles.overlay}>
          <FontAwesomeIcon icon={faHeart} size={24} color='white' />
        </View>
        <Text style={styles.price}>$10</Text>
        <Text style={styles.additionalText}>Additional Text 1</Text>
      </View>
      </View>
      <View style={{flexDirection:'row',justifyContent: 'center',}} >
      <View style={styles.frame}>
        <Image source={require('../assets/boost3.png')} style={styles.image} />
        <View style={styles.overlay}>
          <FontAwesomeIcon icon={faHeart} size={24} color='white' />
        </View>
        <Text style={styles.price}>$10</Text>
        <Text style={styles.additionalText}>Additional Text 1</Text>
      </View>
      <View style={styles.frame}>
        <Image source={require('../assets/boost1.png')} style={styles.image} />
        <View style={styles.overlay}>
          <FontAwesomeIcon icon={faHeart} size={24} color='white' />
        </View>
        <Text style={styles.price}>$10</Text>
        <Text style={styles.additionalText}>Additional Text 1</Text>
      </View>
      </View>
      <View style={{flexDirection:'row',justifyContent: 'center',}} >
      <View style={styles.frame}>
        <Image source={require('../assets/boost2.png')} style={styles.image} />
        <View style={styles.overlay}>
          <FontAwesomeIcon icon={faHeart} size={24} color='white' />
        </View>
        <Text style={styles.price}>$10</Text>
        <Text style={styles.additionalText}>Additional Text 1</Text>
      </View>
      <View style={styles.frame}>
        <Image source={require('../assets/boost3.png')} style={styles.image} />
        <View style={styles.overlay}>
          <FontAwesomeIcon icon={faHeart} size={24} color='white' />
        </View>
        <Text style={styles.price}>$10</Text>
        <Text style={styles.additionalText}>Additional Text 1</Text>
      </View>
      </View>
      <View style={{flexDirection:'row',justifyContent: 'center',}} >
      <View style={styles.frame}>
        <Image source={require('../assets/boost1.png')} style={styles.image} />
        <View style={styles.overlay}>
          <FontAwesomeIcon icon={faHeart} size={24} color='white' />
        </View>
        <Text style={styles.price}>$10</Text>
        <Text style={styles.additionalText}>Additional Text 1</Text>
      </View>
      <View style={styles.frame}>
        <Image source={require('../assets/boost2.png')} style={styles.image} />
        <View style={styles.overlay}>
          <FontAwesomeIcon icon={faHeart} size={24} color='white' />
        </View>
        <Text style={styles.price}>$10</Text>
        <Text style={styles.additionalText}>Additional Text 1</Text>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#242A36',
    
  },
  frame: {
    marginHorizontal: 13,
    margin: 10,
    alignItems: 'center',
    height: 200,
    width:150 ,
    borderRadius: 30,
    overflow: 'hidden',
    justifyContent: 'center',
    backgroundColor: '#2E3649',
  },
  image: {
    width: 120,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  price: {
    marginTop: 60,
    fontSize: 16,
    fontWeight: 'bold',
  },
})
export default ItemsScreen;