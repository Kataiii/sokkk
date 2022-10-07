import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import internal from "stream";
import AuthService from '../../api/AuthRepository'

enum  signUpStatus {
    NEVER = 'NEVER', 
    LOADING = 'LOADING', 
    ERROR = 'ERROR', 
    SUCCESFUL = 'SUCCESFUL'
}

interface AuthREquest{
  username: string,
  password: string
}

interface UserState{
  email: string | null,
  password: string | null,
  token: string | null,
  signUpStatus: signUpStatus
}

const initialState: UserState = {
    email: null,
    password: null,
    token: null,
    signUpStatus: signUpStatus.NEVER
};

export const login = createAsyncThunk(
    'login',
    async ( request: AuthREquest, signInThunk) => {
      try {
        console.log('createAsyncThunk',request);
        const response = await AuthService.login(request.username, request.password);
        return response ;
      } catch (error) {
        return error;
      }
    }
  );

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.token = action.payload.token;
        },
        removeUser(state){
            state.email = null;
            state.password = null;
            state.token = null;
        },
    },

    extraReducers: (builder) => {

        builder.addCase(login.pending, (state) => {
          state.signUpStatus = signUpStatus.LOADING;
        }),

        builder.addCase(login.rejected, (state) => {
            state.signUpStatus = signUpStatus.ERROR;
        }),

        builder.addCase(login.fulfilled, (state, action: PayloadAction<UserState>) => {
        
            state.signUpStatus = signUpStatus.SUCCESFUL;
            state.email = action.payload.email,
            state.password = action.payload.password
        })
      },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;