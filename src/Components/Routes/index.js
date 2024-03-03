import { Routes, Route } from "react-router-dom";
import Category from "../../Pages/Category";
import Home from "../../Pages/Home";
// import addCard from "../Products/AddCart/addCard";
import Slider from "../Slider/Slider";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/" element={<Category />}></Route> */}
    
      <Route path="/:categoryId" element={<Category />}></Route>
    </Routes>
  );
}
export default AppRoutes;
