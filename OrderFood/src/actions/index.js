import { ADD_ORDER } from './type'

export const addOrder = (order) => ({
    type: ADD_ORDER,
    // 1 object order co: name, amount, unitPrice
    payload: order
})