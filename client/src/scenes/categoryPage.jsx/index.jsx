import Navbar from "scenes/navbar";
import { Box } from "@mui/material";
import ProductWidget from "scenes/widgets/ProductWidget";
import Categories from "scenes/navbar/Categories";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { genreId } = useParams();
  const allProducts = useSelector((state) => state.products);
  const genres = useSelector((state) => state.genres);

  const getGenreName = (genreIds) => {
    const genreNames = genreIds.map((genreId) => {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : '';
    });
    return genreNames.join(', ');
  };
  // Convert genreId to a number
  const genreIdNumber = parseInt(genreId, 10);
  
  const movies = allProducts.filter((product) => product.genre_ids.includes(genreIdNumber));

  return (
    <Box>
      <Navbar />
      <Categories />
      <Box ml="5rem">
        <Box display="flex" flexWrap="wrap">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <ProductWidget
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                genre={getGenreName(movie.genre_ids)}
              />
            ))
          ) : (
            <Box 
            width="100%"
            height="80vh"
            display="flex"
            alignItems="center"
            justifyContent="center" >No movies found.</Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryPage;
