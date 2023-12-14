import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  schedule: [
    {
      day: "Monday",
      link: "monday",
      classes: [
        {
          class_name: "Fitness",
          class_time: "9:00am - 10:00am",
          class_trainer: "David Vila",
        },
        {
          class_name: "Body Building",
          class_time: "10:00pm - 11:00pm",
          class_trainer: "John Weights",
        },
        {
          class_name: "Running",
          class_time: "4:00pm - 5:00pm",
          class_trainer: "Junifor Jonas",
        },
        {
          class_name: "Cycling",
          class_time: "6:00pm - 7:00pm",
          class_trainer: "Robert Louis",
        },
      ],
    },
    {
      day: "Tuesday",
      link: "tuesday",
      classes: [
        {
          class_name: "Boxing",
          class_time: "9:00am - 10:00am",
          class_trainer: "Mike Tyson",
        },
        {
          class_name: "Yoga",
          class_time: "10:00pm - 11:00pm",
          class_trainer: "Mia Kha",
        },
        {
          class_name: "Crossfit",
          class_time: "4:00pm - 5:00pm",
          class_trainer: "Cristofer Columbo",
        },
      ],
    },
    {
      day: "Wednesday",
      link: "wednesday",
      classes: [
        {
          class_name: "Cycling",
          class_time: "9:00am - 10:00am",
          class_trainer: "Mario Vreco",
        },
        {
          class_name: "Body Building",
          class_time: "10:00pm - 11:00pm",
          class_trainer: "John Weights",
        },
        {
          class_name: "Fitness",
          class_time: "4:00pm - 5:00pm",
          class_trainer: "Tom Rizzly",
        },
        {
          class_name: "Running",
          class_time: "6:00pm - 7:00pm",
          class_trainer: "Michael Jonson",
        },
      ],
    },
    {
      day: "Thursday",
      link: "thursday",
      classes: [
        {
          class_name: "Fitness",
          class_time: "9:00am - 10:00am",
          class_trainer: "David Vila",
        },
        {
          class_name: "Body Building",
          class_time: "10:00pm - 11:00pm",
          class_trainer: "John Weights",
        },
        {
          class_name: "Running",
          class_time: "4:00pm - 5:00pm",
          class_trainer: "Junifor Jonas",
        },
      ],
    },
    {
      day: "Friday",
      link: "friday",
      classes: [
        {
          class_name: "Crossfit",
          class_time: "9:00am - 10:00am",
          class_trainer: "Mike Mich",
        },
        {
          class_name: "Karate",
          class_time: "10:00pm - 11:00pm",
          class_trainer: "John Jones",
        },
        {
          class_name: "Meditation",
          class_time: "4:00pm - 5:00pm",
          class_trainer: "Lara Croft",
        },
        {
          class_name: "Workout",
          class_time: "6:00pm - 7:00pm",
          class_trainer: "Lary Wheels",
        },
      ],
    },
    {
      day: "Saturday",
      link: "saturday",
      classes: [
        {
          class_name: "Power Lifting",
          class_time: "9:00am - 10:00am",
          class_trainer: "David Laid",
        },
        {
          class_name: "Boxing",
          class_time: "10:00pm - 11:00pm",
          class_trainer: "Tyson Fury",
        },
        {
          class_name: "Yoga",
          class_time: "4:00pm - 5:00pm",
          class_trainer: "Milica Tails",
        },
      ],
    },
  ],
};

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
});

export default scheduleSlice.reducer;
