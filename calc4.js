///Starting Values

let storage = [];

let storage2 = [];

let dec= '';

let currentNumber1= " ";

let operator= "";

let displayValue ="0";

//Button Array
const buttonsIds = ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];

///Variables/Selectors

///Screen
const  display= document.querySelector('#screen')

///Decimal
const decimal =document.getElementById("bdec");
 
///Multiply 
const multiply =document.getElementById("btimes");

////Divide
const divide =document.getElementById("bdiv");

///Minus
const minus =document.getElementById("bmin");

///Plus
const plus =document.getElementById("bplus");

///Equal 
const equalButton =document.getElementById("bequal");

///On/Clear
const onclear =document.getElementById('on');

///Clear Screen
const clearScreen= document.getElementById('clear');

///Add decimal point to display and currentNumber1

decimal.addEventListener('click', () => inputDecimal("."));

const inputDecimal = (i) => {
   
  currentNumber1 += i;
  
}

///Loop for button selector

for (let i = 0; i < buttonsIds.length; i++) {
    const button = document.getElementById(buttonsIds[i]);
    button.addEventListener('click', () => displayNumber(i))
    };

///Display Number on Screen

const displayNumber =(i) => {
    currentNumber1 += i;
    display.innerHTML=currentNumber1
    console.log(currentNumber1)
}

////Event Listeners for buttons

///Multiply

multiply.addEventListener('click', () => inputOperator("*"));

///Divide
divide.addEventListener('click', () => inputOperator("/"));

///Minus
minus.addEventListener('click', () => inputOperator("-"));

///Plus
plus.addEventListener('click', () => inputOperator("+"));


////Display and add Operator

const inputOperator = (n) => {
  if (operator.length >=  1) return; 

  operator += n; 
  display.textContent = operator 
  console.log(operator)
}

//When operator button is pressed the first number is stored in an array called "storage"

document.querySelectorAll('.operator').forEach(item => {
  item.addEventListener('click', event => {
    storage.push(currentNumber1)
    currentNumber1="" 
    console.log(storage)
  })
})

///When Equals button is pressed "second Number" is also stored in second array called "storage2".

///Switch statement is then done and the appropriate calculation is completed
    
equalButton.addEventListener('click', event => {
  ///Store "second number" in an array
  storage2.push(currentNumber1)
    console.log(storage2)

    switch(operator){
      case '-':
      result=storage-storage2
      display.textContent = result 
        break;
      case '+':
        ///Parsefloat addition to prevent concatenation.
        result=parseFloat(storage)+parseFloat(storage2)
        console.log(result)
        display.textContent = result 
         break; 
        case '*':
          result=storage*storage2
          console.log(result)
          display.textContent = result 
            break;
        case '/':
          result=storage/storage2
          console.log(result)
          display.textContent = result 
            break;  
    }
    
})




///Clear action

clearScreen.addEventListener("click",() => clear() )

const clear = () => {
 currentNumber1 = "";
 operator      = "";
 display.textContent=displayValue;
 storage = [];
 storage2= [];
 dec= ""
}

///On button/clear

onclear.addEventListener("click",() => clear() )
