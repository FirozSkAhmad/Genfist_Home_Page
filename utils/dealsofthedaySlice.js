import { createSlice } from "@reduxjs/toolkit";

const dealsofthedaySlice = createSlice({
    name: "dealsoftheday",
    initialState: {
        items: []
    },
    reducers: {
        adddealsofthedayItems: (state, action) => {
            state.items = action.payload
        }
    }
})


export const { adddealsofthedayItems } = dealsofthedaySlice.actions

export default dealsofthedaySlice.reducer