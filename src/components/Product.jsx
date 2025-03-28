import { Link } from "react-router-dom";
import { addInLiked, removeProduct } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import style from "../styles/product.module.css";

const Product = ({ product }) => {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();

  const { id, category, images, title } = product;

  const setLiked = () => {
    dispatch(addInLiked(product));
    setLike(!like);
  };

  return (
    <div className={style.product}>
      <Link to={`product/${id}`}>
        <div className={style.title}>{title}</div>
        <div className={style.category}>{category.name}</div>
        <div className={style.img}>
          <img src={images[0]} alt="Images" />
        </div>
      </Link>
      <div className={style.buttons}>
        <button
          className={`${like ? style.unlike : style.like}`}
          onClick={setLiked}
        >
          like
        </button>
        <button
          className={style.delete}
          onClick={() => dispatch(removeProduct(id))}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Product;
