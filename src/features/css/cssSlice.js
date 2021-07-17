import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    css: null,
}

const cssSlice = createSlice({
    name: 'css',
    initialState,
    reducers : {
        setCSS : (state,action) => {  
            state.css = action.payload.css;
        }
    }
})

export const { setCSS } = cssSlice.actions;

export const selectCSS = (state) => state.movie.css;

export default cssSlice.reducer;