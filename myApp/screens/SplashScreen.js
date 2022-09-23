import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import Splash2 from './../assets/splash2.png'

const SplashScreen = ({navigation}) => {
  setTimeout(()=>{
    navigation.navigate('Home')
    },2000 )

  return (      
  <View style={styles.container}>
      <Image source={Splash2}/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   
  }
});

export default SplashScreen;