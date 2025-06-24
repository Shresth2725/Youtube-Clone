import { createSlice } from "@reduxjs/toolkit";


const AppSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true ,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen ;
        },
        RemoveMenu: (state) => {
            state.isMenuOpen = false ;
        },
        AddMenu: (state) => {
            state.isMenuOpen = true ; 
        }
    },
})


export const { toggleMenu , RemoveMenu , AddMenu } = AppSlice.actions ; 
export default AppSlice.reducer ;