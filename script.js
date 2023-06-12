const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
// btn.addEventListener("click", function(){
//     console.log("CLICK");
// });
btn.addEventListener('click', function () {
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        btn.textContent = "Close";
    }
    else {
        form.classList.add('hidden')
        btn.textContent = "Share a fact";
    }
})


// Normal functions
function ageCalc(year) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    if (age < 0) {
        return ("Impossible.")
    }
    else if (age < 20) {
        return ("You're young");
    }

    else if (age < 30) {
        return ("You're in the middle");
    }

    else {
        return ("You're old");
    }
}

console.log(ageCalc(2028));
console.log(ageCalc(2015));
console.log(ageCalc(1997));
console.log(ageCalc(1970));

// Arrow functions and Ternary Operator
const ageCalc2 = (year) => year <= new Date().getFullYear() ? new Date().getFullYear() - year : `impossible year. It should be less than or equal ${new Date().getFullYear()}`;
console.log(ageCalc2(2058));
