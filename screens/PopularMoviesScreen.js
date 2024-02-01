import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import MovieCard from '../components/MovieCard';
import { getPopularMovies } from '../services/api';

const PopularMoviesScreen = ({ navigation }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const moviesResponse = await getPopularMovies();

        if (moviesResponse.results) {
          setPopularMovies(moviesResponse.results);
        } else {
          console.error('Invalid moviesResponse format:', moviesResponse);
        }
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  const handleMoviePress = (movieId) => {
    navigation.navigate('MovieDetails', { movieId });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#e50914" />;
  }

  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Popular Movies</Text>*/}
      <FlatList
        data={popularMovies}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard movie={item} onPress={() => handleMoviePress(item.id)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Background color
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white', // Text color
    marginBottom: 10,
  },
});

export default PopularMoviesScreen;
