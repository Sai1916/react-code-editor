import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    html: null,
}

const htmlSlice = createSlice({
    name: 'html',
    initialState,
    reducers : {
        setHTML : (state,action) => {  
            state.html = action.payload.html;
        }
    }
})

export const { setHTML } = htmlSlice.actions;

export const selectHtml = (state) => state.movie.html;

export default htmlSlice.reducer;