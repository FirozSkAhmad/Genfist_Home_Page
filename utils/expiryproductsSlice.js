import { createSlice } from "@reduxjs/toolkit";

const expiryproductsSlice = createSlice({
    name: "expiryproducts",
    initialState: {
        items: []
    },
    reducers: {
        addexpiryproductsItems: (state, action) => {
            state.items = action.payload
        }
    }
})


export const { addexpiryproductsItems } = expiryproductsSlice.actions

export default expiryproductsSlice.reducer