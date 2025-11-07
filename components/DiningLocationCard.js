import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DiningLocationCard({ location, glowColor = '#B8B8B8' }) {
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <View style={[styles.card, { shadowColor: glowColor }]}>
      {!imageError && location.image ? (
        <Image 
          source={location.image}
          style={styles.image} 
          resizeMode="cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <View style={styles.placeholderImage}>
          <Text style={styles.placeholderText}>{location.name}</Text>
        </View>
      )}
      
      {/* Overlay Gradient */}
      <View style={styles.overlay}>
        {/* Location Name */}
        <Text style={styles.name}>{location.name}</Text>
        
        {/* Description */}
        <Text style={styles.description}>{location.description}</Text>
        
        {/* Bottom Info Bar */}
        <View style={styles.infoBar}>
          {/* Popularity */}
          <View style={styles.infoItem}>
            <Ionicons name="trending-up" size={16} color="#ff0000" />
            <Text style={styles.infoText}>{location.orders} orders</Text>
          </View>
          
          {/* Wait Time */}
          <View style={styles.infoItem}>
            <Ionicons name="location" size={16} color="#ff0000" />
            <Text style={styles.infoText}>{location.waitTime}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 16,
    shadowColor: '#B8B8B8', // Default, overridden by glowColor prop
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1.2,
    shadowRadius: 12,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 12,
    justifyContent: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 12,
  },
  infoBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 12,
    color: '#ffffff',
    marginLeft: 4,
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#B20A38',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
