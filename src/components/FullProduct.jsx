import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../redux/api/apiSlice";

import style from "../styles/fullproduct.module.css";

const FullProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useGetProductQuery({ id });

  const goBack = () => navigate(-1);

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <div>
      <div className={style.product}>
        <h1 className={style.title}>{data.title}</h1>
        <h2 className={style.price}>price {data.price}$</h2>
        <p className={style.description}>{data.description}$</p>
        <div className={style.img}>
          {data.images.map((img) => (
            <img key={img} src={img} alt="Images" />
          ))}
        </div>

        <div className={style.buttons}>
          {/* <button className={style.like}>like</button> */}
          <button onClick={goBack}>Return</button>{" "}
        </div>
      </div>
    </div>
  );
};

export default FullProduct;
