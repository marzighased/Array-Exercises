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

//const numbers = [5, 8, 0, 3];

/*for (let i=0; i<numbers.length; i++){
    console.log(numbers[i])
} */

//console.log(...numbers);
//const str = "hello";
//console.log(...str);

//shallow copy

//let copyNumbers = [...numbers];
//console.log(copyNumbers);
//copyNumbers.push(77);
//console.log(numbers);
//console.log(copyNumbers);

/*const arr1 = [1, 2, 3];
const arr2 = [3, 4];
const newArr = [...arr1, ...arr2];
const newArr2 = [10, ...arr1, 20];

console.log(newArr);
console.log(newArr2);

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(arr1[0], arr1[1], arr1[2]));
console.log(sum(...arr1));

//deep copy

const nestedArray = [[1, 2],[3, 4]];
const copyNestedArray = JSON.parse(JSON.stringify(nestedArray));
copyNestedArray[0][0] = 99;
console.log(copyNestedArray);
console.log(nestedArray)*/

// Array Destructuring

/*const arr1= [1,2,3];
const [a,b,c] = arr1;
console.log(a)
console.log(b)
console.log(c)*/

//... Rest Operator

/*const arr1= [1,2,3,8,7,9,10];
const [a,b,...rest] = arr1;
console.log(a)
console.log(b)
console.log(rest)
*/

// shopping list management
/*
const products = [ 'banana', 'apple', 'orange']
let cart = [];
do {
let productName = prompt("enter name of the Product:")
console.log(productName)

if (productName === "exit") {
  break;
} else if (products.includes(productName)) {
   cart.push(productName);
   console.log("your cart includes:", cart)
 } else {
    alert("this name is not on the list!")
 }
} while(productName !== "exit")
 */

// customer queue manamgement

const customers = []
let input

do {
  input = parseInt(prompt('enter your choice:\n 1.add customer \n 2.remove customer \n 3.queue display \n 4.exit'))
  switch (input) {
          case 1:
            let customerName = prompt('Enter customer Name:')
            customers.push(customerName)
            console.log('new customer added.')
            break;
          case 2:
            customers.shift(customerName)
            console.log('customer removed.')  
  }         break;
} while (input !==4);