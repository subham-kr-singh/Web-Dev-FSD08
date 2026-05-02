// function expression

const fun = function () {
  console.log("Hello world");
};

// Callback function

console.log(fun);

// Normal function call

fun();

// Arrow function

const arrowfun = () => {
  console.log("Arrow Function");
};

arrowfun();

const add = (a, b) => a + b;

console.log(add(10, 12));

const fun2 = name => {
    console.log("");
}

//Passed as argument (callback)

setTimeout(() => {
  console.log("Hello");
}, 2000);

//Immediately Invoked Function (IIFE)

(() => {
  console.log("IIFE");
})();
