import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchingStatus } from "../../../common/utility_types/FetchingStatus";
import { login } from "./asyncActions";


interface UserState{
  email: string | null,
  password: string | null,
  token: string | null,
  signUpStatus: FetchingStatus,
  isAuthorized: boolean
}

const initialState: UserState = {
    email: null,
    isAuthorized: false,
    password: null,
    token: null,
    signUpStatus: FetchingStatus.NEVER
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(login.pending, (state) => {
          state.signUpStatus = FetchingStatus.LOADING;
        }),

        builder.addCase(login.rejected, (state) => {
            state.signUpStatus = FetchingStatus.ERROR;
        }),

        builder.addCase(login.fulfilled, (state, action: PayloadAction<UserState>) => {
        
            state.signUpStatus = FetchingStatus.SUCCESFUL;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isAuthorized = true;
        })
      },
});


export const userReducer = userSlice.reducer;
export default userSlice