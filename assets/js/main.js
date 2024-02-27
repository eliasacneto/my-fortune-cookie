import { luckyPhrase } from "./phrases.js";

const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnOpenMessage = document.querySelector("#btnOpenMessage");
const btnReset = document.querySelector("#btnReset");

const messageOpened = document.querySelector("#messageOpened");

let phrase = Math.floor(Math.random() * luckyPhrase.length);

function showLuckyPhrase() {
  let indexPhrase = Math.floor(Math.random() * luckyPhrase.length);
  return luckyPhrase[indexPhrase];
}

function showPhrase() {
  const randomPhrase = showLuckyPhrase();
  messageOpened.innerText = randomPhrase;
}

function handleLuckyMessage() {
  toggleScreen();
  showPhrase();
}

function handleResetMessage() {
  toggleScreen();
  phrase = Math.floor(Math.random() * luckyPhrase.length);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

btnOpenMessage.addEventListener("click", handleLuckyMessage);
btnReset.addEventListener("click", handleResetMessage);
