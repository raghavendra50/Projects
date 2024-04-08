import { configureStore, createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "User",
  initialState: {
    email: "",
    plan: {},
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      return { ...state, ...action.payload };
    },
  },
});

const store = configureStore({
  reducer: {
    User: UserSlice.reducer,
  },
});

export const User = UserSlice.actions;
export default store;
