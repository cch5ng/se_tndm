import {getRandomIndexes} from './index';

//test for case getting random question indexes max length questions 21; max length indexes 10
test('simulating getting random question indexes for new game', () => {
  const randomQuestionIndexes = getRandomIndexes(21, 10);

  expect(randomQuestionIndexes.length).toBe(10);
  expect(arrayElementsAreUnique(randomQuestionIndexes)).toBe(true);
});

//test for case getting random answer indexes max length answers is 3-4; max length indexes is 3-4
test('simulating getting random question indexes for new game', () => {
  const randomQuestionIndexes = getRandomIndexes(4, 4);

  expect(randomQuestionIndexes.length).toBe(4);
  expect(arrayElementsAreUnique(randomQuestionIndexes)).toBe(true);
});

//test for case getting random answer indexes max length answers is 3-4; max length indexes is 3-4
test('simulating getting random question indexes for new game', () => {
  const randomQuestionIndexes = getRandomIndexes(3, 3);

  expect(randomQuestionIndexes.length).toBe(3);
  expect(arrayElementsAreUnique(randomQuestionIndexes)).toBe(true);
});


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