import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";

function RegisterScreen({ navigation }) {
    const [state, setState] = useState({
      email: "",
      name: "",
      password: "",
    });

    const handleEmail = (text) => {
      setState({ email: text })
    };

    const handleName = (text) => {
      setState({ name: text })
    };

    const handlePassword = (text) => {
      setState({ password: text })
    };

    const handleSubmit = (e) => {
    e.preventDefault();
      if(state.email !== "" && state.name !== "" && state.password !== "")
        navigation.navigate("Mentor/Mentee")
      else
        Alert.alert("Please fill out all fields")
    };

    

    return (
        <View style = {styles.container}>
          <Text style={styles.title}>
            Register Now  
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Your email"
            name="email"
            autoCapitalize = "none"
            onChangeText = {handleEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Your name"
            name="name"
            onChangeText = {handleName}
          />
          <TextInput 
            secureTextEntry={true}
            style={styles.input}
            placeholder="Your password"
            name="password"
            autoCapitalize = "none"
            onChangeText = {handlePassword}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
title: {
    margin: 24,
    marginTop: 150,
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
    fontSize: 18,
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

export default RegisterScreen;
