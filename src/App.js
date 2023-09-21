
import {useState} from 'react';
import './App.css';


function Option({value, onOptionClick}){

  return (
    <button className="option" onClick={onOptionClick}>{value}</button>
  )
}

export default function Game() {
  const [playerMove, setPlayerMove] = useState(Array(2).fill(null));
  const [gameState, setGameState] = useState(null);


  function handleClick(userPick){
    const nextPlayers = playerMove.slice();
    nextPlayers[0] = userPick;

    nextPlayers[1] = pickComputerMove();
    setPlayerMove(nextPlayers);
  
    if(nextPlayers[0] === "rock"){
      if(nextPlayers[1] === "rock"){
        setGameState("It's a tie!");
      }else if(nextPlayers[1] === "paper"){
        setGameState("You lose!");
      }else{
        setGameState("You win!");
      }
    }else if(nextPlayers[0] === "paper"){
      if(nextPlayers[1] === "rock"){
        setGameState("You win!");
      }else if(nextPlayers[1] === "paper"){
        setGameState("It's a tie!");
      }else{
        setGameState("You lose!");
      }
    }else{
      if(nextPlayers[1] === "rock"){
        setGameState("You lose!");
      }else if(nextPlayers[1] === "paper"){
        setGameState("You win!");
      }else{
        setGameState("It's a tie!");
      }
    }
    
  } 

  return (
    <div className="App">
      <p>Rock Paper Scissors</p>
      <Option value="Rock"    onOptionClick={() => handleClick("rock")}/>
      <Option value="Paper"   onOptionClick={() => handleClick("paper")}/>
      <Option value="Scissor" onOptionClick={() => handleClick("scissors")}/>
      <p>User: {playerMove[0]}</p>
      <p>Computer: {playerMove[1]}</p>
      <p>Result: {gameState}</p>
    </div>
  );
}


function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}


