import { createSlice } from "@reduxjs/toolkit";
import { PostForm } from "../../api/api.js";

const initialState = {
  form: [],
  isLoading: false,
  error: "",
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    CreateMessageForConsultation(state, action) {
      state.formBody = action.payload;
    },
  },
});

export const PostFormSending = (data) => {
  return async (dispatch) => {
    console.log(data);
    const response = await PostForm(data);
  };
};

export default formSlice.reducer;
