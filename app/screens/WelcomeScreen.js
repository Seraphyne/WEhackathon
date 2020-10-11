import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar  } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from './RegisterScreen';

function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
        <Image source={require('../assets/logo.jpg')} style={styles.logo}/>
        <Text style={{marginBottom: 100}}>MentorMash</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
            <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Log In")}
        >
            <Text>Log In</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      logo: {
        width: 70,
        height: 70,
      },
      button: {
        backgroundColor: "#ffdbdc",
        alignItems: "center",
        width: 300,
        padding: 15,
        marginBottom: 40,
        borderRadius: 15,
      },    
})

export default WelcomeScreen;