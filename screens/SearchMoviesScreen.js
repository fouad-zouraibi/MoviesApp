import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import { searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard'; // Use default import

const SearchScreen = ({ navigation }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await searchMovies(query);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleMoviePress = (movieId) => {
    navigation.navigate('MovieDetails', { movieId });
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <Text style={styles.title}>Search Results</Text>
      <FlatList
        style={styles.moviesContainer}
        contentContainerStyle={styles.moviesList}
        data={searchResults}
        numColumns={3}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => handleMoviePress(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#111', // Dark background color
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff', // Text color
  },
  moviesContainer: {
    flex: 1,
  },
  moviesList: {
    justifyContent: 'space-between',
  },
});

export default SearchScreen;
