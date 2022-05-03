///Click button
///Register in console.log
///show in display


let displayValue ="0";


let result = "";

let currentNumber1= " ";

let operator= "";

const  display= document.querySelector('#screen')
const dv=display.textContent
const dis = []

const click = document.getElementsByClassName('operator')


const buttonsIds = ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];


////record button input
for (let i = 0; i < buttonsIds.length; i++) {
    const fred = document.getElementById(buttonsIds[i]);
    fred.addEventListener('click', () => inputNumber(i))
    const inputNumber = (n) => {
      currentNumber1 += n;
      display.textContent=currentNumber1
      
    }
    
  };


  //if statement if a button was pressed
  if(document.getElementsByClassName('.button--operator').clicked == true) {
    console.log("hi")
  }   else 
    
    
  

////store



function but(currentNumber1){
  storage.push(currentNumber1)
}


//const key= inputNumber
//const keyValue = inputNumber.textContent
console.log( )
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




const inputOperator = (n) => {
  if (operator.length >=  1) return; 

  operator += n; 
  display.textContent = operator////displaying on screen
  
}
 

///Clear button


 const clearScreen= document.getElementById('clear');
 clearScreen.addEventListener("click",() => clear() )


const clear = () => {
  currentNumber1 = "";
  operator      = "";
  display.textContent=displayValue;
}


console.log(dv)
////Equals Button

