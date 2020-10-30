import {useState} from 'react';
import './App.css';
import {getRandomIndexes} from './util';
import Data from './Apprentice_TandemFor400_Data.json';

function App() {
  let totalQuestionsCount = Data.length;

  const [currentQuizQuestionIndexes, setCurrentQuizQuestionIndexes] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuizAnswers, setCurrentQuizAnswers] = useState({}); // key should be question name
  const [currentQuizScore, setCurrentQuizScore] = useState(null);

  const handleStartQuiz = () => {
    
  }

  const handleAnswerSubmit = () => {

  }  

  const handleNextBtnClick = () => {

  }

  const initQuiz = () => {

  }

  //tests
  console.log('getRandomIndexes(10, 10)', getRandomIndexes(10, 10));
  console.log('getRandomIndexes(totalQuestionsCount, 10)', getRandomIndexes(totalQuestionsCount, 10));

  return (
    <div className="App">
      <header className="App-header">
        TRIVIA BOOTCAMP
      </header>
      <main>

      </main>
    </div>
  );
}

export default App;
