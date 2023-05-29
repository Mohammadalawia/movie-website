import Navbar from "scenes/navbar";
import {
  Box,
  Typography,
} from "@mui/material";

const AboutPage = () => {


  return (
    <Box>
      <Navbar />
      <Typography fontWeight="bold" fontSize="20px" sx={{pl:"5rem", mt:"5rem"}}>
        Hello this is the about page.
      </Typography>
      </Box>
  );
};

export default AboutPage;
