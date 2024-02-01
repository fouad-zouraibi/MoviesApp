import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={{ margin: 10 }}>
      <TextInput
        placeholder="Search for a movie..."
        value={query}
        onChangeText={(text) => setQuery(text)}
        style={{ backgroundColor: '#fff', padding: 10, borderRadius: 5, marginBottom: 10 }}
      />
      <Button title="Search" onPress={handleSearch} color="#fff" />
    </View>
  );
};

export default SearchBar;
