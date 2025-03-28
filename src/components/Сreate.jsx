import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";

import style from "../styles/create.module.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addProduct({ title, name, img }));
    setTitle("");
    setName("");
    setImg("");
  };
  return (
    <label className={style.label}>
      <input
        className=""
        placeholder="title :"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className=""
        placeholder="category :"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className=""
        placeholder="image :"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />

      <button onClick={addItem}>Add Product</button>
    </label>
  );
};

export default Create;
