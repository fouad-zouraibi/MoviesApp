import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import MovieDetails from '../components/MovieDetails';
import { getMovieDetails } from '../services/api';

const MovieDetailsScreen = ({ route }) => {
  if (!route.params || !route.params.movieId) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>Error: Movie details not found</Text>
      </View>
    );
  }

  const { movieId } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <MovieDetails route={route} />
    </View>
  );
};

export default MovieDetailsScreen;
