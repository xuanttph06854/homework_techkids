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
            console.log(action.payload)
            let amountOrder = action.payload.item.amount
            console.log(amountOrder)
            if (amountOrder === 0) {
                return state.filter(item => item.name !== action.payload.item.name)
            } else {
                console.log(state)
                return state.map(
                    item => item.name === action.payload.item.name
                        ? {
                            name: item.name,
                            unitPrice: item.unitPrice,
                            amount: item.amount - 1
                        }
                        : item
                )
            }

        default: return state
    }
}