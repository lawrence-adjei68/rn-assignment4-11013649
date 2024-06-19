import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subtitle}>Welcome Back 👋</Text>
      <Text style={styles.tav}>Let's log in. Apply to Jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Log in" onPress={handleLogin} />
      <Text style={styles.or}>Or continue with</Text>
      <View style={styles.socialLoginContainer}>
        <MaterialIcons name="apple" size={30} onPress={() => {}} />
        <FontAwesome name="google" size={25} onPress={() => {}} />
        <MaterialIcons
          name="facebook"
          size={25}
          color="blue"
          onPress={() => {}}
        />
      </View>
      <Text>
        Haven't an account?{' '}
        <Button title="Register" Font="Circular Std"></Button>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontStyle: 'Poppins',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#356899',
    width: 1500,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
    marginVertical: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    border: '#AFB0B6',
    borderRadius: 10,
  },
  or: {
    textAlign: 'center',
    marginVertical: 16,
  },

  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
});

export default LoginScreen;
