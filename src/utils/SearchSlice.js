import { createSlice } from "@reduxjs/toolkit";


const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        
    },
    reducers: {
        chacheResult: (state , action) => {
             state = Object.assign(state , action.payload) ;
        }
    }
}) ; 


export const { chacheResult } = SearchSlice.actions ;
export default SearchSlice.reducer ; 