import { all, call } from "redux-saga/effects";

import { fetchDataStart } from "./world/world-saga";
import { fetchCountryDataStart } from "./country/country-saga";

// import { onGoogleSignInStart, onEmailSignInStart } from "./user/user-saga";

export function* rootSaga() {
  yield all([call(fetchDataStart), call(fetchCountryDataStart)]);
}
