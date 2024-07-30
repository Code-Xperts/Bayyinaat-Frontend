// counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentlanguage: { lang: "English",
    img: "https://w7.pngwing.com/pngs/64/514/png-transparent-flag-of-great-britain-flag-of-the-united-kingdom-english-flag-miscellaneous-angle-english-thumbnail.png",
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
