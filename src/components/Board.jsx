import React, { useState } from "react";
import chekWinner from "./checkwinner";

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [res, setres] = useState(null);
  const [winner,setWinner] = useState(false)
  const newBoard = [...value];
  const handleclick = (index) => {
    if (newBoard[index] || winner) {
      return;
    }

    newBoard[index] = turn ? "x" : "O";
    setValue(newBoard);
    setTurn(!turn);
    const result = chekWinner(newBoard);
    setres(result);
    if(result!==null){
      setWinner(!winner)
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {res === "Draw" ? <h1>Game Draw</h1> : <h1>Winner is {res}</h1>}
      <div className="board-row1">
        <button onClick={() => handleclick(0)}>{value[0]}</button>
        <button onClick={() => handleclick(1)}>{value[1]}</button>
        <button onClick={() => handleclick(2)}>{value[2]}</button>
      </div>
      <div className="board-row1">
        <button onClick={() => handleclick(3)}>{value[3]}</button>
        <button onClick={() => handleclick(4)}>{value[4]}</button>
        <button onClick={() => handleclick(5)}>{value[5]}</button>
      </div>
      <div className="board-row1">
        <button onClick={() => handleclick(6)}>{value[6]}</button>
        <button onClick={() => handleclick(7)}>{value[7]}</button>
        <button onClick={() => handleclick(8)}>{value[8]}</button>
      </div>
      <button
        onClick={() => {
          setWinner(false)
          setTurn(true);
          setres(null);
          setValue(Array(9).fill(null));
        }}
        style={{ height: "100px", width: "150px", margin: "30px" }}
      >
        start Again
      </button>
    </div>
  );
};

export default Board;
