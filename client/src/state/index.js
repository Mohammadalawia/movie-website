import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  user: null,
  token: null,
  products: [],
  genres:[],
  orders:[],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
    setProduct: (state, action) => {
      const updatedProducts = state.products.map((product) => {
        if (product._id === action.payload.product._id) return action.payload.product;
        return product;
      });
      state.products = updatedProducts;
    },
    setGenres: (state, action) => {
      state.genres = action.payload.genres;
    },
    setGenre: (state, action) => {
      const updatedGenres = state.genres.map((genre) => {
        if (genre._id === action.payload.genre._id) return action.payload.genre;
        return genre;
      });
      state.genres = updatedGenres;
    },
    setOrders: (state, action) => {
      state.orders = action.payload.orders;
    },
    setOrder: (state, action) => {
      const updatedOrders = state.orders.map((order) => {
        if (order._id === action.payload.order._id) return action.payload.order;
        return order;
      });
      state.orders = updatedOrders;
    },
    deleteOrder: (state, action) => {
      const orderId = action.payload;
      state.orders = state.orders.filter((order) => order.id !== orderId);
    },
  }
});

export const { setMode, setLogin, setLogout, setFriends, setProducts, setProduct, setGenres, setGenre, setOrders, setOrder, deleteOrder } =
  authSlice.actions;
export default authSlice.reducer;
