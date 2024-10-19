const chekWinner = (newBoard)=>{
    if(newBoard[0] ===newBoard[1]&& newBoard[1]===newBoard[2]){
      return newBoard[0]
    }
    if(newBoard[3] ===newBoard[4]&& newBoard[4]===newBoard[5]){
      return newBoard[3]
    }
    if(newBoard[6] ===newBoard[7]&& newBoard[7]===newBoard[8]){
      return newBoard[6]
    }
    if(newBoard[0] ===newBoard[3]&& newBoard[3]===newBoard[6]){
      return newBoard[0]
    }
    if(newBoard[1] ===newBoard[4]&& newBoard[4]===newBoard[7]){
      return newBoard[1]
    }
    if(newBoard[2] ===newBoard[5]&& newBoard[5]===newBoard[8]){
      return newBoard[2]
    }
    if(newBoard[0] ===newBoard[4]&& newBoard[4]===newBoard[8]){
      return newBoard[0]
    }
    if(newBoard[2] ===newBoard[4]&& newBoard[4]===newBoard[6]){
      return newBoard[2]
    }
    for(let i = 0;i<newBoard.length;i++){
      if(newBoard[i]===null){
          return null
      }
     
    }
     return "Draw"
    
}
export default chekWinner