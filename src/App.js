import logo from './logo.svg';
import './App.css';
import {getRandomIndexes} from './util';
import Data from './Apprentice_TandemFor400_Data.json';

function App() {
  let totalQuestionsCount = Data.length;

  //tests
  console.log('getRandomIndexes(10, 10)', getRandomIndexes(10, 10));

  console.log('getRandomIndexes(totalQuestionsCount, 10)', getRandomIndexes(totalQuestionsCount, 10));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
