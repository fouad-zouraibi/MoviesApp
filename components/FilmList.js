// components/FilmList.js
import React from 'react';
import { FlatList } from 'react-native';
import MovieCard from './MovieCard';

const FilmList = ({ data, onMoviePress }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard movie={item} onPress={() => onMoviePress(item.id)} />
      )}
    />
  );
};

export default FilmList;
