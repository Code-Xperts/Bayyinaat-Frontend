// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentlanguage: { lang: "English",
    img: "https://dedevelopers.org/devolta/resources/frontend/images/english.png",
    code: "en",},
};

const languageSlice = createSlice({
  name: 'languageSlice',
  initialState,
  reducers: {
    changelanguage: (state,action) => {
      state.currentlanguage = action.payload;
    },
  },
});

export const { changelanguage } = languageSlice.actions;
// export const selectCounter = (state) => state.counter.value;
export default languageSlice.reducer;
