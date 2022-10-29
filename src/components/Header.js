import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export default function Header() {
  return (
    // <View style={styles.container}>
    <View style={styles.container}>
   
            <Text>Header</Text>
       
  </View>

  )
}

const styles = StyleSheet.create({
    container: {
        height:verticalScale(80),
        width:'100%',
        // borderBottomWidth:0.5,
        alignItems: 'flex-start',
        // marginLeft:verticalScale(20),
        
        justifyContent: 'flex-end',
        paddingBottom:verticalScale(10),
        overflow: 'hidden',
        backgroundColor: '#fff',
        width: '100%',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,

    }
})