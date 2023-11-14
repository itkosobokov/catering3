var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultyply = document.getElementById("buttonMultyply");
var buttonDevide = document.getElementById("buttonDevide");

function onButtonPlusClick(){
    console.log("onButtonPlusClick");
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var result = number1 + number2;

    window.alert(result);
}
function onButtonMinusClick(){
    console.log("onButtonMinusClick");
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var result = number1 - number2;

    window.alert(result);
}
function onButtonMultyplyClick(){
    console.log("onButtonMultyplyClick");
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var result = number1 * number2;

    window.alert(result);
}
function onButtonDevideClick(){
    console.log("onButtonDevideClick");
    var input1 = document.getElementById("number1");
    var input2 = document.getElementById("number2");

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var result = number1 / number2;

    window.alert(result);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultyply.addEventListener('click', onButtonMultyplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);