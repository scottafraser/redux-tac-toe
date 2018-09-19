export default (state = {}, action) => {
  let newState;
  const { history, stepNumber, xIsNext} = action;

  switch (action.type) {
  case 'CLICK_BOX':
    newState = Object.assign({}, state, {
        history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    });
    return newState;

//   case c.UPDATE_TIME:
//     const newTicket = Object.assign({}, state[id], {formattedWaitTime});
//     newState = Object.assign({}, state, {
//       [id]: newTicket
//     });
//     return newState;

  default:
    return state;
  }
};