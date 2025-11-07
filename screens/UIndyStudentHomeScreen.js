import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import UIndyLogo from '../components/UIndyLogo';
import DiningLocationCard from '../components/DiningLocationCard';
import { diningLocations, lastOrder } from '../data/diningLocations';
import { useTheme } from '../context/ThemeContext';

export default function UIndyStudentHomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const theme = useTheme();

  const handleSuggestionSubmit = () => {
    // TODO: Implement suggestion submission
    console.log('Suggestion submitted:', suggestion);
    setSuggestion('');
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: theme.headerColor }]}>
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['left', 'right']}>
        <StatusBar style={theme.isDarkMode ? "light" : "dark"} />
        
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.headerColor }]}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('UniversitySearch')}
          style={styles.headerButton}
        >
          <Ionicons name="arrow-back" size={24} color="#ffffff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Fetch Dining</Text>
        </View>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Logo Area */}
        <View style={[styles.logoArea, { backgroundColor: theme.colors.background }]}>
          <UIndyLogo mode={theme.isDarkMode ? "night" : "day"} size={550} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={[
            styles.searchBar, 
            { 
              backgroundColor: theme.isDarkMode ? '#000000' : '#ffffff',
              borderColor: theme.colors.glow,
              shadowColor: theme.colors.glow,
            }
          ]}>
            <Ionicons 
              name="search" 
              size={20} 
              color={theme.colors.glow} 
              style={styles.searchIcon} 
            />
            <TextInput
              style={[styles.searchInput, { color: theme.colors.text }]}
              placeholder="Search dining locations..."
              placeholderTextColor="#999999"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* Dining Locations Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Dining Locations</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScroll}
          >
            {diningLocations.map((location) => (
              <TouchableOpacity
                key={location.id}
                onPress={() => {
                  if (location.id === 4) { // Hanna Garden
                    navigation.navigate('LocationMenu', { locationId: location.id });
                  } else if (location.id === 5) { // Streets
                    navigation.navigate('LocationMenu', { locationId: location.id });
                  }
                }}
              >
                <DiningLocationCard location={location} glowColor={theme.colors.glow} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Quick Reorder Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Quick Reorder</Text>
          <View style={[
            styles.reorderCard,
            {
              backgroundColor: theme.colors.darkerCardBackground,
              borderColor: theme.colors.glow,
              shadowColor: theme.colors.glow,
            }
          ]}>
            <Text style={[styles.reorderLabel, { color: theme.colors.text }]}>Your Last Order</Text>
            <Text style={[styles.reorderDetails, { color: theme.colors.text }]}>
              {lastOrder.location} - {lastOrder.items.join(', ')}
            </Text>
            <TouchableOpacity style={[styles.reorderButton, { backgroundColor: theme.headerColor }]}>
              <Text style={styles.reorderButtonText}>Reorder</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Suggestions Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Suggestions</Text>
          <View style={[
            styles.suggestionCard,
            {
              backgroundColor: theme.colors.darkerCardBackground,
              borderColor: theme.colors.glow,
              shadowColor: theme.colors.glow,
            }
          ]}>
            <Text style={[styles.suggestionLabel, { color: theme.colors.text }]}>
              Share your feedback or suggestions
            </Text>
            <TextInput
              style={[styles.suggestionInput, { color: theme.colors.text, borderColor: theme.colors.border }]}
              placeholder="Type your suggestion here..."
              placeholderTextColor={theme.isDarkMode ? '#666666' : '#999999'}
              value={suggestion}
              onChangeText={setSuggestion}
              maxLength={200}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
            <View style={styles.suggestionFooter}>
              <Text style={[styles.characterCount, { color: theme.colors.text, opacity: 0.6 }]}>
                {suggestion.length}/200
              </Text>
              <TouchableOpacity 
                style={[styles.submitButton, { backgroundColor: theme.headerColor }]}
                onPress={handleSuggestionSubmit}
                disabled={suggestion.trim().length === 0}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      </SafeAreaView>

      {/* Bottom Navigation */}
      <View style={[styles.bottomNav, { backgroundColor: theme.colors.cardBackground, borderTopColor: theme.colors.border }]}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color={theme.headerColor} />
          <Text style={[styles.navText, { color: theme.headerColor }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="cube-outline" size={24} color={theme.colors.text} />
          <Text style={[styles.navText, { color: theme.colors.text }]}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="bar-chart-outline" size={24} color={theme.colors.text} />
          <Text style={[styles.navText, { color: theme.colors.text }]}>Performance</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navItem}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name="settings-outline" size={24} color={theme.colors.text} />
          <Text style={[styles.navText, { color: theme.colors.text }]}>Settings</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 32,
  },
  headerButton: {
    padding: 4,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  loginText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoArea: {
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 12,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  horizontalScroll: {
    paddingRight: 20,
  },
  reorderCard: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 5,
  },
  reorderLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  reorderDetails: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: '500',
  },
  reorderButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
  },
  reorderButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  placeholderText: {
    fontSize: 14,
  },
  suggestionCard: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 5,
  },
  suggestionLabel: {
    fontSize: 14,
    marginBottom: 12,
    fontWeight: '500',
  },
  suggestionInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    minHeight: 100,
    marginBottom: 12,
  },
  suggestionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  characterCount: {
    fontSize: 12,
  },
  submitButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  bottomNav: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingBottom: 32,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
  },
});
