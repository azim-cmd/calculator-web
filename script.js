let inputArrays = [];

let buttons = document.querySelectorAll('.btns');
console.log(buttons);
let inputBox = document.querySelector('.input-section');
console.log(inputBox);

buttons.forEach((button, index) => {
  button.addEventListener('click', ()=>{
    inputArrays.push(Number(button.innerHTML));

    console.log(inputArrays);
    inputBox.innerHTML = inputArrays;
  })
})
