import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classes: [
    {
      id: "cls1",
      name: "Cycling",
      trainer: "Dorian Yate",
      time: " Wed: 9:00 am",
      img: "https://images.pexels.com/photos/15300123/pexels-photo-15300123/free-photo-of-woman-wearing-a-black-top-and-a-cycling-shorts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cls2",
      name: "Meditation",
      trainer: "Maria Mich",
      time: " Fri: 1:00 pm",
      img: "https://images.pexels.com/photos/13871518/pexels-photo-13871518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cls3",
      name: "Boxing",
      trainer: "John Flex",
      time: "Tue: 4:00 pm",
      img: "https://images.pexels.com/photos/2628207/pexels-photo-2628207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cls4",
      name: "Karate",
      trainer: " David Rich",
      time: "Sat: 9:00 am",
      img: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "cls5",
      name: "Power Lifting",
      trainer: " Larry Wheels",
      time: "Mon: 8:00 pm",
      img: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cls6",
      name: "Workout",
      trainer: "Shawn Ray",
      time: "Sun: 10:00 am",
      img: "https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cls7",
      name: "Crossfit",
      trainer: "Jenifer Alex",
      time: "Wen: 9:00 pm",
      img: "https://images.pexels.com/photos/4164523/pexels-photo-4164523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cls8",
      name: "Running",
      trainer: "Zinia Zessy",
      time: "Fri: 6:00 am",
      img: "https://images.pexels.com/photos/8520627/pexels-photo-8520627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cls9",
      name: "Body Building",
      trainer: "Jake Paul",
      time: "Mon: 8:00 pm",
      img: "https://images.pexels.com/photos/1552101/pexels-photo-1552101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cls10",
      name: "MMA",
      trainer: "Becky Lynch",
      time: "Fri: 6:00 am",
      img: "https://images.pexels.com/photos/9944378/pexels-photo-9944378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cls11",
      name: "Yoga",
      trainer: "Marta Mich",
      time: " Wen: 8:00 am",
      img: "https://images.pexels.com/photos/4056529/pexels-photo-4056529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cls12",
      name: "Fitness",
      trainer: "Mia Malkova",
      time: " Sun: 5:00 pm",
      img: "https://images.pexels.com/photos/1638324/pexels-photo-1638324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],
};

export const classSlice = createSlice({
  name: "classes",
  initialState,
});

export default classSlice.reducer;
