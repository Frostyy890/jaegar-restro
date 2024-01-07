import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface OptionsState {
    selectedOption: string | null,
}

const initialState: OptionsState = {
    selectedOption: "Dine in",
}

const OptionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setSelectedOption: (state, action: PayloadAction<string>) => {
        state.selectedOption = action.payload;
    }
  }
});

export const {setSelectedOption} = OptionsSlice.actions

export default OptionsSlice.reducer