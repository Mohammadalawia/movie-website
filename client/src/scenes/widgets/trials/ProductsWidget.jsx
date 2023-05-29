import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from 'state';
import Product from '../ProductWidget';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (!products) {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          dispatch(setProducts({ products: data }));
        })
        .catch((err) => console.log('err', err));
    }
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Box ml="5rem">
      <Box display="flex" flexWrap="wrap">
        {Array.isArray(products) &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </Box>
    </Box>
  );
};

export default Products;
