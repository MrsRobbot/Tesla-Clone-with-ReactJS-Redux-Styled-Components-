import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cars:["Model S","Model 3", "Model X", "Model Y" ]
}

const cardSlice = createSlice(
    {
       name:"car",
       initialState,
       reducers:{} 
    }
)

export const SelectCars = state => state.car.cars

export default cardSlice.reducer