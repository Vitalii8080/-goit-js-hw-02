// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку
//(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

//function findLongestWord (string = ' ') {
// Write code under this line
//let word = string.split(' ');
//let longestWord = word[0];
//for (let i = 0; i < word.length; i += 1) {
//if (longestWord.length < word[i].length) {
// longestWord = word [i];
//}
// }

//return longestWord;
//}

//console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
//'jumped'

//console.log(findLongestWord('Google do a roll'));
//'Google'

//console.log(findLongestWord('May the force be with you'));
//'force'

//*************//////////////////// */

// function findLongestWord(string = ' ') {
//   const stringSplit = string.split(' ');
//   //May=3, the=3, force=5, be=2, with=4, you=3
//   let longestWord = '';
//   //.=0

//   for (const word of stringSplit) {
//     if (word.length >= longestWord.length) {
//       //1 progon - May.3 >.0 ->TRUE->longestWord=May.3
//       //2 progon - the.3 >May.3 ->FALSE - ...
//       //3 progon - force.5 > May.3 ->TRUE ->longestWord=Force.5
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// // 'jumped'

// console.log(findLongestWord('Google do a roll'));
// // 'Google'

// console.log(findLongestWord('May the force tanya be with you'));
// // 'force'
