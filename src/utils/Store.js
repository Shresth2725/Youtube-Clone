import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice"
import SearchSlice from "./SearchSlice"

const Store = configureStore({
    reducer: {
        app: AppSlice ,
        search: SearchSlice ,
    }
}) ;


export default Store ;