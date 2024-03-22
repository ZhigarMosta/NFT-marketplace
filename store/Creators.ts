import { createEvent, createStore, createEffect } from "effector";

import { AllTime, ThisMonth, ThisWeek, ToDay } from "@/data/Rankings/json";

export const $AllTime = createStore([]);
export const $ThisMonth = createStore([]);
export const $ThisWeek = createStore([]);
export const $ToDay = createStore([]);

export const getAllTimeFx = createEffect(async () => {
  try {
    const response = await AllTime;
    return response;
  } catch (error) {
    throw error;
  }
});
export const getThisMonthFx = createEffect(async () => {
  try {
    const response = await ThisMonth;
    return response;
  } catch (error) {
    throw error;
  }
});
export const getThisWeekFx = createEffect(async () => {
  try {
    const response = await ThisWeek;
    return response;
  } catch (error) {
    throw error;
  }
});
export const getToDayFx = createEffect(async () => {
  try {
    const response = await ToDay;
    return response;
  } catch (error) {
    throw error;
  }
});

$AllTime.on(getAllTimeFx.doneData, (state, data) => data);
$ThisMonth.on(getThisMonthFx.doneData, (state, data) => data);
$ThisWeek.on(getThisWeekFx.doneData, (state, data) => data);
$ToDay.on(getToDayFx.doneData, (state, data) => data);

getAllTimeFx();
getThisMonthFx();
getThisWeekFx();
getToDayFx();
