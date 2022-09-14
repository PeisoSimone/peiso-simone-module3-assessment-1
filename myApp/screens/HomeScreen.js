import React, { Component } from 'react';
import {
  Text,
  View,
  Pressable
} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Text>This is Home screen, press below to navigate o diffence screens</Text>

        <Pressable
          onPress={() => navigation.navigate('Details')}
          style={{ backgroundColor: 'lightblue', padding: 10, marginBottom: 10, marginTop: 10 }}>
        <Text>Details</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Dashboard')}
        style={{ backgroundColor: 'lightblue', padding: 10, marginBottom: 10, marginTop: 10 }}>
       <Text>Dashboard</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Splash')}
        style={{ backgroundColor: 'lightblue', padding: 10, marginBottom: 10, marginTop: 10  }}>
       <Text>Splash</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('Sign In')}
        style={{ backgroundColor: 'lightblue', padding: 10, marginBottom: 10, marginTop: 10  }}>
       <Text>Sign-In</Text>
      </Pressable>
    </View>
  );
}

export default HomeScreen;