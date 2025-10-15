let num1;
let num2;
let operator;
let result = 0;

const btn7 = document.querySelector('#num7');
const btn8 = document.querySelector('#num8');
const btn9 = document.querySelector('#num9');
const btn4 = document.querySelector('#num4');
const btn5 = document.querySelector('#num5');
const btn6 = document.querySelector('#num6');
const btn1 = document.querySelector('#num1');
const btn2 = document.querySelector('#num2');
const btn3 = document.querySelector('#num3');
const btn0 = document.querySelector('#num0');
const addBtn = document.querySelector('#add-btn');
const subtractBtn = document.querySelector('#subtract-btn');
const multiplyBtn = document.querySelector('#multiply-btn');
const divideBtn = document.querySelector('#divide-btn');
const deleteBtn = document.querySelector('#delete-btn');
const resetBtn = document.querySelector('#reset-btn');
const isEqualToBtn = document.querySelector('#is-equal-to-btn');
const decimalBtn = document.querySelector('#decimal-btn');

btn7.addEventListener('click', () => {
  console.log(btn7.innerText);
})

btn8.addEventListener('click', () => {
  console.log(btn8.innerText);
})

btn9.addEventListener('click', () => {
  console.log(btn9.innerText);
})

btn4.addEventListener('click', () => {
  console.log(btn4.innerText);
})

btn5.addEventListener('click', () => {
  console.log(btn5.innerText);
})

btn6.addEventListener('click', () => {
  console.log(btn6.innerText);
})

btn1.addEventListener('click', () => {
  console.log(btn1.innerText);
  if(num1){
    num2 = 1;
  } else {
    num1 = 1;
  }
})

btn2.addEventListener('click', () => {
  console.log(btn2.innerText);
  if(num1){
    num2 = 2;
  } else {
    num1 = 2;
  }
})

btn3.addEventListener('click', () => {
  console.log(btn3.innerText);
})

addBtn.addEventListener('click', () => {
  console.log(addBtn.innerText);
  operator = '+';
})

subtractBtn.addEventListener('click', () => {
  console.log(subtractBtn.innerText);
  operator = '-';
})

multiplyBtn.addEventListener('click', () => {
  console.log(multiplyBtn.innerText);
  operator = '*';
})

divideBtn.addEventListener('click', () => {
  console.log(divideBtn.innerText);
  operator = '/';
})

deleteBtn.addEventListener('click', () => {
  console.log(deleteBtn.innerText);
})

resetBtn.addEventListener('click', () => {
  console.log(resetBtn.innerText);
})

isEqualToBtn.addEventListener('click', () => {
  console.log(isEqualToBtn.innerText);
  if(operator === '+'){
    result = num1 + num2;
    console.log(result);
  } else if(operator === '-'){
    result = num1 - num2;
    console.log(result);
  }
})

decimalBtn.addEventListener('click', () => {
  console.log(decimalBtn.innerText);
})


/*

1) webpage banana
2) buttons banana
3) buttons m functionality add karna
4) webpage design karna

3) buttons m functionality add karna : -
  a) user number input karega
  b) user operator input karega
  c) operation perform karna
  d) output display karna


*/