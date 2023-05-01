import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import triggerNativeCrash from './src/simulate_error';

export default function App() {

  useEffect(() => {
    triggerNativeCrash();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>App Crash Demo</Text>
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
