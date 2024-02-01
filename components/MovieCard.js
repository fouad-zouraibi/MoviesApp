import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 30) / 3; 
const defaultImage = require('../assets/images/default.png');

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image
        source={{
          uri: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : undefined,
        }}
        defaultSource={defaultImage}
        style={styles.image}
      />
      <Text style={styles.title}>{movie.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: cardWidth,
    backgroundColor: '#1c1c1c', // Background color
  },
  image: {
    height: 170,
    borderRadius: 8,
    maxWidth: cardWidth,
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
    maxWidth: cardWidth,
    color: '#fff', // Text color
    fontWeight: 'bold',
  },
});

export default MovieCard;
