// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
const stringify = (a, b) => `${a} ${b}`;

const consume = (a,b, cb) => {
  return cb(a, b);
}

console.log(consume('Hello', 'World!!', stringify));

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (x, y) => x + y;
const multiply = (x , y) => x * y;
const greeting =  (firstName, lastName) => `Hello ${firstName} ${lastName}, nice to meet you!`;

console.log(consume(20, 5, add));
console.log(consume(5, 60, multiply));
console.log(consume('Corey', 'Gumbs', greeting));

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 

```
Nested function can access the internal variable because the variabl is considered a local scope variable within the function. 
Any variable declared within a function is accessible to all variables/bjects/functions that are declared within that particular function. 
basically, any variable declared within a function (Parent), is accessible to a nested function (child) but not vice versa (Child function variable => Parent function). 
```

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
