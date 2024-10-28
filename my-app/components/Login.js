import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RecTribe</Text>
      <Text style={styles.subtitle}>Learn your favourite song lyrics</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#004D40',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#004D40',
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#004D40',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  loginText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default Login;
