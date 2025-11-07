import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function BoneLogo({ size = 80 }) {
  return (
    <Image 
      source={require('../assets/bone-logo.png')}
      style={[styles.bone, { width: size, height: size * 0.6 }]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  bone: {
    // Styles applied via inline width/height props
  },
});
