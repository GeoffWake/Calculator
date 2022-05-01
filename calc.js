///Click button
///Register in console.log
///show in display


///Clear screen



let currentNumber = "";


const inputNumber = (n) => {
  //if (currentNumber >= 1) return ;
  currentNumber += n;
  document.querySelector('#screen').textContent =currentNumber

}






const buttonsIds = ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];


////record button input
for (let i = 0; i < buttonsIds.length; i++) {
    const fred = document.getElementById(buttonsIds[i]);
    fred.addEventListener('click', () => inputNumber(i))
    
    };



 
// ///Operator Inputs

// for (let i = 0; i < operatorIds.length; i++) {
//     const john = document.getElementById(operatorIds[i]);
//     john.addEventListener('click', () => console.log(i))
    
//     };

// const clearScreen= document.getElementById('btimes');
// clearScreen.addEventListener("click",() => clearNum())



////Clear button

const clearNum =()=> {
  currentNumber = "hi";
  
}



