import { createSlice } from '@reduxjs/toolkit';

const initialDataSlice = {
    items: []
};

const dataSlice = createSlice({
    name: 'dataSlice',
    initialState: initialDataSlice,
    reducers: {
        getAllData (state, action) {
            state.items = [...state.items, action.payload]
        }
    }
});

export const dataSliceActions = dataSlice.actions;
export default dataSlice;