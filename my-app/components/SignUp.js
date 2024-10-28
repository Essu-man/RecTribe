import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Setup</Text>
      <View style={styles.profilePicturePlaceholder}>
        <Text>Upload profile picture</Text>
      </View>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="D.O.B" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign Up</Text>
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
    fontSize: 28,
    color: '#004D40',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profilePicturePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  signUpButton: {
    backgroundColor: '#004D40',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  signUpText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default SignUpScreen;
