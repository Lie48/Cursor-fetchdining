import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const universities = [
  { name: 'UIndy', color: '#B20A38', studentPage: 'UIndyStudentHome' },
  { name: 'Marian University', color: '#003366', studentPage: 'UIndyStudentHome' }, // Using placeholder
  { name: 'Indiana Wesleyan', color: '#CC0000', studentPage: 'UIndyStudentHome' },
  { name: 'Purdue', color: '#D4AF37', studentPage: 'UIndyStudentHome' },
];

export default function UniversitySearchScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#ffffff" />
          <Text style={styles.backText}>Camera</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fetch Dining</Text>
        <View style={styles.spacer} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Dining Locations..."
          placeholderTextColor="#999999"
        />
      </View>

      {/* University List */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {universities.map((university, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.universityButton, { backgroundColor: university.color }]}
            onPress={() => navigation.navigate(university.studentPage)}
            activeOpacity={0.8}
          >
            <Text style={styles.universityText}>{university.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#B20A38',
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  spacer: {
    width: 80, // To balance the back button width
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  universityButton: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  universityText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});
