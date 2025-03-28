import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import FullProduct from "./components/FullProduct";
import Header from "./components/Header";
import Liked from "./components/Liked";
import Create from "./components/Сreate";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes >
        <Route path="/product" element={<Products />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/create-product" element={<Create />} />
        <Route path="/:id" element={<FullProduct />} />
      </Routes>
    </div>
  );
}

export default App;
