import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../utils/products";

const initialState = {
    products: products,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
});

export default productSlice.reducer;
export const {} = productSlice.actions;
