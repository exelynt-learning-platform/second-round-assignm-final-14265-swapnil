import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    sendMessageStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    sendMessageSuccess: (state, action) => {
      state.loading = false;
      state.messages.push(action.payload);
    },
    sendMessageFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addUserMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

export const {
  sendMessageStart,
  sendMessageSuccess,
  sendMessageFailure,
  addUserMessage,
} = chatSlice.actions;

export default chatSlice.reducer;