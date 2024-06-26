// screens/HomeScreen.js
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome back,</Text>
      <Text style={styles.name}>Eric Atsu</Text>
      {/* Add more components to match the mockup */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
