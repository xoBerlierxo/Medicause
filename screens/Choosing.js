import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

const Button = ({ onPress, title, backgroundColor, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor }]}>
      <View style={styles.buttonContent}>
        <Image source={require('../assets/shampoo.jpg')} style={styles.img} />
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Choosing = ({ navigation }) => {
  const [buttonStates, setButtonStates] = useState([false, false, false, false]);

  const handlePress = (index) => {
    const newButtonStates = [...buttonStates];
    newButtonStates[index] = !newButtonStates[index];
    setButtonStates(newButtonStates);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How do you wish to use this App?</Text>
      <Text style={styles.subheading}>You can choose more than one</Text>

      <View style={styles.buttonGroupContainer}>
        
        <View style={styles.buttonGroup}>
          {buttonStates.slice(0, 2).map((state, index) => (
            <View key={index} style={styles.bc}>
              <Button
                onPress={() => handlePress(index)}
                title={index === 0 ? "For Emergency" : "For Medical Assistance"}
                backgroundColor={state ? '#a2aa7b' : 'white'}
                textColor={state ? 'white' : 'black'}
              />
            </View>
          ))}
        </View>

        <View style={styles.buttonGroup}>
          {buttonStates.slice(2, 4).map((state, index) => (
            <View key={index} style={styles.bc}>
              <Button
                onPress={() => handlePress(index + 2)}
                title={index === 0 ? "For Appointments" : "For Updates"}
                backgroundColor={state ? '#a2aa7b' : 'white'}
                textColor={state ? 'white' : 'black'}
              />
            </View>
          ))}
        </View>
      </View>

      <View style={styles.twoButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip for now</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 10,
    justifyContent: 'space-between', 
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    marginTop: 40,
  },
  subheading: {
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  
  buttonGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bc: {
    marginBottom: 20,
  },
  
  button: {
    borderColor: 'gray',
    width: 160, 
    borderWidth: 1,
    padding: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    width: 20,
    marginRight: 5, 
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#a2aa7b',
    borderRadius: 100,
    paddingVertical: 15,
    width: 300,
    paddingHorizontal: 40,
    marginTop: 20,
    alignSelf: 'flex-end', 
  },
  continueButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  skipButton: {
    backgroundColor: 'white',
    borderRadius: 100,
    paddingVertical: 15,
    width: 300,
    paddingHorizontal: 40,
    marginTop: 20,
    alignSelf: 'center', 
  },
  
  skipButtonText: {
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  twoButtons:{
    justifyContent:'center',
    alignSelf:'center'
  }
});

export default Choosing;
