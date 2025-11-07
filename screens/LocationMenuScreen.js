import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';
import { menuItems } from '../data/menuItems';

export default function LocationMenuScreen({ route, navigation }) {
  const { locationId } = route.params;
  const theme = useTheme();
  
  // Get the correct location based on locationId
  const location = locationId === 4 
    ? menuItems.hannaGarden 
    : locationId === 5 
      ? menuItems.streets 
      : menuItems.hannaGarden;
  
  const [selections, setSelections] = useState(
    locationId === 4 ? {
      // Hanna Garden selections
      greens: [],
      grain: [],
      protein: [],
      veggies: [],
      toppings: [],
      dressings: [],
    } : {
      // Streets selections
      madeToOrder: [],
      buildYourOwn: [],
      toppings: [],
      sauce: [],
      sides: [],
    }
  );

  const toggleSelection = (category, itemId, hasPrice) => {
    setSelections(prev => ({
      ...prev,
      [category]: prev[category].includes(itemId)
        ? prev[category].filter(id => id !== itemId)
        : hasPrice 
          ? [itemId] // Only one protein selection
          : [...prev[category], itemId],
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    
    if (locationId === 4) {
      // Hanna Garden calculation
      selections.protein.forEach(proteinId => {
        const protein = location.categories
          .find(cat => cat.id === 'protein')?.items
          .find(item => item.id === proteinId);
        if (protein?.price) total += protein.price;
      });
    } else {
      // Streets calculation
      // Made to order items
      selections.madeToOrder?.forEach(itemId => {
        const item = location.categories
          .find(cat => cat.id === 'madeToOrder')?.items
          .find(i => i.id === itemId);
        if (item?.price) total += item.price;
      });
      
      // Build your own items
      selections.buildYourOwn?.forEach(itemId => {
        const item = location.categories
          .find(cat => cat.id === 'buildYourOwn')?.items
          .find(i => i.id === itemId);
        if (item?.price) total += item.price;
      });
      
      // Sides with prices
      selections.sides?.forEach(itemId => {
        const item = location.categories
          .find(cat => cat.id === 'sides')?.items
          .find(i => i.id === itemId);
        if (item?.price) total += item.price;
      });
    }
    
    return total.toFixed(2);
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: theme.headerColor }]}>
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['left', 'right']}>
        <StatusBar style={theme.isDarkMode ? "light" : "dark"} />
        
        {/* Header */}
        <View style={[styles.header, { backgroundColor: theme.headerColor }]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#ffffff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{location.name}</Text>
          <View style={{ width: 24 }} />
        </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {location.categories.map((category) => (
          <View key={category.id} style={styles.categorySection}>
            <View style={styles.categoryHeader}>
              <Text style={[styles.categoryTitle, { color: theme.colors.text }]}>
                {category.name}
              </Text>
              {category.required && (
                <Text style={[styles.requiredText, { color: theme.colors.text, opacity: 0.6 }]}>
                  (Required)
                </Text>
              )}
            </View>

            <View style={styles.itemsGrid}>
              {category.items.map((item) => {
                const isSelected = selections[category.id].includes(item.id);
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.itemCard,
                      {
                        backgroundColor: theme.colors.cardBackground,
                        borderColor: isSelected ? theme.headerColor : theme.colors.border,
                      },
                      isSelected && { borderWidth: 2 },
                    ]}
                    onPress={() => toggleSelection(category.id, item.id, category.hasPrice)}
                  >
                    <Text style={[styles.itemName, { color: theme.colors.text }]}>
                      {item.name}
                    </Text>
                    {item.price && (
                      <Text style={[styles.itemPrice, { color: theme.headerColor }]}>
                        {item.swipeable ? `1 Swipe ($${item.price.toFixed(2)})` : `$${item.price.toFixed(2)}`}
                      </Text>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Order Summary */}
      <View style={[styles.orderSummary, { backgroundColor: theme.colors.cardBackground }]}>
        <View style={styles.totalRow}>
          <Text style={[styles.totalLabel, { color: theme.colors.text }]}>Total:</Text>
          <Text style={[styles.totalAmount, { color: theme.headerColor }]}>
            ${calculateTotal()}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.addToCartButton, { backgroundColor: theme.headerColor }]}
          onPress={() => console.log('Add to cart:', selections)}
        >
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  categorySection: {
    padding: 20,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  requiredText: {
    fontSize: 14,
    marginLeft: 8,
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  itemCard: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: '47%',
    marginBottom: 12,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderSummary: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addToCartButton: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

