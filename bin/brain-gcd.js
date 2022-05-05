#!/usr/bin/env node

import { car, cdr } from "@hexlet/pairs";
import {
  generatePair,
  wrongAnswer,
  congratsWinner,
  userAnswer,
  theEuclideanAlgorithm,
} from "../src/index.js";
import startGame from "../src/start-game.js";

const name = startGame();
console.log("Find the greatest common divisor of given numbers.");

let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
  const pair = generatePair();
  const correctAnswer = theEuclideanAlgorithm(car(pair), cdr(pair));

  const question = `${String(car(pair))} ${String(cdr(pair))}`;
  const answer = userAnswer(question);

  if (Number(answer) === correctAnswer) {
    console.log("Correct!");
    correctAnswersCount += 1;
  } else {
    wrongAnswer(answer, correctAnswer, name);
    break;
  }
  congratsWinner(correctAnswersCount, name);
}