import { createSlice } from '@reduxjs/toolkit';

const initialLoginState = {
    isLogin: false,
};

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initialLoginState,
    reducers: {
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
        }
    }
});

export const loginSliceActions = loginSlice.actions;
export default loginSlice;