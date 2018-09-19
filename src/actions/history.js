export function getSquares(history) {
 return {
  type: 'GET_SQUARES',  
     history: [{
         squares: Array(9).fill(null)
     }],
 }
}