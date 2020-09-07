const findLongestWord = function(string) {
  const arrayWord = string.split(' ');
  let word = '';
  for(let i = 0; i < arrayWord.length; i += 1){
    if(word.length < arrayWord[i].length)  {
       word = arrayWord[i];
    } 
  }
  return word;
  }


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'