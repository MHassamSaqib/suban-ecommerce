import { createSlice } from "@reduxjs/toolkit";

export const sliderSlice=createSlice({

    name:"slider",
    initialState:{
        value:0 ,
        length:4
    },
    reducers:{
        nextSlide(state, action) {
            state.value = action.payload > state.length - 1 ? 0 : action.payload;
          },
          prevSlide(state, action) {
            state.value = action.payload < 0 ? state.length - 1 : action.payload;
          },
       
        dotSlide(state,action) {
            const dot = action.payload;
            state.value= dot
        },

        
    },

})
// 2 export LAZIM

//  ya components ma kaam aye gy (individual reducers)
export const{nextSlide,prevSlide,dotSlide} = sliderSlice.actions  

// store ko bhi reference chahiye reducers to updateor retrive value
export default sliderSlice.reducer   