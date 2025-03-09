import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  bgColor: string;
  textColor: string;
}

const initialState: ThemeState = {
  bgColor: '#ffffff',
  textColor: '#000000',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState>) => {
      state.bgColor = action.payload.bgColor;
      state.textColor = action.payload.textColor;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
