import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../serviсes/authService";

interface AuthRequest{
    username: string,
    password: string
  }

export const login = createAsyncThunk(
    'login',
    async ( request: AuthRequest, signInThunk) => {
      try {
        console.log('createAsyncThunk',request);
        const response = await authService.login(request.username, request.password);
        return response ;
      } catch (error) {
        return error;
      }
    }
  );
