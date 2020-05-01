import { combineReducers } from "redux";
import symptomReducer from "./symptom/symptom-reducer";
import precautionReducer from "./precaution/precaution-reducer";
import globalReducer from "./world/world-reducer";
import countryReducer from "./country/country-reducer";

const rootareducer = combineReducers({
  symptom: symptomReducer,
  precaution: precautionReducer,
  globalData: globalReducer,
  countryData: countryReducer,
});

export default rootareducer;
