import { configureStore } from "@reduxjs/toolkit";
import { viewSlice } from "./slices/view";
import { productSlice } from "./slices/product";

export const storeGlobal= configureStore({
    reducer:{
        view:viewSlice.reducer,
        product:productSlice.reducer
    }
})