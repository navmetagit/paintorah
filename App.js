import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Appearance } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Header from './src/components/Header'
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
      <Text >see it nav</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  page: {
    width: scale(100),
    height: verticalScale(50),
    padding: moderateScale(5),backgroundColor:'red'
  }
});
