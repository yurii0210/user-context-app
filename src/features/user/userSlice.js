import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Yurii', email: 'yurii@example.com' },
    { id: 2, name: 'Anna', email: 'anna@example.com' },
  ],
  isLoggedIn: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.users.push(action.payload);
      state.isLoggedIn = true;
    },
    clearUser(state) {
      state.users = [];
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;


export default userSlice.reducer;
