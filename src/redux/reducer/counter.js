import { createSlice } from "@reduxjs/toolkit";
// function aburayno lsocona

const counter = createSlice({
   name: "counter",
   
   initialState :{
    countValue: 5,
   },

   reducers:{
    increment: (state) => {
        state.countValue +=1
    },
    decrement: (state) => {
        state.countValue -=1
    },
    reset: (state) => {
        state.countValue = 0
    },
   }
})

export const {increment , decrement  , reset } = counter.actions

export default counter.reducer