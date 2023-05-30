import {
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";


const UserWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;
  const user = useSelector((state)=> state.user)
  const size = "200px";
  const {
    firstName,
    lastName,
    location,
    occupation,
    picturePath,
  } = user;

  return (
    <WidgetWrapper width="17rem" height="30rem">
      {/* FIRST ROW */}

        <FlexBetween gap="1rem"  >
        <Box width={size} height={size} >
      <img
        style={{ objectFit: "cover", borderRadius: "40%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${picturePath}`}
      />
    </Box>
                  
      </FlexBetween>
      <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
          </Box>
      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
          <LocationOnOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>

      <Divider />
      


     
    </WidgetWrapper>
  );
};

export default UserWidget;
