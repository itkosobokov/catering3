var buttunPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultyply = document.getElementById("buttonMultyply");
var buttonDevide = document.getElementById("buttonDevide");

function onButtonPlusClick(){
    console.log("onButtonPlusClick");
}
function onButtonMinusClick(){
    console.log("onButtonMinusClick");
}
function onButtonMultyplyClick(){
    console.log("onButtonMultyplyClick");
}
function onButtonDevideClick(){
    console.log("onButtonDevideClick");
}

buttunPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultyply.addEventListener('click', onButtonMultyplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);