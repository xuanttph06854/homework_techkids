import { FLIM_DETAIL } from './type'

export const filmDetail = (data) => ({
    type: FLIM_DETAIL,
    payload: data
})