import {createSlice} from '@reduxjs/toolkit';

const smth : string | null = 'Oleg';
export const userSlice = createSlice({
  name: 'user',
  initialState: 'Oleg',
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
      // state.name = action.payload.name
      // state.img = ...
      return state;
    },
    changeUserName: (state, action) => {
      // state.name = action.payload.name
      state = action.payload;
      return state;
    },
    logoutUser: (state) => {
      state = '';
      return state;
    },
  },
});

export const {setUser, changeUserName, logoutUser} = userSlice.actions;

export const {reducer: userReducer} = userSlice;
