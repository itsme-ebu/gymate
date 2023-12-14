import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: [
    {
      id: "blog1",
      author: "Admin",
      time: "Dec 11, 2023",
      catagory: "Yoga",
      banner:
        "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Yoga For Everyone in 2022",
      des: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.",
    },
    {
      id: "blog2",
      author: "Admin",
      time: "Dec 05, 2023",
      catagory: "Workout",
      banner:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Getting Back Into CrossFit After Vacation ",
      des: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.",
    },
    {
      id: "blog3",
      author: "Admin",
      time: "Nov 18, 2023",
      catagory: "Yoga",
      banner:
        "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Meet Fitness Ambassador Grace",
      des: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.",
    },
    {
      id: "blog5",
      author: "Admin",
      time: "Nov 08, 2023",
      catagory: "Yoga",
      banner:
        "https://images.pexels.com/photos/2413552/pexels-photo-2413552.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Best are European Materls Direct",
      des: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.",
    },
    {
      id: "blog6",
      author: "Admin",
      time: "Nov 02, 2023",
      catagory: "Workout",
      banner:
        "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Give your Fitness a Boost with our Gym",
      des: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.",
    },
    {
      id: "blog7",
      author: "Admin",
      time: "Nov 02, 2023",
      catagory: "Workout",
      banner:
        "https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "How to Get Fit Your Kids Moving Throughout The Summer",
      des: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.",
    },
    {
      id: "blog8",
      author: "Admin",
      time: "Oct 28, 2023",
      catagory: "Workout",
      banner:
        "https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Give your fitness a boost with our new gym challenge",
      des: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley.",
    },
  ],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
});

export default blogSlice.reducer;
