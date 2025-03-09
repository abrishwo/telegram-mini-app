import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  firstName: string;
  lastName: string;
}

const initialState: UserState = {
  firstName: '',
  lastName: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
