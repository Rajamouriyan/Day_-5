// 1. DO the below programs in anonymous function & IIFE
// a) Print odd number in array

// Anonymous
let num=[3,6,7,8,9];
let oddnumber=num.filter(function(data){
    return data%2 !=0
})
console.log (oddnumber);

// output
// [ 3, 7, 9 ]

// IIFE
let array=[3,6,7,8,9];
(function() {
        let data = array.filter(num=>num%2 !==0)
        console.log(data);
    }
());

// ouput
// [ 3, 7, 9 ]

// b) convert all the strings to title caps in a string array

// Anonymous
let array = "india won the match";
let str = function() {
    let titlecase = array.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase);
  }
str()

// output
// India Won The Match

// IIFE
let array = "india won the match";
(function() {
    let titlecase = array.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase);
}());

// output
// India Won The Match

// c) sum of all numbers in an array

// Anonymous
let array=[3,6,7,8,9];
let getsum=function(){
        let add= array.reduce(function(a,b){
            return a+b
        })
        console.log (add);
}
getsum()

// output
//     33

// IIFE
let array=[3,6,7,8,9];
(function(){
        let add= array.reduce(function(a,b){
            return a+b
        })
        console.log (add);
}
());

// output
//     33

// 4) return all the prime numbers in an array

// Anonymous
let array=[3,6,7,8,9];
let prime=function(){
    array = array.filter((number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
        })
        console.log (array);
}
prime()

// output
// [ 3, 7 ]

// IIFE
let array=[3,6,7,8,9];
(function(){
    array = array.filter((number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
        })
        console.log (array);
}
());

// output
// [ 3, 7 ]

// 5) Return all the palindromes in an array

// Anonymous
let array=['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
let palindrome=function(){
    var arr = [];
    var str = array.slice(0);
    var pal = str.toString().split("").reverse().join("").split(",");
    
    for (let i = 0; i < array.length; i++) {
      for (let k = 0; k < pal.length; k++) {
        if (array[i] == pal[k]) {
          arr.push(array[i])
        }
      }
    }
    console.log(arr);
}
palindrome()

// output
// [ 'racecar', 'pineenip' ]


// IIFE
let array=['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
(function(){
    var arr = [];
    var str = array.slice(0);
    var pal = str.toString().split("").reverse().join("").split(",");
    
    for (let i = 0; i < array.length; i++) {
      for (let k = 0; k < pal.length; k++) {
        if (array[i] == pal[k]) {
          arr.push(array[i])
        }
      }
    }
        console.log (arr);
}
());

// output
// [ 'racecar', 'pineenip' ]

// 6) Return median of two sorted arrays of the same size.

let array1=[4,6,8];
let array2=[6,8,10];


let result = function(){
    let median = function(a, b) {

        let c = [...a, ...b].sort((a, b) => a - b);
    
        let half = c.length / 2 | 0;
        
    if (c.length % 2) {
        return c[half];
    } else {
        
        return (c[half] + c[half - 1]) / 2;
    }
    }
    console.log(median(array1,array2));
}
result()

// output
//     7

// IIFE

let array1=[4,6,8];
let array2=[6,8,10];

(function(){
    let median = function(a, b) {

        let c = [...a, ...b].sort((a, b) => a - b);
    
        let half = c.length / 2 | 0;
        
    if (c.length % 2) {
        return c[half];
    } else {
        
        return (c[half] + c[half - 1]) / 2;
    }
    }
    console.log(median(array1,array2));
}
());

// output
//     7

// 7)Remove duplicates from an array

// anonymous
let array = [1, 1, 2, 3, 4, 5, 5];
let removeDuplicates = function () {
    let duplicates = []
    let tempArray = [...array].sort() 
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] != tempArray[i]) {
        duplicates.push(tempArray[i])
      }
    }
    console.log(duplicates) 
  }
  removeDuplicates()

// output
// [ 1, 2, 3, 4, 5 ]

// IIFE

let array = [1, 1, 2, 3, 4, 5, 5];
(function () {
    let duplicates = []
    let tempArray = [...array].sort() 
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] != tempArray[i]) {
        duplicates.push(tempArray[i])
      }
    }
    console.log(duplicates);
  }
());

// output
// [ 1, 2, 3, 4, 5 ]

// 8) Rotate an array by k times

// anonymous

let array=[1,"Hi",3,"Hello"];
let K=2

let rotateArray = function(array, K) {
    if (array.length === K || K === 0) {
        return array;
    }
    K = K % array.length;
    for (let i = 0; i < K; i++) {
        array.unshift(array.pop());
    }
  console.log(array)
  }
  rotateArray([1,"Hi",3,"Hello"],2)

// ouput
// [ 3, 'Hello', 1, 'Hi' ]

// IIFE

(function(array, K) {
    if (array.length === K || K === 0) {
        return array;
    }
    K = K % array.length;
    for (let i = 0; i < K; i++) {
        array.unshift(array.pop());
    }
  console.log(array)
  }
 ([1,"Hi",3,"Hello"],2))

// ouput
// [ 3, 'Hello', 1, 'Hi' ]





// 3)Do the below programs in arrow functions.

//    a)Print odd numbers in an array

// code

let num=[3,6,7,8,9];
let oddnumber=num.filter(data => data%2 !=0)

console.log (oddnumber);


// output
// [ 3, 7, 9 ]


// b)Convert all the strings to title caps in a string array

// code

let array = "india won the match";
let titlecase = array.split(' ') 
    .map(a => a[0].toUpperCase() + a.substring(1).toLowerCase())
    .join(' ');

console.log(titlecase);
  
// output
// India Won The Match


// c)Sum of all numbers in an array

// code

let array=[3,6,7,8,9];
let add= array.reduce((a,b) => a+b);
console.log (add);

// output
// 33


// d)Return all the prime numbers in an array

// code

let array=[3,6,7,8,9];
let prime=array.filter((number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
        })
console.log (prime);

// output
// [ 3, 7 ]


// e)Return all the palindromes in an array

// code

let array=['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip'];
let getAllPalindromes = function (words) {
    return words.filter(function (word) {
       return word.split("").reverse().join("") === word;
     });
   };
   
console.log(getAllPalindromes(array));

// output
// [ 'racecar', 'pineenip' ]