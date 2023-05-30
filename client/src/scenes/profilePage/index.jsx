import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import ProfileProduct from "scenes/widgets/ProfileProductsWidget";

const ProfilePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display="flex"
        justifyContent="center"
        gap="2rem"
        
      >
        <Box display="flex" width="100%" flexBasis={isNonMobileScreens ? "40%" : undefined}>
        <Box m="2rem 0" pl="12rem"/>
          <UserWidget />
          <Box  width="70vw" pl="1rem">
          <ProfileProduct/>
          </Box>
          
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
