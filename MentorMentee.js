import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Dimensions} from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function MentorMentee()
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
      <Text style={styles.text}>I want to be a mentor</Text>
      <TouchableOpacity 
        style={styles.circle}
        onPress={
          onChange("isMentor")
        }
      >
      {state.isMentor ? (<View style={styles.checkedCircle} />) : (<View />)}
      </TouchableOpacity>
      
      <Text style={styles.text}>I want to be a mentee</Text>
      <TouchableOpacity 
        style={styles.circle}
        onPress={onChange("isMentee")}
      >
      {state.isMentee ? (<View style={styles.checkedCircle} />) : (<View />)}
      </TouchableOpacity>  
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    margin: 24,
    marginTop: 0,
    color: '#3A4664',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: "#FFDBDC",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ACACAC',
    alignItems: 'center', // To center the checked circle…
    justifyContent: 'center',
    marginHorizontal: 10
},
  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#131313' // You can set it default or with yours one…
  }
});
