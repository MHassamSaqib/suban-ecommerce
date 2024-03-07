import Category from "../../Pages/Category/index";
import Slider from "../../Components/Slider/Slider";
import Imp from "../../Components/Imp/ReduxApi.jsx"
import Cart from "../../Components/Cart/index.js";
import { Link } from "react-router-dom";

function Home() {
  return <div>
    <Slider/>
    <Imp/>
   
    {/* <Category/> */}
  </div>

}
export default Home;
