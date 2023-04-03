
import { useState } from 'react';
import './App.css';

function App() {
  const [player,setPlayer] = useState({
    currentChoice: null
  })
  const computer = {
    currentChoice: null
  }
  
  const choices = ["Lapis", "Papyrus", "Scalpellus"];

  
  //this below didn't work for some reason
  //document.getElementsByClassName("11")[0].onclick=One;
  //document.getElementsByClassname("22")[0].onclick=Two;
  //document.getElementsByClassname("33")[0].onclick=Three;
  
  function computerChooses(){
    const randomIndex = Math.floor(Math.random() * choices.length);
    computer.currentChoice = choices[randomIndex];
  }
 
  function compareChoices(){
    computerChooses();
    if(computer.currentChoice === player.currentChoice){
      displayResult("It's a tie! The computer and player both chose " + computer.currentChoice);
    }else if(computer.currentChoice === choices[0]){
      if(player.currentChoice === choices[1]){
        displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }else{
        displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }
    }else if(computer.currentChoice === choices[1]){
      if(player.currentChoice === choices[2]){
        displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }else{
        displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }
    }else if(computer.currentChoice === choices[2]){
      if(player.currentChoice === choices[0]){
        displayResult("The player wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }else{
        displayResult("The computer wins! The computer chose " + computer.currentChoice + " and the player chose " + player.currentChoice);
      }
    }
  }
  var results=null
  function displayResult(result){ 
    results=result
    return results
  }
  compareChoices();
  
  return (
    <div className="App">
      <h1>Welcome to the ancient game of Lapis, Papyrus, Scalpellus!</h1>
    <button classname="11" onClick={()=>setPlayer({currentChoice:"Lapis"})}>Lapis</button>
    <button classname="22" onClick={()=>setPlayer({currentChoice:"Papyrus"})}>Papyrus</button>
    <button classname="33" onClick={()=>setPlayer({currentChoice:"Scalpellus"})}>Scalpellus</button>
    <h2>The results are in...</h2>
    <p>{results}</p>
    </div>
  );
}

export default App;
