import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import style from "../styles/fullproduct.module.css";

const FullProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(
          "https://api.escuelajs.co/api/v1/products/" + id
        );
        setProduct(data);
        return data;
      } catch (error) {
        alert("Ошибка при получении данных");
        navigate("/");
      }
    }
    fetchProduct();
  }, []);

  const goBack = () => navigate(-1);

  return !product ? (
    <section className="preloader">Loading...</section>
  ) : (
    <div>
      <div className={style.product}>
        <h1 className={style.title}>{product.title}</h1>
        <h2 className={style.price}>price {product.price}$</h2>
        <p className={style.description}>{product.description}$</p>
        <div className={style.img}>
          {product.images.map((img) => (
            <img key={img} src={img} alt="Images" />
          ))}
        </div>
        <div className={style.buttons}>
          <button onClick={goBack}>Return</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default FullProduct;
