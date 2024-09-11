import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  coins: number;
}

const initialState: CounterState = {
  coins: 0,
};

export const valterCoinSlice = createSlice({
  name: "ValterCoin",
  initialState,
  reducers: {
    increment: (state) => {
      state.coins += 1;
    },
    decrement: (state) => {
      state.coins -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.coins += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  valterCoinSlice.actions;

export default valterCoinSlice.reducer;
