import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


export interface CounterState {
    counterValue: number,
}

const inicialStateCounter: CounterState = {
    counterValue: 0,
}


const counterSlice = createSlice({
    name: 'counter',
    initialState: inicialStateCounter,
    reducers: {
        increment: (state) => {
            state.counterValue += 1
        },
        decrement: (state) => {
            state.counterValue -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.counterValue += action.payload;

        }

    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
