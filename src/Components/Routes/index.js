import { Routes, Route } from "react-router-dom";
import Category from "../../Pages/Category";
import Home from '../../Pages/Home/Home.js';
import SingleProduct from '../../Pages//SinglePage/SinglePage.js'
import Cart from "../Cart/index.js"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='product/:id' element={<SingleProduct/>} />
      <Route path='cart' element={<Cart/>} />

    
      <Route path="/:categoryId" element={<Category />}></Route>
    </Routes>
  );
}
export default AppRoutes;


