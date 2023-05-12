import { configureStore } from "@reduxjs/toolkit";
import { viewSlice } from "./slices/view";

export const storeGlobal= configureStore({
    reducer:{
        view:viewSlice.reducer
    }
})