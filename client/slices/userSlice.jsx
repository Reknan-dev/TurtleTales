import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    username: null,
    errors: {
      general: null,
    },
    registrationSuccess: false,
    loading: false,
    formData: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    isSubmitting: false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    logoutUser: (state) => {
      state.token = null;
      state.username = null;
    },
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setRegistrationSuccess: (state, action) => {
      state.registrationSuccess = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearFormData: (state) => {
      state.formData = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
  },
});

export const {
  setToken,
  setUsername,
  setErrors,
  logoutUser,
  setFormData,
  setRegistrationSuccess,
  setLoading,
  setSubmitting,
  clearFormData,
} = userSlice.actions;
export default userSlice.reducer;
