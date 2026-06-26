// function sum(a, b) {
//   let x = a + 10;
//   let y = b + 20;

//   return x + y;
// }

// function doSomthing(q, p, add) {
//   let x = q + 1;
//   let y = p - 1;

//   console.log(add(q, p));
// }

// sum(10, 12);

/**
 *  Callback Hell
 * **/

// function getData(val, callback) {
//   setTimeout(() => {
//     console.log(val);
//     if (callback) {
//       callback();
//     }
//   }, 3000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4, () => {
//         getData(5);
//       });
//     });
//   });
// });

/**
 * Promise
 * **/

// function getData(Value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Value === 5) {
//         console.log("pending");
//       } else {
//         console.log(Value);
//         resolve("Quaery Solved");
//       }
//     }, 1000);
//   });
// }

// getData(1).then(() => getData(2))
//   .then(() => getData(3))
//   .then(() => getData(4))
//   .then(() => getData(5))
//   .then(() => getData(6))
//   .then(() => getData(7))
//   .catch((rej) => console.log(rej));

/**
 * Async await
 * **/

// async function sum(val) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(val * 2);
//       resolve("Quaery Solved");
//     }, 3000);
//   });
// }

// await sum(10);
// await sum(20);
// await sum(30);
// await sum(40);

for (let i = 1; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
