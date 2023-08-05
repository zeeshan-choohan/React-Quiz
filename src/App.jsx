import React,{useState} from 'react';
import './index.css';
import questions from './QuizData';
import QuizResult from './Quizresult';
function App() {
  let [currentQuestion , setCurrentquestion] = useState(0);
  let [score , setscore] = useState(0);
  let [correctAnswer , setCorrectAnswer] = useState(0);
  let [showResult , setShowresult] = useState(false);
  let [btnClicked , setbtnClicked] = useState(false);
  const handleNextOption = () =>{
    const nextQuestion = currentQuestion+1;
    if(nextQuestion < questions.length){
      setCurrentquestion(nextQuestion)
    }
    else{
      setShowresult(true) 
    }
  }
  let handleAnswerOption = (isCorrect) =>{
if(isCorrect){
  setscore(score+1)
  setCorrectAnswer(correctAnswer+1)
}
setbtnClicked(true)
};
const handleplayAgain =()=> {
  setCurrentquestion(0)
  setscore(0)
  setCorrectAnswer(0)
  setShowresult(false)
}

  return (
    <>
    
    <div className='app'>
      {showResult ? (<QuizResult score ={score} correctAnswer = {correctAnswer} handleplayAgain = {handleplayAgain}/>)
      :(
      <><div className='question-section'>
        <h5>Score : {score}</h5>
        <div className='question-count'>
          <span>Question {currentQuestion +1} of {questions.length}</span>
        </div>
        <div className='question-text'>
          {questions[currentQuestion].questionText}
        </div>
         </div>
      <div className='answer-section'>
        {questions[currentQuestion].answerOptions.map((ans,i)=>{
return <button 
disabled = {btnClicked} key={i} onClick={()=> handleAnswerOption(ans.isCorrect)}>{ans.answerText}</button>
        })}
       
        <div className='actions'>
        <button onClick = {handleplayAgain}>Quit</button>
        <button disabled = {!btnClicked} onClick={handleNextOption}>Next</button>
      </div>
      </div>
      </>)}
    
      
     
    </div>
    
    </>
  );
}

export default App;
