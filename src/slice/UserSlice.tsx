import {createSlice} from '@reduxjs/toolkit';

interface User {
  image: string;
  firstname: string;
  lastname: string;
  number: number;
  email: string;
  password: string;
}

const initialState: {
  users: User[];
} = {
  users: [],
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const {addUser} = UserSlice.actions;
export default UserSlice.reducer;
