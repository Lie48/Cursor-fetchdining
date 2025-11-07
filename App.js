import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from './context/ThemeContext';
import LoadingScreen from './screens/LoadingScreen';
import LandingScreen from './screens/LandingScreen';
import UniversitySearchScreen from './screens/UniversitySearchScreen';
import UIndyStudentHomeScreen from './screens/UIndyStudentHomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import LocationMenuScreen from './screens/LocationMenuScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Loading"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="UniversitySearch" component={UniversitySearchScreen} />
          <Stack.Screen name="UIndyStudentHome" component={UIndyStudentHomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="LocationMenu" component={LocationMenuScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
