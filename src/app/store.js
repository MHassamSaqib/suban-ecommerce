import {configureStore} from "@reduxjs/toolkit";
import sliderReducer  from "../feauture/slices/mySliderSlice" 
import sliderReducer2  from "../feauture/slices/sliderSlice"

export const store = configureStore({

    reducer:{
        api : sliderReducer,
        slider : sliderReducer2,
    },
})