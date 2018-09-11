var display = document.getElementById("disp");
var btnClear = document.getElementById("btn-clear");
var btnDiv = document.getElementById("btn-divide");
var btnMultiply = document.getElementById("btn-multiply");
var btnPlus = document.getElementById("btn-l");
var btnMinus = document.getElementById("btn-minus");
var btnBackspace = document.getElementById("btn-backspace");
var btnDot = document.getElementById("btn-dot");

var btnOne = document.getElementById("btn-one");
var btnTwo = document.getElementById("btn-two");
var btnThree = document.getElementById("btn-three");
var btnFour = document.getElementById("btn-four");
var btnFive = document.getElementById("btn-five");
var btnSix = document.getElementById("btn-six");
var btnSeven = document.getElementById("btn-seven");
var btnEight = document.getElementById("btn-eight");
var btnNine = document.getElementById("btn-nine");

var displayVal = '0';
var pendingVal = "0";


var numBtns = document.getElementsByClassName("btn-num");
var operBtns = document.getElementsByClassName("btn-oper");

var updateVal = (clickObj) => {
  var btnText = clickObj.target.innerText;
  if (displayVal ==='0')
    displayVal = '';
  displayVal += btnText;
  display.innerText = displayVal;
}
for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener("click", updateVal, false);
}
/*btnClear.addEventListener("click", function() {
  display.innerText = "0";
});*/
btnClear.onclick = () =>{
  displayVal = "0";
  display.innerText = displayVal;
}
btnDot.onclick = () =>{
  if (!display.innerText.includes(","))
    displayVal += ",";
    display.innerText = displayVal;
}
btnBackspace.onclick = () =>{
  if (displayVal != 0)
    displayVal= displayVal.slice(0,displayVal.length-1);
  if (!(displayVal === "")){
    display.innerText = displayVal;
  }else {
    displayVal = "0";
    display.innerText = displayVal;
  }
}
