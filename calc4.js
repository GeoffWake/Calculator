////Things to do
///Limit display screen to 5 character
////add decimal point
////On/off button to do something
////Wrap

const buttonsIds = ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];

const  display= document.querySelector('#screen')



///Operator buttons

let storage = []

let storage2 = []

let currentNumber1= " ";

let operator= "";

let displayValue ="0";

const operators = document.querySelectorAll(".operator");
 let previousNumber = ""




for (let i = 0; i < buttonsIds.length; i++) {
    const button = document.getElementById(buttonsIds[i]);
    button.addEventListener('click', () => displayNumber(i))
    };



const displayNumber =(i) => {
    currentNumber1 += i;
    display.textContent=currentNumber1
    //console.log(currentNumber1)
    //console.log(typeof currentNumber1)
    

}



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
  console.log(operator)
}

//Organise an alert for when operator button is pressed and current data is stored in an array

document.querySelectorAll('.operator').forEach(item => {
  item.addEventListener('click', event => {
    storage.push(currentNumber1)
    currentNumber1=""
   
    console.log(storage)
    //console.log(display.textContent)
  })
})

///When Equals button is pressed "second Number" is also stored in an array
const equalButton =document.getElementById("bequal");
    
equalButton.addEventListener('click', event => {
  
  storage2.push(currentNumber1)
 // console.log(storage)
    console.log(storage2) 
    switch(operator){
      case '-':
     // parseInt.storage
     // parseInt.storage2 
     // console.log(storage)
      result=parseInt(storage)-(parseInt(storage2))
      display.textContent = result 
    // console.log((parseInt(storage))-(parseInt(storage2)))
        break;
      case '+':
        result=parseInt(storage)+(parseInt(storage2))
        console.log(result)
        display.textContent = result 
         break; 
         case '+':
          result=parseInt(storage)+(parseInt(storage2))
          console.log(result)
          display.textContent = result 
           break; 
        case '*':
          result=parseInt(storage)*(parseInt(storage2))
          console.log(result)
          display.textContent = result 
            break;
        case '/':
          result=parseInt(storage)/(parseInt(storage2))
          console.log(result)
          display.textContent = result 
            break;  
    }
})


///Switch statement for when equals button is pressed. Turn array into numbers, perform calculation and then result and you a FUCKING DONE


///Clear Button
//console.log(storage)

const clearScreen= document.getElementById('clear');
clearScreen.addEventListener("click",() => clear() )


const clear = () => {
 currentNumber1 = "";
 operator      = "";
 display.textContent=displayValue;;
 storage = [];
 storage2= [];
}
///Next step
///When equals button is pressed store 2nd number in array
////then converry to number
////if statement regarding operator function

///clear button should clear both arrays as well

///Need to do max amount of digits

///Calculation--YEAH BUDDYY!!!!!
