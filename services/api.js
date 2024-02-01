import axios from 'axios';

const API_KEY = '2354fbccb992e34b88b60abba7b72c76';

const tmdbClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const getPopularMovies = async () => {
    try {
      const response = await tmdbClient.get('/movie/popular', {
        params: {
          api_key: API_KEY,
        },
      });
  
      if (response.data) {
        return response.data;  // Return the entire response
      } else {
        console.error('Invalid response format:', response);
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      throw error;
    }
  };
  
{/* const getPopularMovies = () => {
  return tmdbClient.get('/movie/popular', {
    params: {
      api_key: API_KEY,
    },
  });
};*/}  


const searchMovies = (query) => {
  return tmdbClient.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query: encodeURIComponent(query),
    },
  });
};

const getMovieDetails = (movieId) => {
  return tmdbClient.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export { getPopularMovies, searchMovies, getMovieDetails };
