import { combineReducers } from "redux";
import detector_reducer from "./detector_reducer";


const rootReducer = combineReducers({
    detector: detector_reducer
})

export default rootReducer;