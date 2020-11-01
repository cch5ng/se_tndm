import React, {useState} from 'react';
import './App.css';
import {getRandomIndexes} from './util';
import Data from './Apprentice_TandemFor400_Data.json';
import AnswerList from './components/AnswerList';

const IDX_TO_LETTER_OPTION = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  '3': 'd'
}

function App() {
  let totalQuestionsCount = Data.length;

  const [currentQuizQuestionIndexes, setCurrentQuizQuestionIndexes] = useState([]);
  const [currentQuizRandomAnswersIndexes, setCurrentQuizRandomAnswersIndexes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestionWasAnswered, setCurrentQuestionWasAnswered] = useState(false);
  const [currentQuizAnswers, setCurrentQuizAnswers] = useState({}); // key should be question name
  const [currentQuizScore, setCurrentQuizScore] = useState(null);
  const [appState, setAppState] = useState(0); //0 - not started; 1 - quiz in session; 2 - quiz was completed

  const handleStartQuiz = () => {
    initQuiz();
    setAppState(1);
  }

  const handleAnswerSubmit = (id) => {
    //store the answer
    //evaluate if answer is correct
    //increment curQuestionIndex
    if (!currentQuestionWasAnswered) {
      //let {id} = ev.target; //answer string
      let questionIdxInData = currentQuizQuestionIndexes[currentQuestionIndex];
      let keyStr = questionIdxInData.toString();
      let isCorrect;
      //let dataIdxNum = parseInt(id, 10);
      //if (id === Data[questionIdxInData].correct) {
        //accum += 1;
      //}

      setCurrentQuizAnswers(
        {...currentQuizAnswers, 
          [keyStr]: {
            answer: id,
            isCorrect: id === Data[questionIdxInData].correct
          }
        });
      setCurrentQuestionWasAnswered(true);  
    }
  }  

  const handleNextBtnClick = () => {
    if (currentQuestionIndex < 9) {
      //handle next button
      let nextQuestionIdx = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextQuestionIdx);
      getRandomAnswersIndexes(nextQuestionIdx);
      setCurrentQuestionWasAnswered(false);
    } else {
      //handle done btn click
      //trigger scoring
      console.log('currentQuizAnswers', currentQuizAnswers);
      scoreQuiz();
      setAppState(2);
    }
  }

  //should handle cases
  //1 first time doing training for that session
  //nth time doing training for that session (see which items in state should be reset to initial values)
  const initQuiz = () => {
    setCurrentQuestionIndex(0);
    let currentQuizRandomQuestionIndexes = getRandomIndexes(totalQuestionsCount, 10);
    console.log('currentQuizRandomQuestionIndexes', currentQuizRandomQuestionIndexes);
    setCurrentQuizQuestionIndexes(currentQuizRandomQuestionIndexes);
    let questionIdx = currentQuizRandomQuestionIndexes[0];
    let totalAnswersCount = Data[questionIdx].incorrect.length + 1;
    let randomAnswersIndexes = getRandomIndexes(totalAnswersCount, totalAnswersCount);
    setCurrentQuizRandomAnswersIndexes(randomAnswersIndexes);
    setCurrentQuizAnswers({});
    setCurrentQuizScore(null);
    setCurrentQuestionWasAnswered(false);
  }

  const getRandomAnswersIndexes = (curQuestionIdx) => {
    let questionIdx = currentQuizQuestionIndexes[curQuestionIdx];
    let totalAnswersCount = Data[questionIdx].incorrect.length + 1;
    let randomAnswersIndexes = getRandomIndexes(totalAnswersCount, totalAnswersCount);
    setCurrentQuizRandomAnswersIndexes(randomAnswersIndexes);
  }

  const scoreQuiz = () => {
    let currentQuizQuestionIndexesInDataStr = Object.keys(currentQuizAnswers);
    let curScore = currentQuizQuestionIndexesInDataStr.reduce((accum, cur) => {
      let dataIdxNum = parseInt(cur, 10);
      if (currentQuizAnswers[cur].isCorrect) {
        accum += 1;
      }
      return accum;
    }, 0)
    console.log('curScore', curScore);
    setCurrentQuizScore(curScore);
  }

  const getCurrentAnswersRandom = () => {
    //get current question
    let curQuestion = Data[curDataIndex];
    //use logic to randomize the answers
    let answers = [];
    currentQuizRandomAnswersIndexes.forEach(answerIdx => {
      let answer = {};
      let body;
      let isCorrect;
      let userSelected;
      if (answerIdx === curQuestion.incorrect.length) {
        body = curQuestion.correct;
        isCorrect = true;
      } else {
        body = curQuestion.incorrect[answerIdx];
        isCorrect = false;
      }
      let curDataIdxStr = curDataIndex.toString();
      if (currentQuizAnswers[curDataIdxStr] && currentQuizAnswers[curDataIdxStr].answer === body) {
        userSelected = true;
      } else {
        userSelected = false;
      }
      answer.body = body;
      answer.isCorrect = isCorrect;
      answer.userSelected = userSelected;
      answers.push(answer);
    })
    return answers;
  }

  //tests
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


            <AnswerList answers={getCurrentAnswersRandom()} 
              onClickHandler={handleAnswerSubmit} 
              currentQuestionWasAnswered={currentQuestionWasAnswered}/>

            {currentQuestionWasAnswered === true && (
              <div><button onClick={handleNextBtnClick}>{buttonLabel}</button></div>
            )}
          </React.Fragment>
        )}

        {appState === 2 && (
          <React.Fragment>
            <div>Training is done</div>
            <div>Your score is {currentQuizScore}.</div>
            {currentQuestionWasAnswered === true && (
              <button onClick={handleStartQuiz}>Train Again</button>          
            )}
          </React.Fragment>
        )}
  
      </main>
    </div>
  );
}

export default App;
