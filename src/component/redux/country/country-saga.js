import { takeLatest, call, put } from "redux-saga/effects";
import { countryTypes } from "./country-types";
import {
  fetchCountryDataFailure,
  fetchCountryDataSuccess,
} from "./country-action";

export function* fetchDataAsync({ payload }) {
  try {
    const response = yield call(fetch, "https://api.covid19api.com/summary");
    const responseBody = yield response.json();
    const newResponseData = yield call(update, responseBody, payload);
    yield put(fetchCountryDataSuccess(newResponseData));
  } catch (error) {
    yield put(fetchCountryDataFailure(error.message));
  }
}

export function* fetchCountryDataStart() {
  yield takeLatest(countryTypes.FETCH_COUNTRY_DATA_START, fetchDataAsync);
}

const update = (response, country) => {
  const res = response.Countries;
  const newRes = res.find(
    (data) => data.Slug.toLowerCase() === country.toLowerCase()
  );

  return newRes;
};
