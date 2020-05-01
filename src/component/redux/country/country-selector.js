import { createSelector } from "reselect";

const selectCountry = (state) => state.countryData;

export const selectCountryData = createSelector(
  [selectCountry],
  (countryData) => countryData.coronaData
);

export const selectCountryFetching = createSelector(
  [selectCountry],
  (countryData) => countryData.isFetching
);
