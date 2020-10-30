import React, {useState} from 'react';
import './App.css';
import {getRandomIndexes} from './util';
import Data from './Apprentice_TandemFor400_Data.json';

function App() {
  let totalQuestionsCount = Data.length;

  const [currentQuizQuestionIndexes, setCurrentQuizQuestionIndexes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuizAnswers, setCurrentQuizAnswers] = useState({}); // key should be question name
  const [currentQuizScore, setCurrentQuizScore] = useState(null);
  const [appState, setAppState] = useState(0); //0 - not started; 1 - quiz in session; 2 - quiz was completed

  const handleStartQuiz = () => {
    initQuiz();
    setAppState(1);
  }

  const handleAnswerSubmit = () => {
    //store the answer
    //evaluate if answer is correct
    //increment curQuestionIndex
  }  

  const handleNextBtnClick = () => {
    if (currentQuestionIndex < 9) {
      //handle next button
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      //handle done btn click
      //trigger scoring
      setAppState(2);
    }
  }

  const initQuiz = () => {
    console.log('TODO INIT QUIZ')
    //console.log('getRandomIndexes(totalQuestionsCount, 10)', getRandomIndexes(totalQuestionsCount, 10));
    let currentQuizRandomQuestionIndexes = getRandomIndexes(totalQuestionsCount, 10);
    console.log('currentQuizRandomQuestionIndexes', currentQuizRandomQuestionIndexes);
    setCurrentQuizQuestionIndexes(currentQuizRandomQuestionIndexes);
  }

  const scoreQuiz = () => {
    
  }

  //tests
  //console.log('getRandomIndexes(10, 10)', getRandomIndexes(10, 10));
  let curDataIndex = currentQuizQuestionIndexes[currentQuestionIndex];
  let curQuestion = Data[curDataIndex];
  let buttonLabel = currentQuestionIndex < 9 ? 'Next': 'Done';


  return (
    <div className="App">
      <header className="App-header">
        TRIVIA BOOTCAMP
      </header>
      <main>
        {/* different states
          1 quiz has not started yet
          2 quiz is in session
          3 quiz has ended
        */}
        {appState === 0 && (
          <button onClick={handleStartQuiz}>Start Training</button>
        )}

        {appState === 1 && (
          <React.Fragment>
            <div>Training in session</div>
            <div>
              <h1>Question</h1>
              <div>{curQuestion.question}</div>
            </div>
            <div><button onClick={handleNextBtnClick}>{buttonLabel}</button></div>
          </React.Fragment>
        )}

        {appState === 2 && (
          <div>Training is done</div>
        )}
  
      </main>
    </div>
  );
}

export default App;
