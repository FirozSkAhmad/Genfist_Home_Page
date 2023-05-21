import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
    name: "categorie",
    initialState: {
        items: []
    },
    reducers: {
        addBannerSliceItems: (state, action) => {
            state.items = action.payload
        }
    }
})


export const { addBannerSliceItems } = bannerSlice.actions

export default bannerSlice.reducer