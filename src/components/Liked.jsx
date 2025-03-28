import { useSelector } from "react-redux";

import style from "../styles/products.module.css";
import Like from "./Like";

const Liked = () => {
  const { liked } = useSelector((state) => state.products);

  return (
    <div className={style.products}>
      {liked.map((product) => (
        <Like key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Liked;
