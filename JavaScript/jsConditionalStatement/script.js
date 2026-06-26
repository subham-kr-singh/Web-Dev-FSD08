let num = 10;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

let age = 10;

if (age >= 18) {
  console.log("You can Vote");
} else {
  console.log("You can't Vote");
}

let marks = 90;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 75) {
  console.log("B");
} else if (marks >= 50) {
  console.log("C");
} else {
  console.log("Fail");
}

let username = "subham";
let password = "Password";

if (username !== "subham" && password !== "Password") {
  console.log("Wrong Username and Password");
} else if (username !== "subham") {
  console.log("Wrong Username");
} else if (password !== "Password") {
  console.log("Wrong password");
} else {
  console.log("Login Successful");
}

username !== "subham" && password !== "Password"
  ? console.log("Login Failed")
  : console.log("Login Sucessful");

let data;

let name = " ";

data = name || "N/A";

if (name) {
  console.log(true);
} else {
  console.log(false);
}

console.log(data);

let choose = 2;

switch (choose) {
  case 1:
    console.log("Tea");
    break;

  case 2:
    console.log("Coffee");
    break;

  case 3:
    console.log("Lassi");
    break;

  default:
    console.log("Water");
}
