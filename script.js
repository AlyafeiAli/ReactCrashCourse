const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
// btn.addEventListener("click", function(){
//     console.log("CLICK");
// });
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// Normal functions
function ageCalc(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age < 0) {
    return "Impossible.";
  } else if (age < 20) {
    return "You're young";
  } else if (age < 30) {
    return "You're in the middle";
  } else {
    return "You're old";
  }
}

console.log(ageCalc(2028));
console.log(ageCalc(2015));
console.log(ageCalc(1997));
console.log(ageCalc(1970));

// Arrow functions and Ternary Operator
const ageCalc2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `impossible year. It should be less than or equal ${new Date().getFullYear()}`;
console.log(ageCalc2(2058));
console.log(ageCalc2(2008));

// Arrays
const myList = ["Abu Dhabi is the capital of UAE", 2023, true, "Baka Desu"];
console.log(myList[0]);
console.log(myList[myList.length - 1]); //last item

const [text, year, isTrue, bakaDesuKa] = myList; // Assigning multiple values at once
console.log(bakaDesuKa);
console.log(year);

// Objects / Dictionaries
const myObj = {
  text: "Abu Dhabi is the capital of UAE",
  category: "fact",
  myYear: 2023,
  isCorrect: true,
  createSummary: function () {
    return `this fact ${this.text} was created in ${this.myYear} and is ${this.isCorrect}`;
  },
};
console.log(myObj.text);
console.log(myObj["myYear"]);

const { category, isCorrect } = myObj;
console.log(category);
console.log(myObj.createSummary());

// Looping over arrays
const numArray = [2, 4, 6, 8];
numArray.forEach(function (i) {
  console.log(i);
});

// Map method
const times10 = numArray.map((i) => i * 10); // Same but in arrow function
// const times10 = numArray.map(function (i) {
//   return i * 10;
// });
console.log(times10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const stringOnly = CATEGORIES.map((i) => i.name); // retunr names only
console.log(stringOnly);
