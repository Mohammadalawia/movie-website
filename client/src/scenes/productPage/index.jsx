import { useState } from "react";
import { Box,  useTheme, Typography, Divider, Button, Modal } from "@mui/material";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import { useSelector } from "react-redux";
import WidgetWrapper from "components/WidgetWrapper";
import StarIcon from "@mui/icons-material/Star";
import {ThumbUpOutlined, WatchLater } from "@mui/icons-material";

const ProductPage = () => {
  const products = useSelector((state) => state.products);
  const genres = useSelector((state) => state.genres);
  const user = useSelector((state) => state.user);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { id } = useParams();
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const product = products.find((product) => product.id === Number(id));

  const getGenreName = (genreIds) => {
    const genreNames = genreIds.map((genreId) => {
      const genre = genres.find((genre) => genre.id === genreId);
      return genre ? genre.name : '';
    });
    return genreNames.join(', ');
  };

  
  const handleBuyMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <Box>
      <Navbar />
      {product ? (
        <Box display="flex">
        <WidgetWrapper width="40%" m="2rem">

        <Box>
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            

          >
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <img
                style={{
                  maxHeight: '200%',
                  maxWidth: '200%',
                  objectFit: 'contain',
                }}
                alt="movie"
                src={`https://image.tmdb.org/t/p/w500${product.poster_path}`}
              />
            
            </Box>
          </Box>
          
          </Box>
        </WidgetWrapper>

        <Box display="absolute" width="60%">
        <Typography color={main} ml="4rem" fontSize="30px" width="400px" fontWeight="bold" sx={{ mt: "1rem" }}>
        {product.title}
      </Typography>

      <Divider/>
      <Typography mt="1rem" ml="4rem">
        Genres: {getGenreName(product.genre_ids)}.
      </Typography>
      <Typography mt="0.2rem" ml="4rem">
        release date: {product.release_date}
      </Typography>
            
      <Typography display="flex" justifyContent="center" mt="3rem" ml="4rem" sx={{ fontSize: "15px" }}>
      Story
      </Typography>
      <Typography mt="1rem" ml="4rem">
      {product.overview}
      </Typography>
      </Box>
      
        <Box width="50%" >
        <Box p={2} textAlign="center" mt="5rem">
        <Divider/>
        <Typography display="flex" justifyContent="center" fontSize="1rem" mt="1rem">
          rating :  {product.vote_average}
          <StarIcon  sx={{color:"#FFD700", ml:"0.5rem"}}/>
          
        </Typography>
          <Typography display="flex" justifyContent="center" fontSize="1rem" mt="1rem">
        Likes : {product.vote_count}
        <ThumbUpOutlined  sx={{ ml:"0.5rem"}}/>
      </Typography>
      <Typography display="flex" justifyContent="center" fontSize="1rem" m="1rem" >
        Watched by : {product.popularity } 
        <WatchLater sx={{ ml:"0.5rem"}}/>
      </Typography>
      <Divider/>
      <Button display="flex" fontsize="10rem" justifyContent="center" variant="contained" color="primary" onClick={() => handleBuyMovie(product.title)} sx={{width:"10rem", height:"4rem", mt:"4rem", fontsize:"10rem"}}>
                  Order now
                </Button>
      </Box>
      <Modal
        open={selectedMovie !== null}
        onClose={handleCloseModal}
        aria-labelledby="buy-confirmation-modal"
        aria-describedby="buy-confirmation-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            borderRadius: "4px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography display="flex" justifyContent="center">Confirmation</Typography>
          <Typography mt="2rem">
            You have successfully ordered the movie: {product.title}
          </Typography>
          <Typography display="flex" justifyContent="center" mt="1rem">
          {`Name: ${user.firstName} ${user.lastName}`}<br />
          {`Address: ${user.location}`}<br />
          {`Payment: on delivery`}
          
</Typography>

        </Box>
      </Modal>
      </Box>
      </Box>
      ) : (
        <p>Product not found</p>
      )}
    </Box>
  );
};

export default ProductPage;
