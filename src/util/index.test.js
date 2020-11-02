import {getRandomIndexes, scoreQuiz} from './index';

//test for case getting random question indexes max length questions 21; max length indexes 10
test('simulating getting random question indexes for new game', () => {
  const randomQuestionIndexes = getRandomIndexes(21, 10);

  expect(randomQuestionIndexes.length).toBe(10);
  expect(arrayElementsAreUnique(randomQuestionIndexes)).toBe(true);
});

//test for case getting random answer indexes max length answers is 3-4; max length indexes is 3-4
test('simulating getting random answer indexes for new question', () => {
  const randomQuestionIndexes = getRandomIndexes(4, 4);

  expect(randomQuestionIndexes.length).toBe(4);
  expect(arrayElementsAreUnique(randomQuestionIndexes)).toBe(true);
});

//test for case getting random answer indexes max length answers is 3-4; max length indexes is 3-4
test('simulating getting random answer indexes for new question; limit to 3', () => {
  const randomQuestionIndexes = getRandomIndexes(3, 3);

  expect(randomQuestionIndexes.length).toBe(3);
  expect(arrayElementsAreUnique(randomQuestionIndexes)).toBe(true);
});

//test score function, all correct
test('scoreQuiz with perfect score', () => {
  const answersObj = {
    0: {isCorrect: true},
    1: {isCorrect: true},
    2: {isCorrect: true},
    3: {isCorrect: true},
    4: {isCorrect: true},
    5: {isCorrect: true},
    6: {isCorrect: true},
    7: {isCorrect: true},
    8: {isCorrect: true},
    9: {isCorrect: true}
  }
  const curScore = scoreQuiz(answersObj);
  expect(curScore).toBe(10);
});

//test score function, all wrong
test('scoreQuiz with zero score', () => {
  const answersObj = {
    0: {isCorrect: false},
    1: {isCorrect: false},
    2: {isCorrect: false},
    3: {isCorrect: false},
    4: {isCorrect: false},
    5: {isCorrect: false},
    6: {isCorrect: false},
    7: {isCorrect: false},
    8: {isCorrect: false},
    9: {isCorrect: false}
  }

  const curScore = scoreQuiz(answersObj);
  expect(curScore).toBe(0);
});

//test score function, mixed
test('scoreQuiz with mixed score', () => {
  const answersObj = {
    0: {isCorrect: false},
    1: {isCorrect: false},
    2: {isCorrect: true},
    3: {isCorrect: false},
    4: {isCorrect: false},
    5: {isCorrect: true},
    6: {isCorrect: false},
    7: {isCorrect: true},
    8: {isCorrect: false},
    9: {isCorrect: true}
  }

  const curScore = scoreQuiz(answersObj);
  expect(curScore).toBe(4);
});


//helper
function arrayElementsAreUnique(ar) {
  let elementsCount = {};

  for (let i = 0; i < ar.length; i++) {
    let key = ar[i].toString();
    if (elementsCount[key]) {
      return false;
    } else {
      elementsCount[key] = 1;
    }
  }
  return true;
}