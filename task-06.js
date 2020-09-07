let input;
const numbers = [];
let total = 0;

while(true) {
  input = prompt('Enter number');
  let number = Number(input);
  if(isNaN(number)){
    alert('Not a number entered, try again');
    continue;
  } 
  if(input === null){
    break;
  }
  numbers.push(number);
  
}
if (numbers.length !== 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
}
console.log(`The total amount of numbers is ${total}`);
 