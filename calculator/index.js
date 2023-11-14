// document.getElementById("count-el").innerText = 5;

let firstNum = 0;
let secondNum = 0;
let operation = "";
let allCaculation = '';

let inputText = document.getElementById("input-el");

let resultEl = document.getElementById("result-el");
let historyEl = document.getElementById("history-el");
function add() {
  firstNum = parseInt(inputText.value);
  inputText.value ="" ;
  operation = "+";
  allCaculation += firstNum + operation;
  historyEl.innerText = allCaculation;
}
function subtract() {
  const result = parseInt(inputText.value) ;
  inputText.value = "";
  operation = "-";
  allCaculation += firstNum + operation;
  historyEl.innerText = allCaculation;

}
function multiply() {
  const result = parseInt(inputText.value) ;
  inputText.value = "";
  operation = "*";
  allCaculation += firstNum + operation;
  historyEl.innerText = allCaculation;

}
function divide() {
  const result = parseInt(inputText.value) ;
  inputText.value = "";
  operation = "/";
  allCaculation += firstNum + operation;
  historyEl.innerText = allCaculation;

}
function equal() {
    let result;
  secondNum = parseInt(inputText.value);
  switch (operation) {
    case "+":
    result = firstNum + secondNum;
      resultEl.innerHTML = result;
      break;
    case "-":
        result = firstNum - secondNum;
      
    resultEl.innerHTML = result;
      break;
    case "*":
        result = firstNum * secondNum;
      
    resultEl.innerHTML = result;
      break;
    case "/":
    result = firstNum /secondNum;
        
      resultEl.innerHTML = result;
      break;
  }
  historyEl.innerText = allCaculation + result;

  firstNum = result;
}
