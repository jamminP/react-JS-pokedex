import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchArrayPokeData } from "./fetchArrayPokeData";

export const fetchPokemonList = createAsyncThunk(
    'pokemon/fetchList',
    async (__, thunkAPI) => {
        try{
            const data = await fetchArrayPokeData();
            return data;
        }catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        list: [],
        loading: false,
        error: null,
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemonList.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemonList.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchPokemonList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to load Pokemon data";
            })
    },
});

export default pokemonSlice.reducer;