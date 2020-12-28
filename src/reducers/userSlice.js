import { createSlice } from '@reduxjs/toolkit';

export const userActionTypes = {
  UPDATE_USER: 'UPDATE_USER',
};

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: (_, action) => action.payload,
  },
});

const { actions, reducer } = userSlice;
const { setUser } = actions;
export { actions, reducer, setUser };
export default { actions, reducer };
