import { ADD_ORDER, DELETE_ORDER } from '../actions/type'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_ORDER:
            // check xem order da co chua
            const orderExist = state.filter(order => order.name === action.payload.name)
            // console.log("order lenght: " + orderExist.length)
            if (orderExist.length === 0) {
                // add them
                return [...state, {
                    name: action.payload.name,
                    unitPrice: action.payload.unitPrice,
                    amount: 1
                }]
            } else {
                // update amount
                return state.map(
                    order => order.name === action.payload.name
                        ? {
                            name: order.name,
                            unitPrice: order.unitPrice,
                            amount: order.amount + 1
                        }
                        : order
                )
            }

        case DELETE_ORDER:
            return state.filter(item => item.name !== action.payload.name)
        default: return state
    }
}