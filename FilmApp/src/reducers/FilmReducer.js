import { FLIM_DETAIL } from '../actions/type'

export default function (state = {}, action) {
    switch (action.type) {
        case FLIM_DETAIL:
            return action.payload
        default:
            return state
    }

}