import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
import { Questions } from '../helpers/Questions'
import "../App.css";

export default function EndScreen() {
    const { score, setScore, setGameState } = useContext(QuizContext);
    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    }

    return (
        <div className='EndScreen'>
            <h1>Quiz Finished</h1>
            <h3>{score} / {Questions.length}</h3>
            <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}
