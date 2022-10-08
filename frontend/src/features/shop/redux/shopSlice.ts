import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchingStatus } from "../../../common/utility_types/FetchingStatus";
import { loadProduct } from "./asyncActions";

export interface CartItem {
    productId: number,
    count: number
}

export interface ShopItem {
    id: number,
    price: number,
    description: string,
    title: string,
    imgPath: string
}

interface ShopState {
    itemsStatus: FetchingStatus,
    items: Array<ShopItem>,
    cart: CartItem[],
    orderStatus: FetchingStatus
}

const initialState: ShopState = {
    itemsStatus: FetchingStatus.NEVER,
    items: [],
    cart: [],
    orderStatus: FetchingStatus.NEVER
}
const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ShopItem>) {
            const itemIndex = state.cart.findIndex((item) => item.productId == action.payload.id)
            if (itemIndex < 0) {
                state.cart.push({ productId: action.payload.id, count: 1 });
            }
            else {
                state.cart[itemIndex].count++;
            }
        },
        increaseCount(state, action: PayloadAction<ShopItem>) {
            const itemIndex = state.cart.findIndex((item) => item.productId == action.payload.id);
            const count = state.cart[itemIndex].count;
            state.cart = [...state.cart.slice(0, itemIndex), ...state.cart.slice(itemIndex + 1, state.cart.length - 1)];
            if (count != 1) {
                state.cart = [
                    ...state.cart.slice(0, itemIndex),
                    { productId: action.payload.id, count: count - 1 },
                    ...state.cart.slice(itemIndex + 1, state.cart.length - 1)
                ];
            }
        },
        deleteFromCart(state, action: PayloadAction<ShopItem>) {
            const itemIndex = state.cart.findIndex((item) => item.productId == action.payload.id);
            state.cart = [...state.cart.slice(0, itemIndex), ...state.cart.slice(itemIndex + 1, state.cart.length - 1)];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loadProduct.pending, (state) => {
            state.itemsStatus = FetchingStatus.LOADING;
        }),
            builder.addCase(loadProduct.rejected, (state) => {
                state.itemsStatus = FetchingStatus.ERROR;
            }),
            builder.addCase(loadProduct.fulfilled, (state, action: PayloadAction<ShopItem[]>) => {
                state.itemsStatus = FetchingStatus.SUCCESFUL;
                state.items = action.payload
            })
    }
})

export const shopReducer = shopSlice.reducer;
export default shopSlice;