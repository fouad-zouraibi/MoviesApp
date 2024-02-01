// components/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { getMovieDetails } from '../services/api';

const MovieDetails = ({ route }) => {
  if (!route.params || !route.params.movieId) {
    return <View><Text>Error: Movie details not found</Text></View>;
  }
  const { movieId } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const defaultImage = require('../assets/images/default.png');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : undefined,
        }}
        defaultSource={defaultImage}
        style={styles.image}
      />
      <Text style={styles.title}>{movieDetails.title}</Text>
      <Text style={styles.overview}>{movieDetails.overview}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 300,
    height: 400,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  overview: {
    textAlign: 'center',
    color: '#666', // Text color
  },
});

export default MovieDetails;
