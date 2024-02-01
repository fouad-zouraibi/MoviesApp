import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PopularMoviesScreen from './screens/PopularMoviesScreen';
import SearchScreen from './screens/SearchMoviesScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000', // Background color
    card: '#000', // Screen background
    text: '#fff', // Text color
    border: '#333', // Border color
  },
};

const MoviesStack = () => (
  <Stack.Navigator
    initialRouteName="PopularMovies"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#000', 
      },
      headerTintColor: '#fff', 
    }}
  >
  {/* */}
    <Stack.Screen name="PopularMovies" component={PopularMoviesScreen} />
    <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e50914', 
          inactiveTintColor: '#fff', 
          style: {
            backgroundColor: '#000', 
          },
        }}
      >
        <Tab.Screen
          name="Movies"
          component={MoviesStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="local-movies" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="search" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
