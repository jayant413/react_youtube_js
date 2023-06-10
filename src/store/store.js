import { configureStore } from "@reduxjs/toolkit";
import  results  from "./results";
import details from "./details";



export const store = configureStore({
    reducer: {
        data: results,
        video : details, 
    },
});
