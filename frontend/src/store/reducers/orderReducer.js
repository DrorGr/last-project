// const initialState = {
//   orders: [],
//   currOrder: {}
// }

// export function orderReducer(state = initialState, action = {}) {
//   switch (action.type) {
//     case 'SET_ORDERS':
//       return { ...state, orders: action.orders }
//     case 'SET_ORDER':
//       return { ...state, currOrder: action.order }
//     case 'ADD_ORDER':
//       return { ...state, orders: [...state.orders, action.order] }
//     case 'CANCEL_ORDER':
//       return { ...state, orders: state.orders.filter(order => order._id !== action.orderId) }
//     case 'UPDATE_ORDER':
//       return {
//         ...state,
//         orders: state.orders.map(order =>
//           order._id === action.order._id ? action.order : order
//         )
//       }
//     default:
//       return state
//   }
// }
