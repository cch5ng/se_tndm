import React, {useState} from 'react';
import './App.css';
import {getRandomIndexes} from './util';
import Data from './Apprentice_TandemFor400_Data.json';

const IDX_TO_LETTER_OPTION = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  '3': 'd'
}

function App() {
  let totalQuestionsCount = Data.length;

  const [currentQuizQuestionIndexes, setCurrentQuizQuestionIndexes] = useState([]);
  const [currentQuizAnswersIndexes, setcurentQuizAnswersIndexes] = useState([]);
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
      let nextQuestionIdx = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextQuestionIdx);
      getRandomAnswersIndexes(nextQuestionIdx);
    } else {
      //handle done btn click
      //trigger scoring
      setAppState(2);
    }
  }

  //should handle cases
  //1 first time doing training for that session
  //nth time doing training for that session (see which items in state should be reset to initial values)
  const initQuiz = () => {
    //console.log('getRandomIndexes(totalQuestionsCount, 10)', getRandomIndexes(totalQuestionsCount, 10));
    let currentQuizRandomQuestionIndexes = getRandomIndexes(totalQuestionsCount, 10);
    console.log('currentQuizRandomQuestionIndexes', currentQuizRandomQuestionIndexes);
    setCurrentQuizQuestionIndexes(currentQuizRandomQuestionIndexes);
    let questionIdx = currentQuizRandomQuestionIndexes[0];
    let totalAnswersCount = Data[questionIdx].incorrect.length + 1;
    let randomAnswersIndexes = getRandomIndexes(totalAnswersCount, totalAnswersCount);
    setcurentQuizAnswersIndexes(randomAnswersIndexes);
  }

  const getRandomAnswersIndexes = (curQuestionIdx) => {
    let questionIdx = currentQuizQuestionIndexes[curQuestionIdx];
    console.log('questionIdx', questionIdx)
    let totalAnswersCount = Data[questionIdx].incorrect.length + 1;
    let randomAnswersIndexes = getRandomIndexes(totalAnswersCount, totalAnswersCount);
    console.log('randomAnswersIndexes', randomAnswersIndexes)
    setcurentQuizAnswersIndexes(randomAnswersIndexes);
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
            <div>
              <h1>Answers</h1>
              {currentQuizAnswersIndexes.map((answerIdx, idx) => {
                let answer = answerIdx === curQuestion.incorrect.length ? curQuestion.correct : curQuestion.incorrect[answerIdx];
                let idxStr = idx.toString();
                let letter = IDX_TO_LETTER_OPTION[idxStr];
                return (
                  <div key={answer}>
                    {letter}. {answer}
                  </div>
                )
              })}
            </div>
            <div><button onClick={handleNextBtnClick}>{buttonLabel}</button></div>
          </React.Fragment>
        )}

        {appState === 2 && (
          <React.Fragment>
            <div>Training is done</div>
            <button onClick={handleStartQuiz}>Train Again</button>
          </React.Fragment>
        )}
  
      </main>
    </div>
  );
}

export default App;
