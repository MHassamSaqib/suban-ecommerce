import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


// kaam kr rha hy ya slice
// .. api sy data get krky ui ma show bhi kr rha ha bus and design for better exp 

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch("https://fakestoreapi.com/products?");
    return response.json();
  });


 
      
export const mySliderSlice=createSlice({
     
        name:"api",
            initialState:{
                users: [] ,
                // loading:false,
                // error:null,
                isLoading: false,
          data: null,
          isError: false,
            },
       
        extraReducers: (builder) => {
          builder.addCase(fetchTodos.pending, (state, action) => {
            state.isLoading = true;
          });
          builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
          });
          builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
          });
        },
      });


export default mySliderSlice.reducer