import { SEND_IMAGE_DETECT } from "../actions/detector_actions"
export default function (state = null, action){
    switch (action.type){
        case SEND_IMAGE_DETECT:            
            const data = action.payload;
            return {...state, data}
        default:
            return state;
    }
}
