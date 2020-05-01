import { countryTypes } from "./country-types";
import { updatedData } from "./country-utils";

const INITIAL_DATA = {
  coronaData: "",
  isFetching: true,
};

const countryReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case countryTypes.FETCH_COUNTRY_DATA_START:
      return {
        ...state,
        coronaData: "",
        isFetching: true,
      };
    case countryTypes.FETCH_COUNTRY_DATA_SUCCESS:
      return {
        ...state,
        coronaData: updatedData(state.coronaData, action.payload),
        isFetching: false,
      };
    case countryTypes.FETCH_COUNTRY_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return {
        state,
      };
  }
};

export default countryReducer;
