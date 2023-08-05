import React from "react";
import questions from "./QuizData";
const Quizresult = (props) =>{
    return(
        <div className="score-section">
<h2>Completed!</h2>
<h4>Total Score {props.score} out of {questions.length}</h4>
<h4>Your Correct Questions {props.correctAnswer} out of {questions.length}</h4>
<button onClick = {props.handleplayAgain}>Play Again ?</button>
        </div>
    )
}
export default Quizresult;