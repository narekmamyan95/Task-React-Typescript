import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Data } from "./slice";


export const getUser = createAsyncThunk<Data[], string>(
    "data/getUser",
    async (term, { rejectWithValue }) => {
        try {
            const url = `http://localhost:3000?term=${term}`
            const data = await axios.get(url)
            return data.data
        } catch (error) {
            return rejectWithValue('Failed to fetch data');
        }
    }
)