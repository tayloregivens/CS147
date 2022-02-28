import * as React from 'react';
import { Text, View, StyleSheet, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenOne from './screens/ScreenOne';
import ScreenTwo from './screens/ScreenTwo';
import ScreenToImplement from './screens/ScreenToImplement';
import { stubArray } from 'lodash';

function LogoTitle() {
  return (
    <View style={styles.menuBar}>
      <Text style={styles.menuBarText}>
        Left
      </Text>
      <Image
        style={styles.menuBarImage}
        source={require('./assets/cookee.png')}
      />
      <Text style={styles.menuBarText}>
        Right
      </Text>
    </View>
    
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeScreen}>
      <Text style={styles.homeScreenText}>Home Screen</Text>
      <Button title="Go to Screen One" onPress={() => navigation.navigate('ScreenOne')}/>
    </View>
  );
}

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
    <NavigationContainer>
      <Stack.Navigator
        screenOptions= {{
          headerStyle: {
            backgroundColor: '#87CEEB',
          },
          headerTitleStyle: {
            color: 'white',
            height: '100%',
            width: '100%',
            fontWeight: 'bold',
            backgroundColor: 'green',
        
          },
          
        }}
      >
        <Stack.Screen 
          name="Cookee" component={HomeScreen} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen name="ScreenOne" component={ScreenOne} />
        <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
        <Stack.Screen name="ScreenToImplement" component={ScreenToImplement} />

        

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    height: '100%',
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  homeScreenText: {
    fontSize: 32,
  },
  menuBar: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'pink',
  },
  menuBarText: {
    height: '100%',
    width: '100%',
    fontSize: 32,
    textAlign: 'center',
    flex: 1,
  },
  menuBarImage: {
    flex: 1,
    width: 100, 
    height: 50,
    alignItems: 'center',
  },
});