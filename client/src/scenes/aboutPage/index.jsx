import Navbar from "scenes/navbar";
import {
  Box,
  Typography,
} from "@mui/material";

const AboutPage = () => {


  return (
    <Box>
      <Navbar  />
      <Typography fontWeight="bold" fontSize="20px" sx={{pl:"5rem", mt:"5rem"}}>
        About us
      </Typography>
      <Typography  fontSize="15px" sx={{pl:"5rem", mt:"3rem"}}>
Movie Mania is a captivating website that caters to the insatiable cravings of cinephiles worldwide. With its vast repository of film-related content, it has become a virtual haven for movie enthusiasts seeking a one-stop destination for all things cinema. From in-depth reviews and critiques of the latest blockbusters to thought-provoking analysis of classic films, Movie Mania offers a treasure trove of knowledge and entertainment. The website's sleek and user-friendly interface allows visitors to navigate effortlessly through its extensive collection of articles, interviews, and behind-the-scenes features, ensuring a seamless browsing experience. Whether you're searching for recommendations on must-watch movies or yearning to delve into the world of film trivia, Movie Mania is the ultimate hub that fuels your passion for the seventh art.      </Typography>
      </Box>
  );
};

export default AboutPage;
