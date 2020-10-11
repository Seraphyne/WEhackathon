import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Dimensions} from 'react-native';

export default function MentorMentee({ navigation })
{
  const [state, setState] = useState({
    isMentor: false,
    isMentee: false,
  });

  const isInitialMount = useRef(true);
  const onChange = (choice) => {
    if (isInitialMount.current)
    {
      setState({
      [choice]: true,
      });
      isInitialMount.current = false;
    }
  };

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Now!</Text>
      <Text>By signing up to be a mentor, you will do your part in helping the next generation of women entrepreneurs and leaders!</Text>
      <Text style={styles.text}>I want to be a mentor</Text>
      <TouchableOpacity 
        style={styles.circle}
        onPress={
          onChange("isMentor")
        }
      >
      {state.isMentor ? (<View style={styles.checkedCircle} />) : (<View />)}
      </TouchableOpacity>

      <Text style={{marginTop: 40}}>By signing up to be a mentee, you will gain access to invaluable resources to help you jumpstart your career as a woman entrepreneur!</Text>
      <Text style={styles.text}>I want to be a mentee</Text>
      <TouchableOpacity 
        style={styles.circle}
        onPress={onChange("isMentee")}
      >
      {state.isMentee ? (<View style={styles.checkedCircle} />) : (<View />)}
      </TouchableOpacity>  
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Search")}
      >
        <Text style={{color: "#fff"}}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#3A4664',
    fontSize: 30,  
    margin: 50,
  },
  text: {
    margin: 24,
    color: '#3A4664',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "#ffdbdc",
    alignItems: 'center',
    padding: 24,
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center', // To center the checked circle…
    justifyContent: 'center',
},
  checkedCircle: {
    width: 22,
    height: 22,
    borderRadius: 100,
    backgroundColor: '#3A4664' 
  },
  button: {
    backgroundColor: "#3A4664",
    alignItems: "center",
    width: 300,
    padding: 15,
    margin: 40,
    borderRadius: 15,
  },   
});
