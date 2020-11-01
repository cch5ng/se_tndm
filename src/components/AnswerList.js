import classNames from 'classnames/bind';
import styles from './AnswerList.module.css';

const cx = classNames.bind(styles);

function AnswerList(props) {
  let {answers, onClickHandler, currentQuestionWasAnswered} = props;
  
  return (
    <div>
      <h1>Answers</h1>
      {answers.map(answer => {
        let answerClassName = cx({
          answer: true,
          correct: currentQuestionWasAnswered && answer.isCorrect,
          incorrect: currentQuestionWasAnswered && !answer.isCorrect && answer.userSelected
        });

        return (
          <div onClick={(ev) => onClickHandler(ev.target.id)} 
            key={answer.body} id={answer.body} className={answerClassName}
            iscorrect={answer.isCorrect.toString()}>
            {answer.body}
          </div>
        )
      })}
    </div>
  )
}

export default AnswerList;
