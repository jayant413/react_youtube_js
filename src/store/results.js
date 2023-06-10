import { createSlice } from "@reduxjs/toolkit";

export const results = createSlice({
    name: "data",
    initialState: {
        url: {}
    },
    reducers: {
        getApiData: (state, action) => {
            state.url = action.payload;
        }
    },
}); 
// Action creators are generated for each case reducer function
export const { getApiData} = results.actions;

export default results.reducer;
