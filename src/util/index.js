 
const getRandomIndexes = (length, maxSize) => {
  let randomIndexes = [];
  
  while (randomIndexes.length < maxSize) {
    let randomNum = getRandomInt(length);
    if (randomIndexes.indexOf(randomNum) === -1) {
      randomIndexes.push(randomNum);
    }
  }
  return randomIndexes;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

export {getRandomIndexes};