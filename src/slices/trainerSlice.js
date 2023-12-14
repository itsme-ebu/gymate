import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trainers: [
    {
      id: "john",
      name: "John Lewis",
      role: "Yoga Trainer",
    },
    {
      id: "jonathan",
      name: "Jonathan Doe",
      role: "Crossfit Trainer",
    },
    {
      id: "ana",
      name: "Ana June",
      role: "Personal Trainer",
    },
  ],
};

export const trainerSlice = createSlice({
  name: "trainer",
  initialState,
});

export default trainerSlice.reducer;
