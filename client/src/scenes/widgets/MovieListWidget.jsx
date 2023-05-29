import React, { useEffect } from 'react';
import axios from 'axios';
import ProductWidget from './ProductWidget'
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setGenres, setProducts } from 'state';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.products);
  const genres = useSelector((state) => state.genres);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const api_key = 'e07812308913fd2c88d18dacb5f56347';

        const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
        const moviesResponse = await axios.get(moviesUrl);
        const moviesData = moviesResponse.data.results;

        dispatch(setProducts({ products: moviesData }));
        
        const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;
        const genresResponse = await axios.get(genresUrl);
        const genresData = genresResponse.data.genres;

        dispatch(setGenres({ genres: genresData}));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getGenreName = (genreIds) => {
    const genreNames = genreIds.map((genreId) => {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : '';
    });
    return genreNames.join(', ');
  };

  return (
    <Box ml="5rem">
    <Box display="flex" flexWrap="wrap">
      {Array.isArray(movies) && movies.map((movie) => (
        <ProductWidget key={movie.id} id={movie.id} title={movie.title} image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} genre={getGenreName(movie.genre_ids)}/>
      ))}
    </Box>
    </Box>
  );
};

export default MovieList;
