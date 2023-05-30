import { Box, Typography, IconButton} from "@mui/material";
import { CancelRounded } from "@mui/icons-material";
import { useSelector } from "react-redux";
import WidgetWrapper from "components/WidgetWrapper";
import { deleteOrder } from "state";
import { useDispatch } from "react-redux";

const ProfileProduct = () => {

  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  return (
        <WidgetWrapper width="42%" m="2rem" ml="3rem" >
            <Box >
            {Array.isArray(orders) && orders.length > 0 ? (
            orders.map((order, index) => (
                <Box key={index} p="0.5rem" display="flex" justifyContent="center" >
                    <WidgetWrapper display="flex"  width="100%">
                <Typography   justifyContent="center" width="90%">
                    {order.title}
                </Typography>
                <IconButton display="flex" onClick={() => handleDeleteOrder(order.id)} >
                    <CancelRounded  />
                </IconButton>
                </WidgetWrapper>
                </Box>))
                ):(
                    <Typography>No orders yet</Typography>)}
            </Box>
        </WidgetWrapper>

     
  );
};

export default ProfileProduct;
