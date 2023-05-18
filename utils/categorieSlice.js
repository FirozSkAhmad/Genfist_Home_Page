import { createSlice } from "@reduxjs/toolkit";

const categorieSlice = createSlice({
    name: "categorie",
    initialState: {
        items: []
    },
    reducers: {
        addCategorieItems: (state, action) => {
            state.items = action.payload
        }
    }
})


export const { addCategorieItems } = categorieSlice.actions

export default categorieSlice.reducer