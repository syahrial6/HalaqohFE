import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user : null,
    isError : false,
    isSuccess : false,
    isLoading : false,
    message : ""
}

export const LoginUser = createAsyncThunk("user/LoginUser",async(user,thunkAPI)=>{
    try {
        const response = await axios.post("https://halaqoh2.my.id/login",{
            email : user.email,
            password : user.password
        },{
            headers: {
                'Access-Control-Allow-Origin': '*'
              }
        });
        return response.data
    } catch (error) {
        if (error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
        
    }
});

export const getMe = createAsyncThunk("user/getme",async(_,thunkAPI)=>{
    try {
        const response = await axios.get("https://halaqoh2.my.id/me");
        return response.data
    } catch (error) {
        if (error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
        
    }
});

export const Logout = createAsyncThunk("user/Logout",async()=>{
    await axios.delete("https://halaqoh2.my.id/logout");
});
    
    

export const AuthSlice = createSlice({
    name : "auth",
    initialState,
    reducers :{
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        builder.addCase(LoginUser.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        builder.addCase(LoginUser.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })

        // get me
        builder.addCase(getMe.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(getMe.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        builder.addCase(getMe.rejected, (state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
}})
export const {reset} = AuthSlice.actions

export default AuthSlice.reducer
