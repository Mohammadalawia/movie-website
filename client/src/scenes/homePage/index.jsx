import Navbar from "scenes/navbar";
import {
  Box
} from "@mui/material";
import Categories from "scenes/navbar/Categories";
import MovieList from "scenes/widgets/MovieListWidget";
const HomePage = () => {


  return (
    <Box>
      <Navbar />
      <Categories/>

      <MovieList/>
      
      
      </Box>
  );
};

export default HomePage;
