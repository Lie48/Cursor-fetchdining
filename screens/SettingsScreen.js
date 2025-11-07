import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

export default function SettingsScreen({ navigation }) {
  const theme = useTheme();

  return (
    <View style={[styles.wrapper, { backgroundColor: theme.headerColor }]}>
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['left', 'right']}>
        <StatusBar style={theme.isDarkMode ? "light" : "dark"} />
        
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.headerColor }]}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.headerButton}
          >
            <Ionicons name="arrow-back" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
          <View style={styles.spacer} />
        </View>

      <View style={styles.content}>
        {/* Theme Toggle Section */}
        <View style={[styles.section, { backgroundColor: theme.colors.cardBackground }]}>
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Ionicons 
                name={theme.isDarkMode ? "moon" : "sunny"} 
                size={24} 
                color={theme.colors.text} 
                style={styles.icon}
              />
              <View style={styles.settingTextContainer}>
                <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
                  {theme.isDarkMode ? 'Night Mode' : 'Day Mode'}
                </Text>
                <Text style={[styles.settingDescription, { color: theme.colors.text }]}>
                  Toggle between day and night appearance
                </Text>
              </View>
            </View>
            
            {/* Toggle Switch */}
            <TouchableOpacity
              onPress={theme.toggleTheme}
              style={[
                styles.toggleSwitch,
                { 
                  backgroundColor: theme.isDarkMode ? '#B20A38' : '#cccccc',
                  borderColor: theme.colors.glow,
                  borderWidth: 2,
                }
              ]}
              activeOpacity={0.7}
            >
              <View style={[
                styles.toggleCircle,
                { 
                  transform: [{ translateX: theme.isDarkMode ? 22 : 0 }] 
                }
              ]} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Support Section */}
        <TouchableOpacity 
          style={[styles.section, { backgroundColor: theme.colors.cardBackground }]}
          activeOpacity={0.7}
          onPress={() => console.log('Support pressed')}
        >
          <View style={styles.settingRow}>
            <View style={styles.settingInfo}>
              <Ionicons 
                name="help-circle" 
                size={24} 
                color={theme.colors.text} 
                style={styles.icon}
              />
              <View style={styles.settingTextContainer}>
                <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
                  Support
                </Text>
                <Text style={[styles.settingDescription, { color: theme.colors.text }]}>
                  Get help or contact us
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color={theme.colors.text} style={{ opacity: 0.5 }} />
          </View>
        </TouchableOpacity>

        {/* Other Settings Placeholder */}
        <View style={[styles.section, { backgroundColor: theme.colors.cardBackground }]}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            More Settings Coming Soon
          </Text>
        </View>
      </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 48, // Add top padding to keep content in same position
  },
  headerButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  spacer: {
    width: 32,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 12,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  settingDescription: {
    fontSize: 12,
    opacity: 0.7,
  },
  toggleSwitch: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 2,
  },
  toggleCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    opacity: 0.5,
  },
});

