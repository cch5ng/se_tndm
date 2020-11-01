//import './AnswerList.css';

function AnswerList(props) {
  let {answers, onClickHandler} = props;
  return (
    <div>
      <h1>Answers</h1>
      {answers.map(answer => {
        return (
          <div onClick={(ev) => onClickHandler(ev.target.id)} 
            key={answer.body} id={answer.body} className="answer"
            iscorrect={answer.isCorrect.toString()}>
            {answer.body}
          </div>
        )
      })}
    </div>
  )
}

export default AnswerList;
