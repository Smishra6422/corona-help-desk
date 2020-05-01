import { SYMPTOM_DATA } from "./symptom-data";

const INITIAL_STATE = {
  symptomData: SYMPTOM_DATA,
};

const symptomReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default symptomReducer;
