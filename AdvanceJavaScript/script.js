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

