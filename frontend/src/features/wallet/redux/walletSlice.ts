import { createSlice } from "@reduxjs/toolkit";
import { Wallet } from "../types";


interface WalletState{
    wallet: Wallet
}

const initialState: WalletState = {
    wallet: {
        coinsAmount: 0,
        maticAmount: 0
    }
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState: initialState,
    reducers: {}
})

export const walletReducer = walletSlice.reducer;
export default walletSlice;