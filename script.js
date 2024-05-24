import * as validation from "./validation.js";

function reseting() {
  location.reload();
}

const toBeDisplayedCardNum = document.getElementById("cardNum");
const toBeDisplayedName = document.getElementById("cardName");
const toBeDisplayedMonth = document.getElementById("month");
const toBeDisplayedYear = document.getElementById("year");

const cardNumber = document.getElementById("cardNumber");
const name = document.getElementById("inputName");
const inputMonth = document.getElementById("inputMonth");
const inputYear = document.getElementById("inputYear");
const inputCvc = document.getElementById("inputCvc");
const nameDiv = document.querySelector("#nameDiv");

cardNumber.addEventListener("input", function () {
  toBeDisplayedCardNum.innerText = cardNumber.value;
});
name.addEventListener("input", function () {
  toBeDisplayedName.innerText = name.value;
});
inputMonth.addEventListener("input", function () {
  toBeDisplayedMonth.innerText = inputMonth.value;
});
inputYear.addEventListener("input", function () {
  toBeDisplayedYear.innerText = inputYear.value;
});

const button = document.querySelector("#button");

let histo = false;

function gamma() {
  if (histo === false) {
    beta();
  }
  if (
    inputYear.value !== "" &&
    inputCvc.value !== "" &&
    inputMonth.value !== "" &&
    name.value !== ""
  ) {
    const first = document.querySelector("#firstPage");
    const second = document.querySelector("#secondPage");
    first.classList.add("hidden");
    second.classList.remove("hidden");
  }
}

function beta() {
  histo = true;
  if (cardNumber.value === "") {
    createNode(numDiv, "Shouldn't be blank");
  }
  if (inputCvc.value === "") {
    createNode(cvcDiv, "Shouldn't be blank");
  }
  if (inputYear.value === "" || inputMonth.value === "") {
    createNode(dateDiv, "Shouldn't be blank");
  }
  if (validation.containsOnlyStringOrSpace(name.value) === false) {
    createNode(nameDiv, "Should be a Valid Name");
  }
}
button.addEventListener("click", gamma);

function createNode(div, txt) {
  var para = document.createElement("p");
  var node = document.createTextNode(txt);
  para.style.color = "red";
  para.appendChild(node);
  div.appendChild(para);
}
const buttonFinal = document.querySelector("#buttonFinal");

buttonFinal.addEventListener("click", reseting);
