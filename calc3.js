const number1 = document.getElementById("b1");
number1.addEventListener("click", () => inputNumber("1"))




let currentNumber1 = "";

const inputNumber = (n) => {
    currentNumber1 += n;
    console.log(currentNumber1)
}