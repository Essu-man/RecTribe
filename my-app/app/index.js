import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RecTribe</Text>
      <Text style={styles.subtitle}>Learn your favourite song lyrics</Text>
      <Image source={require('../assets/images/pngwing.com-10 1 (1).png')} style={styles.image} /> {/* Replace with your local image path */}
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Don’t have an account?{' '}
        <Text style={styles.signUpText} onPress={() => navigation.navigate('SignUp')}>Sign up here</Text>
      </Text>
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
  },
  subtitle: {
    fontSize: 18,
    color: '#004D40',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#004D40',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  signInText: {
    color: '#FFF',
    fontSize: 18,
  },
  footerText: {
    color: '#004D40',
    marginTop: 20,
  },
  signUpText: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default Welcome;
