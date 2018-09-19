export default (state = {}, action) => {
  const initalState = 
    { squares: Array(9).fill(null) }
    return initalState

  switch(action.type) {
    case 'GET_SQUARES':
    return action.getSquares
  
  default:
    return state;
  }
};
