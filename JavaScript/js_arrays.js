let names = ["pronoy","ayush","rajorshi"]; // array starts with 0 index 
console.log(names[2]);

names[0]="akash" ; // assigning the new value
console.log(names);

names.push("pronoy") // adding the  new element into the array
console.log(names);

names.unshift("ninja hatori") // adding the value (start)
console.log(names);

console.log(names.length); // total len of the array

// console.log(names.pop()) // delete the last value of the array LIFO(Last In First Out)
// console.log(names.pop())
// console.log(names.pop())

names.shift() // delete the zero index value
console.log(names);

// names.splice(1,3); //(index,del len)
// console.log(names);

let names2=["shinchan" , "doraemon", "shinchan"]
 let names3 = names.concat(names2)
console.log(names3);

let indexofvalue = names3.indexOf("shinchan")
console.log(indexofvalue);

console.log(names3.findIndex(checkname))

function checkname(_names3){
    return "shinchan" ;
}

let num = [22,10,50,30,15,40,45]

let value1= num.findIndex(checkname)
 function checkname(num1) {
    return num1 > 30  ; // return the first index value if function satisfied by condition
 }
 console.log(value1);

 const fruits = ["banana" , "apple" , "mango" , "watermelon"]
 console.log(fruits);
 fruits.fill("kiwi") // change throughout the array
 console.log(fruits);

const age = [12 , 15  , 20 , 45 ]
 const age2 = age.findLast(checkage) // findLast checks the function value and return last ele of the array 
function checkage(age){
    return age > 18 ;
}
console.log(age2);
const age3 = age.slice(-4,-1) // negative index slicing
console.log(age3);
