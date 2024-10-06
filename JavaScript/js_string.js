let name1 = "  Ayush  "
let l1 = name1.length;  // length of the name1
console.log(l1);

let firchar = name1.charAt(1) ; // it is used to find the index char
console.log(firchar);

 let Ascii1=name1.charCodeAt(0) // converts into ASCII value
 console.log(Ascii1);
 
 let low1 = name1.toLowerCase() ; // converts into lower case every char of a string
 console.log(low1);

 let high1 = name1.toUpperCase(); // converts into upper case every char of a string
 console.log(high1);
 
 let slice1 = name1.slice(1,3)
 console.log(slice1);
 // A0 Y1 U2 S3 H4 slice up the string 

let replace1 = name1.replace("y","n") // you can use for replacing the char
console.log(replace1);

let split1 = name1.split("") // No space splitting converts string to array
console.log(split1);

let trim1 = name1.trim()
console.log(trim1); // trim the entier spaces from string
console.log(name1);
console.log(name1.trimStart());
console.log(name1.trimEnd());

let match1 = name1.match("yu") // match the text of targetting string
console.log(match1);

let v1 = "rajorshi"
let v2 = new String("rajorshi")

console.log(v1==v2); // checks only value 
console.log(v1===v2); // checks value and location

let con1 = "pronoy"
let con2 = "ayush"
console.log(con1+con2); // concat the value 

let text = "5642"
let padval = text.padStart(9,"X") // XXXXX5642
let padval2 = text.padEnd(9,"Y") // 5642YYYYY
console.log(padval);
console.log(padval2);


