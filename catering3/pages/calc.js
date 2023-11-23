var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultyply = document.getElementById("buttonMultyply");
var buttonDevide = document.getElementById("buttonDevide");

var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");

function getNumber1() {
    return Number(input1.value);
    
}
function getNumber2() {
    return Number(input2.value);
    
}

function makeOperation(operationCode){
    if (operationCode === "+") {
        var result = getNumber1() + getNumber2();
    } else if (operationCode === "-") {
        var result = getNumber1() - getNumber2();
    } else if (operationCode === "*") {
        var result = getNumber1() * getNumber2();
    } else if (operationCode === "/") {
        var result = getNumber1() / getNumber2();
    } else {
        window.prompt("Неизвестная операция");
    }
    
    window.prompt(result);

}


function onButtonPlusClick(){
  makeOperation("+");
 
}

function onButtonMinusClick(){
    makeOperation("-");
}
function onButtonMultyplyClick(){
    makeOperation("*");
}
function onButtonDevideClick(){
    makeOperation("/");
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultyply.addEventListener('click', onButtonMultyplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);