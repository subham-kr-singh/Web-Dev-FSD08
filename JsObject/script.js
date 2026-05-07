// let sd = [
//   ["Subham", "13-07-2005", 7322938201, "Bhopal", "Student"],
//   ["suryansh", "13-07-2005", 7322938201, "Bhopal", "Student"],
//   ["om", "13-07-2005", 7322938201, "Bhopal", "Student"],
//   ["prince", "13-07-2005", 7322938201, "Bhopal", "Student"],
//   ["rajesh", "13-07-2005", 7322938201, "Bhopal", "Student"],
//   ["tushar", "13-07-2005", 7322938201, "Bhopal", "Student"],
//   ["Sumit", "13-07-2005", 7322938201, "Bhopal", "Student"],
// ];

// sd.forEach((element) => {
//   console.log(element[0]);
// });

const db = [
  {
    id: 1,
    name: "Amit Sharma",
    dob: "1998-05-14",
    phone: "+91-9876543210",
    city: "Bhopal",
    profession: "Software Engineer",
  },
  {
    id: 2,
    name: "Priya Verma",
    dob: "1996-11-22",
    phone: "+91-9123456780",
    city: "Indore",
    profession: "Data Analyst",
  },
  {
    id: 3,
    name: "Rahul Singh",
    dob: "2000-02-10",
    phone: "+91-9988776655",
    city: "Delhi",
    profession: "Student",
  },
  {
    id: 4,
    name: "Sneha Patel",
    dob: "1997-07-30",
    phone: "+91-9090909090",
    city: "Ahmedabad",
    profession: "UI Designer",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    dob: "1995-03-18",
    phone: "+91-8888888888",
    city: "Mumbai",
    profession: "Entrepreneur",
  },
  {
    id: 6,
    name: "Neha Gupta",
    dob: "1999-09-25",
    phone: "+91-7777777777",
    city: "Jaipur",
    profession: "Teacher",
  },
  {
    id: 7,
    name: "Vikram Joshi",
    dob: "1994-01-12",
    phone: "+91-7666555444",
    city: "Pune",
    profession: "Mechanical Engineer",
  },
  {
    id: 8,
    name: "Anjali Nair",
    dob: "1998-06-08",
    phone: "+91-7555444333",
    city: "Kochi",
    profession: "HR Manager",
  },
  {
    id: 9,
    name: "Rohit Kumar",
    dob: "1997-12-05",
    phone: "+91-7444333222",
    city: "Patna",
    profession: "Bank Clerk",
  },
  {
    id: 10,
    name: "Pooja Yadav",
    dob: "2001-04-19",
    phone: "+91-7333222111",
    city: "Lucknow",
    profession: "Nurse",
  },
  {
    id: 11,
    name: "Karan Malhotra",
    dob: "1993-08-27",
    phone: "+91-7222111000",
    city: "Chandigarh",
    profession: "Lawyer",
  },
  {
    id: 12,
    name: "Simran Kaur",
    dob: "1996-02-14",
    phone: "+91-7111000999",
    city: "Amritsar",
    profession: "Fashion Designer",
  },
  {
    id: 13,
    name: "Deepak Mishra",
    dob: "1995-10-03",
    phone: "+91-7000999888",
    city: "Varanasi",
    profession: "Shop Owner",
  },
  {
    id: 14,
    name: "Meera Iyer",
    dob: "1998-03-21",
    phone: "+91-6999888777",
    city: "Chennai",
    profession: "Content Writer",
  },
  {
    id: 15,
    name: "Suresh Reddy",
    dob: "1992-07-11",
    phone: "+91-6888777666",
    city: "Hyderabad",
    profession: "Civil Engineer",
  },
  {
    id: 16,
    name: "Nisha Das",
    dob: "2000-01-29",
    phone: "+91-6777666555",
    city: "Kolkata",
    profession: "Photographer",
  },
  {
    id: 17,
    name: "Manish Tiwari",
    dob: "1994-06-17",
    phone: "+91-6666555444",
    city: "Kanpur",
    profession: "Sales Executive",
  },
  {
    id: 18,
    name: "Ritu Saxena",
    dob: "1997-09-09",
    phone: "+91-6555444333",
    city: "Agra",
    profession: "Makeup Artist",
  },
  {
    id: 19,
    name: "Alok Chatterjee",
    dob: "1993-12-31",
    phone: "+91-6444333222",
    city: "Durgapur",
    profession: "Professor",
  },
  {
    id: 20,
    name: "Tanvi Kulkarni",
    dob: "1999-05-05",
    phone: "+91-6333222111",
    city: "Nagpur",
    profession: "Digital Marketer",
  },
];

// db.forEach((element) => {
//   console.log(element);
// });

// console.log(db);

// console.log(Object.keys(db));
// console.log(Object.values(db));

// console.log(Object.entries(db));

let ar = [22, 43, 6, 74, 8, 91, 100, 5, 23, 6, 45];

ar.sort((a, b) => a - b);
console.log(ar);

let val = ar.find((val) => val > 20);
console.log(val);

let val1 = ar.findIndex((val) => val === 6);
console.log(val1);

console.log(ar.findLastIndex((val) => val === 6));

db.map((element, idx) => {
  console.log(idx, element.name);
});

let array = [22, 43, 6, 74, 8, 91, 100, 5, 23, 6, 45];

console.log(array.filter((val) => val > 20));

console.log(array.find((val) => val > 20));