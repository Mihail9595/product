import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../redux/productSlice";

import style from "../styles/products.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
 

  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, []);

  return (
    <div className={style.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
