const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    text: "Ali Al Yafei",
  },
];

// Select DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts
factsList.innerHTML = "";
createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `
    <li class="fact">
    <p>
      ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
        >(Source)</a
      >
    </p>
    <span class="tag" style="background-color: #3b82f6"
      >${fact.category}</span
    >
    </li>
    `
  );
  factsList.insertAdjacentHTML("afterbegin", htmlArray.join(""));
}
// const factsText = initialFacts.map((i) => `<i class="fact"> ${i.text} </i>`);
// factsList.insertAdjacentHTML("afterbegin", factsText.join(""));

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

/*

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

*/
