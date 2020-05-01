import { globalTypes } from "./world-types";

export const fetchDataStart = (data) => ({
  type: globalTypes.FETCH_DATA_START,
  payload: data,
});

export const fetchDataSuccess = (data) => ({
  type: globalTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (data) => ({
  type: globalTypes.FETCH_DATA_FAILURE,
  payload: data,
});
