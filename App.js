import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import triggerJsError, { getPersonLocation, triggerNativeCrash } from './src/create_error';

export default function App() {
  const [location, setLocation] = useState('');

  const getLocation = () => {
    const currentLocation = getPersonLocation();
    setLocation(currentLocation);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{location}</Text>
      <View style={{height: 40}} />
      <Button title='Javascript Crash' onPress={triggerJsError} />
      <View style={{height: 40}} />
      <Button title='Native Crash' color={'red'} onPress={triggerNativeCrash}/>
      <View style={{height: 40}} />
      <Button title='Get Location' color='green' onPress={getLocation}/>

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
  text: {
    fontSize: 30
  }
});
