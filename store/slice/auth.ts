import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deflate } from "zlib";

interface AuthState {
    phoneVerifyToken?: string
}

const initialState: AuthState = {
    phoneVerifyToken: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updatePhoneVerifyToken: (state, action: PayloadAction<string>) => {
            state.phoneVerifyToken = action.payload
        }
    }
})

export const { updatePhoneVerifyToken } = authSlice.actions
export default authSlice.reducer
