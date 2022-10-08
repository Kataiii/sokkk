import { createAsyncThunk } from "@reduxjs/toolkit";
import shopService from "../services/shopService";

export const loadProduct = createAsyncThunk(
    'loadProducts',
    async () => {
        const response = await shopService.loadProducts();
        return response;
    }
)