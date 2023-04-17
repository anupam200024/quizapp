import "./App.css";
import React, { useState } from 'react'
import Menu from './components/Menu'
import EndScreen from "./components/EndScreen";
import Quiz from "./components/Quiz";
import { QuizContext } from './helpers/Contexts'

function App() {
  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0);


  return (
    <div className="App">
      <h1>Quiz App</h1>

      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === 'menu' && <Menu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
