import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { faHeart,faLessThan, faBell, faGear } from '@fortawesome/free-regular-svg-icons';


const AllScreen = () => {
  return (
    <SafeAreaView style ={styles.container}>
      <StatusBar barStyle="auto" />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed!')}>
          <FontAwesomeIcon icon={faLessThan} size={30} color="#407AFF" />
        </TouchableOpacity>
        <Image source={require('./assets/Group73.png')} style={styles.image} />
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
        <ScrollView>
            <View>
                <View >
                <Text style={styles.sectionTitle}>My NFTS</Text>
                <ScrollView horizontal>
                <View style={styles.frame}>
                    <Image source={require('../assets/bycycle1.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$10</Text>
                    <Text style={styles.additionalText}>Additional Text 1</Text>
                </View>
                <View style={styles.frame}>
                    <Image source={require('../assets/bycycle2.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$15</Text>
                    <Text style={styles.additionalText}>Additional Text 2</Text>
                </View>
                <View style={styles.frame}>
                    <Image source={require('../assets/bycycle3.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$10</Text>
                    <Text style={styles.additionalText}>Additional Text 1</Text>
                </View>
                <View style={styles.frame}>
                    <Image source={require('../assets/bycycle4.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$10</Text>
                    <Text style={styles.additionalText}>Additional Text 1</Text>
                </View>
                
                </ScrollView>
                </View>

                <View >
                <Text style={styles.sectionTitle}>ITEMS</Text>
                <ScrollView horizontal>
                <View style={styles.frame}>
                    <Image source={require('../assets/boost1.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$10</Text>
                    <Text style={styles.additionalText}>Additional Text 1</Text>
                </View>
                <View style={styles.frame}>
                    <Image source={require('../assets/boost4.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$15</Text>
                    <Text style={styles.additionalText}>Additional Text 2</Text>
                </View>
                <View style={styles.frame}>
                    <Image source={require('../assets/boost3.png')} style={styles.image} />
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
                
                </ScrollView>
                </View>

                <View >
                <Text style={styles.sectionTitle} >BOXES</Text>
                <ScrollView horizontal>
                <View style={styles.frame}>
                    <Image source={require('../assets/bycycle1.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$10</Text>
                    <Text style={styles.additionalText}>Additional Text 1</Text>
                </View>
                <View style={styles.frame}>
                    <Image source={require('../assets/bycycle2.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$15</Text>
                    <Text style={styles.additionalText}>Additional Text 2</Text>
                </View>
                <View style={styles.frame}>
                    <Image source={require('../assets/bycycle3.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$10</Text>
                    <Text style={styles.additionalText}>Additional Text 1</Text>
                </View>
                <View style={styles.frame}>
                    <Image source={require('../assets/bycycle4.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$10</Text>
                    <Text style={styles.additionalText}>Additional Text 1</Text>
                </View>
                
                </ScrollView>
                </View>

                <View >
                <Text style={styles.sectionTitle} >BOOSTERS</Text>
                <ScrollView horizontal>
                <View style={styles.frame}>
                    <Image source={require('../assets/bycycle1.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$10</Text>
                    <Text style={styles.additionalText}>Additional Text 1</Text>
                </View>
                <View style={styles.frame}>
                    <Image source={require('../assets/bycycle2.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$15</Text>
                    <Text style={styles.additionalText}>Additional Text 2</Text>
                </View>
                <View style={styles.frame}>
                    <Image source={require('../assets/bycycle3.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$10</Text>
                    <Text style={styles.additionalText}>Additional Text 1</Text>
                </View>
                <View style={styles.frame}>
                    <Image source={require('../assets/bycycle4.png')} style={styles.image} />
                    <View style={styles.overlay}>
                    <FontAwesomeIcon icon={faHeart} size={24} color='white' />
                    </View>
                    <Text style={styles.price}>$10</Text>
                    <Text style={styles.additionalText}>Additional Text 1</Text>
                </View>
                
                </ScrollView>
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
    height: 230,
    width:200 ,
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
  additionalText: {
    marginTop: 5,
    fontSize: 14,
    color: 'white',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default AllScreen;
