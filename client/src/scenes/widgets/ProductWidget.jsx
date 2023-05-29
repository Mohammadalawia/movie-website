import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme, Divider, useMediaQuery } from '@mui/material';
import WidgetWrapper from 'components/WidgetWrapper';

const Product = ({ id, title, image, genre }) => { 
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <WidgetWrapper m={isNonMobileScreens ? "2rem 0 0 1rem" : "2rem 2rem "} width={isNonMobileScreens ? "30%" : "70%"}>
      <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
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
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain',
              }}
              alt="movie"
              src={image}
            />
          </Box>
          <Divider />
          <Box p={0} textAlign="center">
            <Typography color={main} >
              {title}
            </Typography>
            <Typography color="green" sx={{ mt: "1rem" }}>
              {genre}
            </Typography>

          </Box>
        </Box>
      </Link>
    </WidgetWrapper>
  );
};

export default Product;
