
import { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { KeyboardArrowDown,KeyboardArrowUp } from '@mui/icons-material';
import { useSelector } from "react-redux";
import FlexBetween from "components/FlexBetween";
import { useNavigate } from "react-router-dom";

const Categories = () =>{

    const genres = useSelector((state)=>state.genres)
    const navigate = useNavigate();
    const [opened, setOpened] = useState(false)
    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const background = theme.palette.background.default;
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const main = theme.palette.neutral.main;

    
    return(
      <Box display="flex" justifyContent="center" >
        {opened ?(
      <Box display="flex" justifyContent="center"  backgroundColor={alt}>
          
      <Box display="flex" flexWrap="wrap" gap="2rem" ml="5rem">
        {genres.map((genre) => (
          
        <FlexBetween gap="1.75rem">
        <Typography
          fontSize="1rem"
          onClick={()=>{navigate(`/genre/${genre.id}`)}}
          color={main}
          key={genre.id}
          sx={{
            "&:hover": {
              color: neutralLight,
              cursor: "pointer",
            },
          }}
        >
          {genre.name}
        </Typography>
      </FlexBetween>
        ))}
            <Box display="flex" flexWrap="wrap" justifyContent="center" width="100%" ml="-2.5rem">
      <Box>
        <KeyboardArrowUp onClick={() => { setOpened(false); }} />
      </Box>
    </Box>
      </Box>
      </Box>

    ):(
      <Box display="flex" justifyContent="center" width="100%">
      <KeyboardArrowDown
        sx={{
          fontSize: 20,
          backgroundColor: background,
        }}
        onClick={() => {
          setOpened(true);
        }}
      />
    </Box>
    )}
    </Box>

    );
}
export default Categories;