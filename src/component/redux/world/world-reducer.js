// import { GLOBAL_DATA } from "./global-data";
import { globalTypes } from "./world-types";
import { updatedData } from "./world-utils";

const INITIAL_DATA = {
  coronaData: "",
  isFetching: true,
};

const globalReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case globalTypes.FETCH_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case globalTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        coronaData: updatedData(state.coronaData, action.payload),
        isFetching: false,
      };
    case globalTypes.FETCH_DATA_FAILURE:
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

export default globalReducer;
