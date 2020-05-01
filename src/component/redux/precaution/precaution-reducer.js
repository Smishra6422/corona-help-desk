import { PRECAUTION_DATA } from "./precaution-data";

const INITIAL_STATE = {
  precautionData: PRECAUTION_DATA,
  isfet: true,
};

const precautionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default precautionReducer;
