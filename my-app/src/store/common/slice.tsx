import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface PopapState {
    openPopap:boolean,
    data:object
}

const initialState:PopapState = {
    openPopap:false,
    data:{}
}
export  const commonSlice = createSlice ({
    name:"popap",
    initialState,
    reducers: {
        setOpenPopap: (state,action:PayloadAction<boolean>) => {
            state.openPopap = action.payload
        },
        setCurrentUser:(state, action:PayloadAction<object>) =>{
            state.data = action.payload
        }
    }
})


export const {setOpenPopap,setCurrentUser} = commonSlice.actions;
export default commonSlice.reducer;