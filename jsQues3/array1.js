// . Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource')); //false
// console.log(is_array([1, 2, 4, 0])); //true

function is_array(input){
    return Array.isArray(input);
}

 function isarray(input) {
    // Using toString method to get the class of the input and checking if it is "[object Array]"
    if (toString.call(input) === "[object Array]")
      // Return true if the input is an array
      return true;
    // Return false if the input is not an array
    return false;   
  };
