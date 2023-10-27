import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { getUser } from "./action";


export interface Data {
    name: string,
    phone: string,
    email: string,
    address: string,
    position_name: string,
    department: string,
    hire_date: string
}


interface InitialStateTypes {
    status: string,
    data: Data[],
    error: string | null
}

const initialState: InitialStateTypes = {
    status: "idle",
    data: [],
    error: null
}



export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<InitialStateTypes>) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.status = "Pending"
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.status = "Fulfilled"
                state.data = payload
            })
            .addCase(getUser.rejected, (state, { payload }: any) => {
                state.status = "Rejected"
                state.data = payload
            })

    },

})

export default dataSlice.reducer