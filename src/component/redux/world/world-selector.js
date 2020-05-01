import { createSelector } from "reselect";

const selectWorld = (state) => state.globalData;

export const selectWorldData = createSelector(
  [selectWorld],
  (globalData) => globalData.coronaData
);

export const selectWorldFetching = createSelector(
  [selectWorld],
  (globalData) => globalData.isFetching
);
