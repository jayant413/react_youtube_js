import { createSlice } from "@reduxjs/toolkit";

export const details = createSlice({
    name: "video",
    initialState: {
        vd: {}
    },
    reducers: {
        getVideoDetail: (state, action) => {
            state.vd = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const { getVideoDetail} = details.actions;

export default details.reducer;
