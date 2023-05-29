import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box)(({ theme }) => ({
  padding: "1.5rem 1.5rem 0.75rem 1.5rem",
  backgroundColor: theme.palette.background.alt,
  borderRadius:"0.75rem",
  overflow:"hidden",
  boxShadow:"0 2px 4px rgba(0,0,0,0.2)",
  
}));

export default WidgetWrapper;
