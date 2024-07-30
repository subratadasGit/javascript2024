// Conditional Operator

let number = -4;

if(number>0){
    console.log("Number is Positive "+number);
}
else if(number<0){
    console.log("Number is Negative "+number);
}
else{
    console.log("number is zero "+number);
}

// Ternary Operator

let marks = 41;
let result = (marks>40) ? "pass" : "Fail";
console.log(result);

// ternary operator example 2

let result2 = (number>0) ? "Number is Positive "+number : (number<0) ? "Number is Negative "+number : "number is zero "+number ;

console.log(result2);

// Function through ternary operator 

function human(){
    let age = 60 ;
    let result3 = (age > 59) ? "Senior Citizen" : "Not a Senior Citizen" ;
    console.log(result3);
}
human();
