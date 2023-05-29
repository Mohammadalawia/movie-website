import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme, Divider,useMediaQuery } from '@mui/material';
import WidgetWrapper from 'components/WidgetWrapper';

const Product = (
  id,
  title,
  image,
  genre,
  ) => {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <WidgetWrapper m={isNonMobileScreens ? "2rem 0 0 2rem": "2rem 2rem "} width={isNonMobileScreens ? "30%": "100%"} >
      
        <Link to={`movie/${id}`} style={{ textDecoration: 'none' }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"

          >
            <Box
              height="200px"
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <img
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
                alt="movie"
                src={image}
              />
            </Box>
            <Divider />
            <Box p={2} textAlign="center">
              <Typography color={main} sx={{ mt: "1rem" }}>
                {title}
              </Typography>
              <Typography color="green" sx={{ mt: "1rem" }}>
                {genre}
              </Typography>
              <Typography color={main}>
                see more..
              </Typography>
            </Box>
          </Box>
        </Link>
    </WidgetWrapper>
  );
};

export default Product;
