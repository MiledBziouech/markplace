import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { CircularProgress  } from 'react-native-circular-progress';
export default function CommonBoxStats({fill,text}) {


  return (
    
    <View style={styles.mainContainer}>
  <CircularProgress 
      size={90}
      width={6}
      fill={fill}
      tintColor="rgba(0, 152, 239, 0.8)"
     
      backgroundColor="#3d5875">
      {
        (fill) => (
          <Text style={styles.text}>
            { fill }%
          </Text>
        )
      }
    </CircularProgress >
      <Text style={styles.text2} >{text}</Text>

    </View>
  )
}   
const styles = StyleSheet.create({  

        text :{

                fontFamily  : 'Poppins-Bold',
                fontSize : 26,
                color : 'white',

        },
        mainContainer : { 
            alignItems:'center',
            justifyContent:'center',
            width:"30%",



          },

        text2:{
            marginTop:9,
            fontFamily  : 'Poppins-Bold',
            fontSize : 18,
            color : 'rgba(48, 173, 243, 1)',


        }
}); 