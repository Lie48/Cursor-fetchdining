import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default function UIndyLogo({ mode = 'night', size = 150 }) {
  const logoSource = mode === 'night' 
    ? require('../assets/uindy-logo-night.png')
    : require('../assets/uindy-logo-day.png');
  
  return (
    <View style={styles.container}>
      <Image 
        source={logoSource} 
        style={[styles.logo, { width: size, height: size * 0.53 }]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logo: {
    // Width and height set dynamically via inline style
  },
});
