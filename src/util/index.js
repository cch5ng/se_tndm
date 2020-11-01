 
const getRandomIndexes = (length, maxSize) => {
  let randomIndexes = [];
  let orderedIndexes = [];

  for (let i = 0; i < length; i++) {
    orderedIndexes.push(i);
  }
  
  while (randomIndexes.length < maxSize) {
    let randomIdx = getRandomInt(orderedIndexes.length);
    let removedNum = orderedIndexes.splice(randomIdx, 1);
    randomIndexes.push(removedNum[0]);
  }
  return randomIndexes;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

export {getRandomIndexes};