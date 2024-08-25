let num = 121 ;
let dl = 0 ;
let temp = num ;
let num1 = num ;
while (temp>0) {
    temp=Math.floor(temp/10); // 37 , 3  , 0 // (whole number function)
    dl++; // 1 , 2 , 3
}

let sum = 0;

while (num>0) {
  rem = num % 10 ; // 1 , 7 , 3
  sum = sum + Math.pow(rem,dl) ; // 0+1^3 ,  1+7^3  , 344 + 3^3
  num = Math.floor(num / 10) ; // 37 , 3 , 0 
}

if (sum==num1) {
    console.log(num1+" is a Armstrong Number");
    
} else {
    console.log(num1+" is not a Armstrong Number");
}

