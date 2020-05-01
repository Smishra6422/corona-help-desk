import { countryTypes } from "./country-types";

export const fetchCountryDataStart = (data) => ({
  type: countryTypes.FETCH_COUNTRY_DATA_START,
  payload: data,
});

export const fetchCountryDataSuccess = (data) => ({
  type: countryTypes.FETCH_COUNTRY_DATA_SUCCESS,
  payload: data,
});

export const fetchCountryDataFailure = (data) => ({
  type: countryTypes.FETCH_COUNTRY_DATA_FAILURE,
  payload: data,
});
