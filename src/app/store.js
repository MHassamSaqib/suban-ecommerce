import {configureStore} from "@reduxjs/toolkit";
// import sliderReducer  from "../feauture/slices/mySliderSlice" 
import sliderReducer2  from "../feauture/slices/sliderSlice"
// import cardReducer from "../feauture/slices/cartSlice"

export const store = configureStore({

    reducer:{
        // slider : sliderReducer,
        slider : sliderReducer2,
    },
})