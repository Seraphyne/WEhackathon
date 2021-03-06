import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import MentorMentee from './app/screens/MentorMentee';
import LoginScreen from './app/screens/LoginScreen';
import SearchScreen from './app/screens/SearchScreen';
import InterestsScreen from './app/screens/InterestsScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#aaaaaa",
            },
            headerTintColor: "#fff",
          }}
        >
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Mentor/Mentee" component={MentorMentee} />
          <Stack.Screen name="Log In" component={LoginScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Select Interests" component={InterestsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});