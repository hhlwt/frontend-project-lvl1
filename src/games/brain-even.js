import playGame from '../index.js';
import generateRandomNumber from '../utilites.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = generateRandomNumber(1, 101);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  playGame(description, generateRound);
};

export default startGame;
