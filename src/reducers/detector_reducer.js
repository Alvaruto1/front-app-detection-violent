import {
  SEND_IMAGE_DETECT,
  IS_LIVE_API_DETECTOR_VIOLENCE,
} from "../actions/detector_actions";
export default function (state = null, action) {
  switch (action.type) {
    case SEND_IMAGE_DETECT:
      const data = action.payload;
      return { ...state,  data};
    case IS_LIVE_API_DETECTOR_VIOLENCE:
      const data2 = action.payload;
      return { ...state, data2 };
    default:
      return state;
  }
}
