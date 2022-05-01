///Button 7

const button7 =document.getElementById("b7"); {
    b7.innerText;
}

///Button 8

const button8 =document.getElementById("b8"); {
    button8.innerText;
}


const numberInput7 = () => {
    document.getElementById("b7").innerText = 7;
}


button7.addEventListener("click", numberInput7);

// ///Click button 7
//     document.getElementById("b7");
//    b7.onclick = () => {
//       console.log("7")
//    };
   

    
// ///click button 8

//     document.getElementById("b8");
//     b8.onclick = () => {
//        console.log("8")

//     }

// ////Click 9
//     document.getElementById("b9");
//     b9.onclick = () => {
//        console.log("9")

//     }

// ///Click divide

// document.getElementById("");
// bdiv.onclick = () => {
//    console.log("/")

// }

// ///Click 4 

// document.getElementById("b4");
//     b4.onclick = () => {
//        console.log("4")
//     }


// ///Click 5 

// document.getElementById("b5");
// b5.onclick = () => {
//    console.log("5")
// }

// ///Click 6

// document.getElementById("b6");
// b6.onclick = () => {
//        console.log("6")
//     }


// ///Click X

// document.getElementById("btimes");
// btimes.onclick = () => {
//        console.log("X")
//     }

// ///Click 1

// document.getElementById("b1");
// b1.onclick = () => {
//        console.log("1")
//     }

// ///Click 2

// document.getElementById("b2");
// b2.onclick = () => {
//        console.log("2")
//     }

// ///Click 3

// document.getElementById("b3");
// b3.onclick = () => {
//        console.log("3")
//     }

// ///Click -

// document.getElementById("bmin");
// bmin.onclick = () => {
//        console.log("-")
//     }

// ///Click 0

// document.getElementById("b0");
// b0.onclick = () => {
//        console.log("0")
//     }

// ///Click .

// document.getElementById("bdec");
// bdec.onclick = () => {
//        console.log(".")
//     }

// ///Click .

// document.getElementById("bdec");
// bdec.onclick = () => {
//        console.log(".")
//     }

// ///Click =

// document.getElementById("bequal");
// bequal.onclick = () => {
//        console.log("=")
//     }

// ///Click +

// document.getElementById("bplus");
// bplus.onclick = () => {
//        console.log("+")
//     };



//     ////Display Value 0

//     const displayZero = "0";

//     ///Pending value

//     //const previousVal; 

//     const numberArray = [],


//     ///Update Display

//     updateDisplayVal = (e) => {
//       const btnText = e.target.innerText;
//       if(displayVal === "0'); {
      
//          (displayVal = ""; 
//       }
   

//       // Append the content of the button we clicked to our displayVal variable and display it
//    displayVal += btnText; 
//    displayValElement.innerText = displayVal;
//    }







const displayVal="0";

const displayValElement = document.getElementById("#screen")


 // Updating the display field
updateDisplayVal = (e) => {
   const buttonText = e.target.innerText;
   if(displayVal === "0") { 
      displayVal = ""; 
   }
// Append the content of the button we clicked to our displayVal variable and display it
   displayVal += btnText; 
   displayValElement.innerText = displayVal;
}