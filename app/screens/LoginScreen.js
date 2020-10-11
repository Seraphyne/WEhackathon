import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginScreen({ navigation }) {
    const [state, setState] = useState({
      email: "",
      password: "",
      isCorrect: false,
    });

    const handleEmail = (text) => {
      setState({ email: text })
    };

    const handlePassword = (text) => {
      setState({ password: text })
    };

    const handleSubmit = (e) => {
    e.preventDefault();
      if(state.email !== "" && state.password !== "")
      {
        if(state.isCorrect == false)
          Alert.alert("Incorrect login")  
        else
          navigation.navigate("Search")
      }
      else
        Alert.alert("Please fill out all fields")
    };

    

    return (
        <View style = {styles.container}>
          <Text style={styles.title}>
            Login   
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your email"
            //maxLength={20}
            name="email"
            autoCapitalize = "none"
            onChangeText = {handleEmail}
          />

          <TextInput 
            secureTextEntry={true}
            style={styles.input}
            placeholder="Your password"
            //maxLength={20}
            name="password"
            autoCapitalize = "none"
            onChangeText = {handlePassword}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  title: {
    margin: 24,
    marginTop: 24,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  input: {
    paddingBottom: 24,
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

export default LoginScreen;
