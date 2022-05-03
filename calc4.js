const buttonsIds = ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];

const  display= document.querySelector('#screen')

let storage= []

let currentNumber1= " ";

let operator= "";

let displayValue ="0";

const operators = document.querySelectorAll(".button--operator");

for (let i = 0; i < buttonsIds.length; i++) {
    const button = document.getElementById(buttonsIds[i]);
    button.addEventListener('click', () => displayNumber(i))
    };



const displayNumber =(i) => {
    currentNumber1 += i;
    display.textContent=currentNumber1
    console.log(currentNumber1)
    console.log(typeof currentNumber1)
    

}



console.log(typeof currentNumber1)
let buttons =document.querySelectorAll('button')
////Operators

const multiply =document.getElementById("btimes");
    
multiply.addEventListener('click', () => inputOperator("*"));

////Divide
const divide =document.getElementById("bdiv");
    
divide.addEventListener('click', () => inputOperator("/"));

///Minus

const minus =document.getElementById("bmin");
    
minus.addEventListener('click', () => inputOperator("-"));


////Plus
const plus =document.getElementById("bplus");
    
plus.addEventListener('click', () => inputOperator("+"));


////Displaying on screen

const inputOperator = (n) => {
  if (operator.length >=  1) return; 

  operator += n; 
  display.textContent = operator 
}



///Clear button


const clearScreen= document.getElementById('clear');
clearScreen.addEventListener("click",() => clear() )


const clear = () => {
 currentNumber1 = "";
 operator      = "";
 display.textContent=displayValue;
}



