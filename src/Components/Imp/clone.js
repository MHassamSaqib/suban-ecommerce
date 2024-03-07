
//   import React, { useEffect } from "react";
//   import { useDispatch, useSelector } from "react-redux";
//   import { fetchTodos } from "../../feauture/slices/mySliderSlice";
//   import { Link, useParams } from "react-router-dom";
  
  
  
  
  
//   function ReduxApi() {
//     // redex tool kit logic to get data from api
//     //  ITS WORKING BUT NOT CSS NOT INPLEMENT
  
//     //  const slider = (item) => {
   
//     const dispatch = useDispatch();
//     const state = useSelector((state) => state.api);
  
//     useEffect(() => {
  
//       dispatch(fetchTodos())
//     }, [])
  
//       // Function to handle page change

    
//     if (state.isLoading) {
//       return <h1>Loading...</h1>;
//     }
//     console.log("state asd", state);
  
  
  
//     return (
//       <div className="app">
//      <div className="flex flex-col text-center w-full mt-20">
//           <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
//           <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
//         </div>
//         <section class="text-gray-600 body-font">
//           <div class="container px-5 py-24 mx-auto">
//             <div class="flex flex-wrap -m-4">
//               {state.data &&
//                 state.data.map((e) => (
//                   <Link to={`/product/${e.id}`} class="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-55 mb-4 cursor-pointer">
//                     <a class="block relative h-48 rounded overflow-hidden">
//                       <img
//                         alt="ecommerce"
//                         class="object-contain object-center w-full h-full block"
//                         src={e.image}
//                       ></img>
//                     </a>
//                     <div class="mt-4">
//                       <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
//                         {e.category}
//                       </h3>
//                       <h2 class="text-gray-900 title-font text-lg font-medium">
//                         {e.title}
//                       </h2>
//                       <p class="mt-1">{e.price}</p>
//                     </div>
//                   </Link>
//                 ))}
//             </div>
//           </div>
//         </section>
  
  

  
  
  
  
//       </div>
//     );
                
//   }
  
  
//   export default ReduxApi;
  