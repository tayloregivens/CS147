import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenToImplement from './screens/ScreenToImplement';


const Stack = createStackNavigator();

export default function App() {
  /* 
  TODO: 
  - implement a custom component in ./components/ScreenToImplement.js (further specifications there)
  - import that screen to App.js
  - add that new screen to the stack navigator
  - let users navigate to it from a different screen
  */
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.homeScreenText}>Home Screen</Text>
      <Button title="Go to Screen One" onPress={() => navigation.navigate('ScreenOne')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  homeScreenText: {
    fontSize: 32,
  },
});