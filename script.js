let inputString = '';

let buttons = document.querySelectorAll('.btns');
console.log(buttons);
let inputBox = document.querySelector('.input-section');
console.log(inputBox);

buttons.forEach((button) => {
  button.addEventListener('click', (e)=>{
    if(button.innerHTML === '='){
      inputString = eval(inputString);
      inputBox.innerHTML = inputString;
    }
    inputString = inputString + e.target.innerHTML;
    inputBox.innerHTML = inputString;
  })
})
