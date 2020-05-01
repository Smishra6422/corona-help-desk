import { takeLatest, call, put } from "redux-saga/effects";
import { globalTypes } from "./world-types";
import { fetchDataFailure, fetchDataSuccess } from "./world-action";

export function* fetchDataAsync() {
  try {
    const response = yield call(fetch, "https://api.covid19api.com/summary");
    const responseBody = yield response.json();
    yield put(fetchDataSuccess(responseBody));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

export function* fetchDataStart() {
  yield takeLatest(globalTypes.FETCH_DATA_START, fetchDataAsync);
}
