import React from "react";
import './App.css';
import { useTranslation } from 'react-i18next'
import { questions } from "./questions.js";
import { useState ,useEffect } from "react";


function App() {


  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const [a , seta] = useState("UnAnswered");
  const [b , setb] = useState("UnAnswered");
  const [c , setc] = useState("UnAnswered");
  const [d , setd] = useState("UnAnswered");


  const [button, setbutton] = useState(false);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if(currentQuestion===0)
    {
       document.getElementById("b1").style.display = 'none';

    }
    else if(currentQuestion>0 && currentQuestion<questions.length-1){
      document.getElementById("b1").style.display = 'block';
    }

})

  const handleClick = (item) => {
    if (item.isCorrect) {
      setScore(score + 1);
      
    }

    if(currentQuestion === 0)
    {
      seta(item.answerText);
    }
    if(currentQuestion === 1)
    {
      setb(item.answerText);
    }
    if(currentQuestion === 2)
    {
      setc(item.answerText);
    }
    if(currentQuestion === 3)
    {
      setd(item.answerText);
    }
  };

  



  const next = () => {
    console.log(currentQuestion)


    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else if (nextQuestion === questions.length) {
      setShowScore(true);
    }
  };
  const prev = () => {
    console.log("prev pressed")
    
    
    const nextQuestion = currentQuestion - 1;
    if (nextQuestion < questions.length && nextQuestion >= 0) {
      setCurrentQuestion(nextQuestion);
    }

  };

  const start = () => {
    console.log("start pressed")
    


    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
    console.log(currentQuestion);
    
      
    

  };

  if (currentQuestion === -1) {
    return (
      <>
        
        <h1 id="play">PLAY-QUIZ</h1>
        <button id="start" onClick={start}>
       
         <b>START</b>
        </button>


      </>
    )
  }
  
  

  else if (showScore===true) {
    return (<>
      <section className="showScore-section" id="score">
        Your score is {score} out of {questions.length}
      </section>

      <section className="showScore-section answer-sheet-1">
        <h1>
            Question 1 
        </h1>
        <p>{questions[0].questionText}</p>
        <p>Submit Answer : {a}</p>
        <p>correct Answer  is : {questions[0].correctAnswer}</p>
      </section>

      <section className="showScore-section answer-sheet-2">
        <h1>
            Question 2
        </h1>
        <p>{questions[1].questionText}</p>
        <p>Submit Answer : {b}</p>
        <p>correct Answer : {questions[1].correctAnswer}</p>
      </section>

      <section className="showScore-section answer-sheet-3">
        <h1>
            Question 3 
        </h1>
        <p>{questions[2].questionText}</p>
        <p>Submit Answer : {c}</p>
        <p>correct Answer : {questions[2].correctAnswer}</p>
      </section>

      <section className="showScore-section answer-sheet-4">
        <h1>
            Question 4 
        </h1>
        <p>{questions[3].questionText}</p>
        <p>Submit Answer : {d}</p>
        <p>correct Answer : {questions[3].correctAnswer}</p>
      </section>

    </>)
  }
  else {
    
    
    return (
      <>

        <>
          <section className="question-section">
            <h1>
              Question {currentQuestion + 1}/{questions.length}
            </h1>
            <p>{questions[currentQuestion].questionText}</p>
          </section>

          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <button onClick={() => handleClick(item)}>
                {item.answerText}
              </button>
            ))}
          </section>

          <section className="button-section">



            <button id="b1" onClick={prev}>
              Previous
            </button>

            <button id="b2"  onClick={next}>
              Next
            </button>
          </section>

        </>

      </>
    )
  }
  
}

export default App;
