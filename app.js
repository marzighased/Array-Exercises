//Array Definition and Length

/*const numbers = [1, 3, 4, 5, 7];
const colors = new Array("blue", "red", "green");

//console.log(numbers);
//console.log(colors);
//console.log(numbers[1]);

//numbers[0] = 100;
console.log(numbers);
//console.log(numbers.length);
numbers.length = 3;
console.log(numbers);
*/

//push ==> add to End of the Array

//const fruits = ["apple", "orange", "banana"];
/*console.log(fruits);
const newFruits = fruits.push("grape", "cherry");
console.log(fruits);
console.log(newFruits);

//pop ==> delete from End of the Array

fruits.pop();
console.log(fruits);
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits);
*/

//shift ==> delete from the Begining of the Array

//console.log(fruits.shift());
//console.log(fruits);

//unshift ==> add to the Begining of the Array

//fruits.unshift("kiwi", "peach");
//console.log(fruits);

//splice - slice

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//array.slice(start,end)

//const slicedNumbers1 = numbers.slice(2, 5);
//const slicedNumbers2 = numbers.slice(2);

//console.log(slicedNumbers2);
//console.log(numbers);

//array.splice(start, deleteCount, item1, ..., itemN)

//numbers.splice(4, 3);
//numbers.splice(4, 3, 101, 102, 103);

//console.log(numbers);

//concat

/*const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const combinedNumbers = num1.concat(num2);
console.log(combinedNumbers);*/

//flat

/*const nestedArray = [1, [2, 3], [8, 9]];
let flatedArray = nestedArray.flat(1);
console.log(flatedArray);
const nestedArray2 = [1, [2, 3], [8, [100, 200]]];
const flatedArray2 = nestedArray2.flat(2);
console.log(flatedArray2);*/

//join

/*const fruits = ["apple", "orange", "banana"];
const fruitsNew = fruits.join('-');
console.log(fruits);
console.log(fruitsNew);*/

//indexOf

/*const fruits = ["apple", "orange", "banana"];
const index = fruits.indexOf("orange");
console.log(index);

const hasApple = fruits.includes("apple");
console.log(hasApple);*/

//sort - reverse

/*const numbers = [5, 8, 0, 3];
numbers.sort();
//console.log(numbers);

const fruits = ["Banana", "orange", "apple"];
//fruits.sort();

fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);

const items = ["item1", "item2222", "item33", "item555"];
items.sort((a, b) => a.length - b.length);
console.log(items);

const dates = [
  { date: "2023-07-15" },
  { date: "2024-07-15" },
  { date: "2022-07-15" },
];
function compareDate(a, b) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA - dateB;
}
dates.sort(compareDate);
console.log(dates);

const reverseFruits = fruits.reverse();
console.log(reverseFruits);*/

//spread

const numbers = [5, 8, 0, 3];

/*for (let i=0; i<numbers.length; i++){
    console.log(numbers[i])
} */

console.log(...numbers);
const str = "hello";
console.log(...str);
