import greetings from "../cli.js";
import {
  wrongAnswer,
  congratsWinner,
  userAnswer,
  isPrime,
  random,
} from "../index.js";

const name = greetings();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const brainprime = () => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number = random(1, 101);
    const correctAnswer = isPrime(number);

    const question = `${number}`;
    const answer = userAnswer(question);

    if (answer === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount += 1;
    } else {
      wrongAnswer(answer, correctAnswer, name);
      break;
    }
  }
  congratsWinner(correctAnswersCount, name);
};

export default brainprime;