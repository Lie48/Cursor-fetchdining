import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BoneLogo from '../components/BoneLogo';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    // Navigate to landing page after 2 seconds
    const timer = setTimeout(() => {
      navigation.replace('Landing');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <BoneLogo size={120} />
      <Text style={styles.title}>Fetch Dining</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B20A38', // UIndy Maroon
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
    fontFamily: 'System',
  },
});

